/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 const babel = require("@babel/core");
 babel.transform("code", optionsObject);
 import Chart from 'chart.js/auto';
 import "core-js/stable";
 import "regenerator-runtime/runtime";
 import { saveAs } from 'file-saver';
 import clone from 'just-clone';
 */

"use strict";
// Survey Report
const SurveyReport = {
  surveyID: "",
  userID: "",
  date: {
    year: 0,
    month: 0,
    week: "",
    day: 0
  },
  surveyValues: [],
  surveyResult: 0,
  comment: "hello world!"
};
let SurveyReports = [],
  CanvasCount = 0;

/**
 * Logs the Survey Table values and result
 *  to the Survey Report object.
 * @param {docElement} table The table to read the data from.
 * @returns {undefined}
 */
function tableHandler(table) {
  let surveyResult = 0;
  // row traversal logic
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    // radio-button-group traversal logic
    let radioButtonGroup = document.getElementsByName(`question${i + 1}`);
    for (let j = 0; j < radioButtonGroup.length; j++) {
      if (radioButtonGroup[j].checked) {
        // debug
        console.log(`Value: ${+radioButtonGroup[j].value}`);
        // arithmetic
        SurveyReport.surveyValues.push(radioButtonGroup[j].value);
        surveyResult += +radioButtonGroup[j].value;
        // visual reset
        radioButtonGroup[j].checked = false;
        break;
      }
    }
    // debug
    console.log(`Sum: ${surveyResult}`);
  }
  SurveyReport.surveyResult = surveyResult;
}

/**
 * Logs the user's comment to the
 *  Survey Report object
 * @returns {undefined}
 */
function getComment() {
  let textArea = document.getElementById("textArea");
  SurveyReport.comment = textArea.value;
  textArea.value = "";
  // Debug
  // console.log("Text: " + SurveyReport.comment);
}

/**
 * Logs date form was completed
 *  to the Survey Report object
 * Format: Weekday Month NumDay Year
 *  - Short form of Weekday and Month used
 *  - Sepearated by spaces
 * @returns {undefined}
 */
function getDate() {
  // Get date
  const d = new Date();
  let currentDay, weekStart, weekEnd;
  SurveyReport.date.year = d.getFullYear();
  SurveyReport.date.month = d.getMonth();
  SurveyReport.date.day = d.getDate();
  currentDay = d.getDay();
  weekStart = new Date(
    SurveyReport.date.year,
    SurveyReport.date.month,
    SurveyReport.date.day - currentDay
  );
  weekEnd = new Date(
    SurveyReport.date.year,
    SurveyReport.date.month,
    SurveyReport.date.day + (6 - currentDay)
  );
  SurveyReport.date.week = `${weekStart.getDate()},${weekEnd.getDate()}`;
  // debug
  console.log(SurveyReport.date.toString());
}

/**
 * Logs userID to the
 *  Survey Report object
 * @returns {undefined}
 */
function getUserID() {
  let userID = "anon";
  SurveyReport.userID = userID;
}

/**
 * Compiles a user record that can be
 *  logged and charted
 * ?asynchronously?
 * @param {String} ID The table it is reading from.
 * @returns {undefined}
 */
window.submitForm = function submitForm(ID) {
  // Get userid
  getUserID();
  // Get date
  getDate();
  // Get depression table info & comment
  SurveyReport.surveyID = ID;
  const table = document.getElementById("SurveyTable");
  tableHandler(table);
  getComment();
  // Store and read data
  saveData(SurveyReport);
  readDataFromStorage(ID);
  // Graph data
  graphData(ID);
};

/**
 * Saves survey data to the
 *  browser's local storage
 * @since Delimiter hierarchy (highest to lowest):
 *  ";" -> ":" -> "-" or ",".
 *  "!" operator returns true if null
 *  "~" operator returns true if not -1
 *  @param {Object} data The SurveyReport object
 *   to be stored.
 * @returns {undefined}
 */
