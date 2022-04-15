"use strict";



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const babel = require("@babel/core");

babel.transform("code", optionsObject);
"use strict";

function tableHandler() {
  let table = document.getElementById("DepressionSurvey");

  for (var row in table.rows) {
    console.log(row.toString());
  }

  ;
}

function sumbitHandler() {
  document.getElementById("sumbitDepression").onclick = tableHandler();
}

submitHandler();