function saveData(data) {
  if (typeof window.Storage !== "undefined") {
    let flag = false;
    let key = `${data.surveyID};${data.date.year}:${data.date.month}`;
    let valueRange = `w:${data.date.week}`;
    let value = `d:${data.date.day}:${data.surveyValues.toString()}:${
      data.surveyResult
    }:${data.comment}`;
    // Debug
    // console.log("length = " + localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      // If a key with the same ID already exists
      if (localStorage.key(i).charAt(0) === data.surveyID) {
        flag = true;
        break;
      }
    }
    let oldData = localStorage.getItem(key);
    // "!" operator returns true if null
    // New entry
    if (!oldData) {
      // New month
      if (flag) {
        // Save data to file system
        let fKey, fValue, blob;
        for (let i = 0; i < localStorage.length; i++) {
          fKey = localStorage.key(i);
          fValue = localStorage.getItem(fKey);
          blob = new Blob([`${fValue}`], { type: "text/plain;charset=utf-8" });
          saveAs(blob, `${fKey}.txt`);
        }
        clearLocalStorage();
      }
      console.log("creating save for " + data.surveyID);
      localStorage.setItem(key, `${key};${valueRange}:${value}`);
    } else {
      // "~" operator returns true if not -1
      // Existing key; week range conflict
      if (oldData.includes(valueRange)) {
        // Existing key; week range conflict; day conflict
        if (oldData.includes(`d:${data.date.day}`)) {
          localStorage.setItem(
            key,
            `${oldData.slice(
              0,
              oldData.lastIndexOf(`:d:${data.date.day}:`) + 0
            )}:${value}`
          );
        } else {
          // Existing key; week range conflict; no day conflict
          localStorage.setItem(key, `${oldData}:${value}`);
        }
      } else {
        // Existing key; no week range conflict
        localStorage.setItem(key, `${oldData};${valueRange}:${value}`);
      }
    }
    // Debug
    // clearLocalStorage();
    checkStorageSize();
  }
}

/**
 * Read data from local storage
 * @param {String} ID The table it is reading from.
 * @returns {undefined}
 */
function readDataFromStorage(ID) {
  if (ID === "") {
    if (SurveyReports.length > 0) {
      ID = SurveyReports[0].surveyID;
    }
  }
  for (let i = 0; i < localStorage.length; i++) {
    // If a key with the same ID already exists
    if (
      localStorage.key(i).charAt(0) === ID &&
      localStorage.key(i).charAt(1) === ";"
    ) {
      let storedData = localStorage.getItem(localStorage.key(i));
      parseData(storedData);
      graphData(storedData.charAt(0));
      break;
    }
  }
}

/**
 * Read data from file
 * @returns {undefined}
 */
window.readDataFromFile = function readDataFromFile() {
  let fileName = document.getElementById("formFile").files[0];
  let fileReader = new FileReader();
  fileReader.onload = function (loadedFile) {
    let storedData = loadedFile.target.result;
    // Debug
    // console.log(storedData);
    parseData(storedData);
    graphData(storedData.charAt(0));
  };
  fileReader.onerror = function (loadedFile) {
    alert(
      "Failed to read file." +
        "\n" +
        "Please make sure you are inputting the correct file." +
        "\n" +
        "Example filename: D;2021_8.txt"
    );
  };
  fileReader.readAsText(fileName);
};

/**
 * Parses data
 * @since Delimiter hierarchy (highest to lowest):
 *  ";" -> ":" -> "-" or ",".
 * @param {String} storedData The string data to parse.
 * @returns {undefined}
 */
function parseData(storedData) {
  try {
    let highLevel = [],
      key = [];
    let newSurveyReport = {},
      midLevel = [];
    highLevel = storedData.split(";");
    key = highLevel[1].split(":");
    for (let x = 2; x < highLevel.length; x++) {
      newSurveyReport = clone(SurveyReport);
      newSurveyReport.surveyID = highLevel[0]; // String
      newSurveyReport.date.year = +key[0]; // Integer
      newSurveyReport.date.month = +key[1]; // Integer

      midLevel = highLevel[x].split(":");
      newSurveyReport.date.week = midLevel[1]; // String
      newSurveyReport.date.day = +midLevel[3]; // Integer
      newSurveyReport.surveyValues = midLevel[4].split(","); // Integer Array
      /*
             for (let y = 0; y < newSurveyReport.surveyValues.length; y++) {
             newSurveyReport.surveyValues[y] = +newSurveyReport.surveyValues[y];
             }
             */
      newSurveyReport.surveyResult = +midLevel[5]; // Integer
      newSurveyReport.comment = midLevel[6]; // String

      SurveyReports.push(newSurveyReport);
    }
  } catch (error) {
    alert(
      "Failed to parse file." +
        "\n" +
        "Please make sure you are inputting the correct file." +
        "\n" +
        "Example filename: D;2021_8.txt"
    );
  }
}

/**
 * Checks the current storage size
 *  of the browser's local storage
 * @returns {undefined}
 */
function checkStorageSize() {
  var _lsTotal = 0,
    _xLen,
    _x;
  for (_x in localStorage) {
    if (!localStorage.hasOwnProperty(_x)) {
      continue;
    }
    _xLen = (localStorage[_x].length + _x.length) * 2;
    _lsTotal += _xLen;
    console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB");
  }
  console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB out of 5000 KB");
}

/**
 * Creates a line graph and
 *  populates it with data from the
 *  Survey Report object
 * @param {String} ID The survey ID to determine
 *  which type of survey to graph.
 * @returns {undefined}
 */
function graphData(ID) {
  if (SurveyReports.length > 0) {
    if (ID === "") {
      ID = SurveyReports[0].surveyID;
    }
    let container = document.getElementsByClassName("container-fluid");
    container = container[container.length - 1];
    let newDiv = document.createElement("div"),
      newCanvas = document.createElement("canvas"),
      ctx;
    CanvasCount++;
    newDiv.class = "canvas-container";
    newDiv.style.margin = "auto auto 4em";
    newCanvas.id = `canvas${CanvasCount}`;
    newCanvas.width = "300";
    newCanvas.height = "300";
    newCanvas.style.backgroundColor = "white";
    newCanvas.textContent =
      "Your browser does not support the &lt;canvas&gt; element.";
    container.parentNode.insertBefore(newDiv, container.nextSibling);
    newDiv.appendChild(newCanvas);
    ctx = document.getElementById(`canvas${CanvasCount}`).getContext("2d");
    // X-axis labels
    /*
         let d, currentDay, weekStart, weekEnd, weeks = [];
         for (let x = 1; x < 32; x += 7) {
         d = new Date(data.date.year, data.date.month, x);
         currentDay = d.getDay();
         weekStart = new Date(d.getFullYear(), d.getMonth(), x - currentDay);
         weekEnd = new Date(d.getFullYear(), d.getMonth(), x + (6 - currentDay));
         weeks.push(`${weekStart.getDate()} - ${weekEnd.getDate()}`);
         }
         */

    // Graph title
    const Months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let title;
    if (ID === "D") {
      title = `${Months[SurveyReports[0].date.month]} ${
        SurveyReports[0].date.year
      } Depression Survey`;
    } else if (ID === "A") {
      title = `${Months[SurveyReports[0].date.month]} ${
        SurveyReports[0].date.year
      } Anxiety Survey`;
    }

    // Graph points
    let xAxis = [],
      points = [],
      comments = Array.apply(null, Array(31)).map(function (x, i) {
        return "";
      });
    SurveyReports.forEach(report => {
      if (report.surveyID === ID) {
        xAxis.push(report.date.day);
        points.push(report.surveyResult);
        comments[report.date.day - 1] = report.comment;
      }
    });
    const legend = {
      labels: xAxis, //change to dates
      datasets: [
        {
          label: title,
          backgroundColor: "#006ee0",
          borderColor: "#006ee0",
          data: points
        }
      ]
    };
    Chart.defaults.font.size = 16;
    Chart.defaults.color = "#000000";
    new Chart(ctx, {
      type: "line",
      data: legend,
      options: {
        scale: {
          y: {
            min: 0,
            max: 200,
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            // Disable the on-canvas tooltip
            intersect: false,
            enabled: false,
            external: function (context) {
              var tooltipComment = "";
              // Tooltip Element
              var tooltipEl = document.getElementById("chartjs-tooltip");

              // Create element on first render
              if (!tooltipEl) {
                tooltipEl = document.createElement("div");
                tooltipEl.id = "chartjs-tooltip";
                tooltipEl.innerHTML = "<table></table>";
                document.body.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              var tooltipModel = context.tooltip;
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
              }

              // Set caret Position
              tooltipEl.classList.remove("above", "below", "no-transform");
              if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
              } else {
                tooltipEl.classList.add("no-transform");
              }

              function getBody(bodyItem) {
                return bodyItem.lines;
              }

              // Set Text
              if (tooltipModel.body) {
                var titleLines = tooltipModel.title || [];
                var bodyLines = tooltipModel.body.map(getBody);

                var innerHtml = "<thead>";

                titleLines.forEach(function (title) {
                  if (title === "1") {
                    innerHtml +=
                      "<tr><th>" + "Date: " + title + "st" + "</th></tr>";
                  } else if (title === "2") {
                    innerHtml +=
                      "<tr><th>" + "Date: " + title + "nd" + "</th></tr>";
                  } else if (title === "3") {
                    innerHtml +=
                      "<tr><th>" + "Date: " + title + "rd" + "</th></tr>";
                  } else {
                    innerHtml +=
                      "<tr><th>" + "Date: " + title + "th" + "</th></tr>";
                  }
                  tooltipComment = comments[title - 1];
                });
                innerHtml += "</thead><tbody>";
                bodyLines.forEach(function (body, i) {
                  var colors = tooltipModel.labelColors[i];
                  var style = "background:" + colors.backgroundColor;
                  style += "; border-color:" + colors.borderColor;
                  style += "; border-width: 2px";
                  var span = '<span style="' + style + '"></span>';
                  innerHtml +=
                    "<tr><td>" +
                    span +
                    body +
                    "<br>" +
                    "Comment: " +
                    tooltipComment +
                    "</td></tr>";
                });
                innerHtml += "</tbody>";

                var tableRoot = tooltipEl.querySelector("table");
                tableRoot.innerHTML = innerHtml;
              }

              var position = context.chart.canvas.getBoundingClientRect();
              var bodyFont = Chart.helpers.toFont(
                tooltipModel.options.bodyFont
              );

              // Display, position, and set styles for font
              tooltipEl.style.opacity = 1;
              tooltipEl.style.position = "absolute";
              tooltipEl.style.left =
                position.left + window.pageXOffset + tooltipModel.caretX + "px";
              tooltipEl.style.top =
                position.top + window.pageYOffset + tooltipModel.caretY + "px";
              tooltipEl.style.font = bodyFont.string;
              tooltipEl.style.fontSize = "calc(12px + 0.1vw)";
              tooltipEl.style.backgroundColor = "#333333";
              tooltipEl.style.color = "#cccccc";
              tooltipEl.style.padding = "10px";
              tooltipEl.style.pointerEvents = "none";
            }
          }
        }
      }
    });
    SurveyReports = [];
  }
}

let isOpen = false;
let parent = document.getElementById("swappingNav");
let switching;
let target = document.getElementsByClassName("collapse")[0];
function swapElements() {
  target.addEventListener("show.bs.collapse", function () {
    switching = document.getElementsByClassName("swap");
    parent.insertBefore(switching[1], switching[0]);
    window.addEventListener("resize", handleResize);
  });
  target.addEventListener("hidden.bs.collapse", function () {
    switching = document.getElementsByClassName("swap");
    parent.insertBefore(switching[1], switching[0]);
    window.removeEventListener("resize", handleResize);
  });
}
function handleResize() {
  if (window.innerWidth >= 992 && !isOpen) {
    switching = document.getElementsByClassName("swap");
    parent.insertBefore(switching[1], switching[0]);
    isOpen = true;
  } else if (window.innerWidth < 992 && isOpen) {
    switching = document.getElementsByClassName("swap");
    parent.insertBefore(switching[1], switching[0]);
    isOpen = false;
  }
}

function loadLocalGraphs() {
  let path = location.pathname,
    page = path.slice(path.lastIndexOf("/") + 1);
  if (page === "graphs.html") {
    readDataFromStorage("D");
    readDataFromStorage("A");
  }
}

function onloader() {
  swapElements();
  loadLocalGraphs();
}
onload = onloader();

window.clearLocalStorage = function clearLocalStorage() {
  let confirmation = confirm(
    "Are you sure you want to erase browser storage data?"
  );
  if (confirmation === true) {
    localStorage.clear();
  }
};

window.displaySafetyAlert = function displaySafetyAlert() {
  alert(
    "If, at any point, your thoughts turn into urges, please seek immediate help."
  );
};
