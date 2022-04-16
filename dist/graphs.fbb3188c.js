// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aIdiY":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bDbGG":[function(require,module,exports) {
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */ /*
 const babel = require("@babel/core");
 babel.transform("code", optionsObject);
 import Chart from 'chart.js/auto';
 import "core-js/stable";
 import "regenerator-runtime/runtime";
 import { saveAs } from 'file-saver';
 import clone from 'just-clone';
 */ "use strict"; // Survey Report
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.number.to-fixed.js");
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
let SurveyReports = [], CanvasCount = 0;
/**
 * Logs the Survey Table values and result
 *  to the Survey Report object.
 * @param {docElement} table The table to read the data from.
 * @returns {undefined}
 */ function tableHandler(table) {
    let surveyResult = 0; // row traversal logic
    const rows = table.rows;
    for(let i = 0; i < rows.length; i++){
        // radio-button-group traversal logic
        let radioButtonGroup = document.getElementsByName("question".concat(i + 1));
        for(let j = 0; j < radioButtonGroup.length; j++)if (radioButtonGroup[j].checked) {
            // debug
            console.log("Value: ".concat(+radioButtonGroup[j].value)); // arithmetic
            SurveyReport.surveyValues.push(radioButtonGroup[j].value);
            surveyResult += +radioButtonGroup[j].value; // visual reset
            radioButtonGroup[j].checked = false;
            break;
        }
         // debug
        console.log("Sum: ".concat(surveyResult));
    }
    SurveyReport.surveyResult = surveyResult;
}
/**
 * Logs the user's comment to the
 *  Survey Report object
 * @returns {undefined}
 */ function getComment() {
    let textArea = document.getElementById("textArea");
    SurveyReport.comment = textArea.value;
    textArea.value = ""; // Debug
// console.log("Text: " + SurveyReport.comment);
}
/**
 * Logs date form was completed
 *  to the Survey Report object
 * Format: Weekday Month NumDay Year
 *  - Short form of Weekday and Month used
 *  - Sepearated by spaces
 * @returns {undefined}
 */ function getDate() {
    // Get date
    const d = new Date();
    let currentDay, weekStart, weekEnd;
    SurveyReport.date.year = d.getFullYear();
    SurveyReport.date.month = d.getMonth();
    SurveyReport.date.day = d.getDate();
    currentDay = d.getDay();
    weekStart = new Date(SurveyReport.date.year, SurveyReport.date.month, SurveyReport.date.day - currentDay);
    weekEnd = new Date(SurveyReport.date.year, SurveyReport.date.month, SurveyReport.date.day + (6 - currentDay));
    SurveyReport.date.week = "".concat(weekStart.getDate(), ",").concat(weekEnd.getDate()); // debug
    console.log(SurveyReport.date.toString());
}
/**
 * Logs userID to the
 *  Survey Report object
 * @returns {undefined}
 */ function getUserID() {
    let userID = "anon";
    SurveyReport.userID = userID;
}
/**
 * Compiles a user record that can be
 *  logged and charted
 * ?asynchronously?
 * @param {String} ID The table it is reading from.
 * @returns {undefined}
 */ window.submitForm = function submitForm(ID) {
    // Get userid
    getUserID(); // Get date
    getDate(); // Get depression table info & comment
    SurveyReport.surveyID = ID;
    const table = document.getElementById("SurveyTable");
    tableHandler(table);
    getComment(); // Store and read data
    saveData(SurveyReport);
    readDataFromStorage(ID); // Graph data
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
 */ function saveData(data) {
    if (typeof window.Storage !== "undefined") {
        let flag = false;
        let key = "".concat(data.surveyID, ";").concat(data.date.year, ":").concat(data.date.month);
        let valueRange = "w:".concat(data.date.week);
        let value = "d:".concat(data.date.day, ":").concat(data.surveyValues.toString(), ":").concat(data.surveyResult, ":").concat(data.comment); // Debug
        // console.log("length = " + localStorage.length);
        for(let i = 0; i < localStorage.length; i++)// If a key with the same ID already exists
        if (localStorage.key(i).charAt(0) === data.surveyID) {
            flag = true;
            break;
        }
        let oldData = localStorage.getItem(key); // "!" operator returns true if null
        // New entry
        if (!oldData) {
            // New month
            if (flag) {
                // Save data to file system
                let fKey, fValue, blob;
                for(let i = 0; i < localStorage.length; i++){
                    fKey = localStorage.key(i);
                    fValue = localStorage.getItem(fKey);
                    blob = new Blob([
                        "".concat(fValue)
                    ], {
                        type: "text/plain;charset=utf-8"
                    });
                    saveAs(blob, "".concat(fKey, ".txt"));
                }
                clearLocalStorage();
            }
            console.log("creating save for " + data.surveyID);
            localStorage.setItem(key, "".concat(key, ";").concat(valueRange, ":").concat(value));
        } else // "~" operator returns true if not -1
        // Existing key; week range conflict
        if (oldData.includes(valueRange)) {
            // Existing key; week range conflict; day conflict
            if (oldData.includes("d:".concat(data.date.day))) localStorage.setItem(key, "".concat(oldData.slice(0, oldData.lastIndexOf(":d:".concat(data.date.day, ":")) + 0), ":").concat(value));
            else // Existing key; week range conflict; no day conflict
            localStorage.setItem(key, "".concat(oldData, ":").concat(value));
        } else // Existing key; no week range conflict
        localStorage.setItem(key, "".concat(oldData, ";").concat(valueRange, ":").concat(value));
         // Debug
        // clearLocalStorage();
        checkStorageSize();
    }
}
/**
 * Read data from local storage
 * @param {String} ID The table it is reading from.
 * @returns {undefined}
 */ function readDataFromStorage(ID) {
    if (ID === "") {
        if (SurveyReports.length > 0) ID = SurveyReports[0].surveyID;
    }
    for(let i = 0; i < localStorage.length; i++)// If a key with the same ID already exists
    if (localStorage.key(i).charAt(0) === ID && localStorage.key(i).charAt(1) === ";") {
        let storedData = localStorage.getItem(localStorage.key(i));
        parseData(storedData);
        graphData(storedData.charAt(0));
        break;
    }
}
/**
 * Read data from file
 * @returns {undefined}
 */ window.readDataFromFile = function readDataFromFile() {
    let fileName = document.getElementById("formFile").files[0];
    let fileReader = new FileReader();
    fileReader.onload = function(loadedFile) {
        let storedData = loadedFile.target.result; // Debug
        // console.log(storedData);
        parseData(storedData);
        graphData(storedData.charAt(0));
    };
    fileReader.onerror = function(loadedFile) {
        alert("Failed to read file.\nPlease make sure you are inputting the correct file.\nExample filename: D;2021_8.txt");
    };
    fileReader.readAsText(fileName);
};
/**
 * Parses data
 * @since Delimiter hierarchy (highest to lowest):
 *  ";" -> ":" -> "-" or ",".
 * @param {String} storedData The string data to parse.
 * @returns {undefined}
 */ function parseData(storedData) {
    try {
        let highLevel = [], key = [];
        let newSurveyReport = {}, midLevel = [];
        highLevel = storedData.split(";");
        key = highLevel[1].split(":");
        for(let x = 2; x < highLevel.length; x++){
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
             */ newSurveyReport.surveyResult = +midLevel[5]; // Integer
            newSurveyReport.comment = midLevel[6]; // String
            SurveyReports.push(newSurveyReport);
        }
    } catch (error) {
        alert("Failed to parse file.\nPlease make sure you are inputting the correct file.\nExample filename: D;2021_8.txt");
    }
}
/**
 * Checks the current storage size
 *  of the browser's local storage
 * @returns {undefined}
 */ function checkStorageSize() {
    var _lsTotal = 0, _xLen, _x;
    for(_x in localStorage){
        if (!localStorage.hasOwnProperty(_x)) continue;
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
 */ function graphData(ID) {
    if (SurveyReports.length > 0) {
        if (ID === "") ID = SurveyReports[0].surveyID;
        let container = document.getElementsByClassName("container-fluid");
        container = container[container.length - 1];
        let newDiv = document.createElement("div"), newCanvas = document.createElement("canvas"), ctx;
        CanvasCount++;
        newDiv.class = "canvas-container";
        newDiv.style.margin = "auto auto 4em";
        newCanvas.id = "canvas".concat(CanvasCount);
        newCanvas.width = "300";
        newCanvas.height = "300";
        newCanvas.style.backgroundColor = "white";
        newCanvas.textContent = "Your browser does not support the &lt;canvas&gt; element.";
        container.parentNode.insertBefore(newDiv, container.nextSibling);
        newDiv.appendChild(newCanvas);
        ctx = document.getElementById("canvas".concat(CanvasCount)).getContext("2d"); // X-axis labels
        /*
         let d, currentDay, weekStart, weekEnd, weeks = [];
         for (let x = 1; x < 32; x += 7) {
         d = new Date(data.date.year, data.date.month, x);
         currentDay = d.getDay();
         weekStart = new Date(d.getFullYear(), d.getMonth(), x - currentDay);
         weekEnd = new Date(d.getFullYear(), d.getMonth(), x + (6 - currentDay));
         weeks.push(`${weekStart.getDate()} - ${weekEnd.getDate()}`);
         }
         */ // Graph title
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
        let title1;
        if (ID === "D") title1 = "".concat(Months[SurveyReports[0].date.month], " ").concat(SurveyReports[0].date.year, " Depression Survey");
        else if (ID === "A") title1 = "".concat(Months[SurveyReports[0].date.month], " ").concat(SurveyReports[0].date.year, " Anxiety Survey");
         // Graph points
        let xAxis = [], points = [], comments = Array.apply(null, Array(31)).map(function(x, i) {
            return "";
        });
        SurveyReports.forEach((report)=>{
            if (report.surveyID === ID) {
                xAxis.push(report.date.day);
                points.push(report.surveyResult);
                comments[report.date.day - 1] = report.comment;
            }
        });
        const legend = {
            labels: xAxis,
            //change to dates
            datasets: [
                {
                    label: title1,
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
                        external: function external(context) {
                            var tooltipComment = ""; // Tooltip Element
                            var tooltipEl = document.getElementById("chartjs-tooltip"); // Create element on first render
                            if (!tooltipEl) {
                                tooltipEl = document.createElement("div");
                                tooltipEl.id = "chartjs-tooltip";
                                tooltipEl.innerHTML = "<table></table>";
                                document.body.appendChild(tooltipEl);
                            } // Hide if no tooltip
                            var tooltipModel = context.tooltip;
                            if (tooltipModel.opacity === 0) {
                                tooltipEl.style.opacity = 0;
                                return;
                            } // Set caret Position
                            tooltipEl.classList.remove("above", "below", "no-transform");
                            if (tooltipModel.yAlign) tooltipEl.classList.add(tooltipModel.yAlign);
                            else tooltipEl.classList.add("no-transform");
                            function getBody(bodyItem) {
                                return bodyItem.lines;
                            } // Set Text
                            if (tooltipModel.body) {
                                var titleLines = tooltipModel.title || [];
                                var bodyLines = tooltipModel.body.map(getBody);
                                var innerHtml = "<thead>";
                                titleLines.forEach(function(title) {
                                    if (title === "1") innerHtml += "<tr><th>Date: " + title + "st" + "</th></tr>";
                                    else if (title === "2") innerHtml += "<tr><th>Date: " + title + "nd" + "</th></tr>";
                                    else if (title === "3") innerHtml += "<tr><th>Date: " + title + "rd" + "</th></tr>";
                                    else innerHtml += "<tr><th>Date: " + title + "th" + "</th></tr>";
                                    tooltipComment = comments[title - 1];
                                });
                                innerHtml += "</thead><tbody>";
                                bodyLines.forEach(function(body, i) {
                                    var colors = tooltipModel.labelColors[i];
                                    var style = "background:" + colors.backgroundColor;
                                    style += "; border-color:" + colors.borderColor;
                                    style += "; border-width: 2px";
                                    var span = '<span style="' + style + '"></span>';
                                    innerHtml += "<tr><td>" + span + body + "<br>" + "Comment: " + tooltipComment + "</td></tr>";
                                });
                                innerHtml += "</tbody>";
                                var tableRoot = tooltipEl.querySelector("table");
                                tableRoot.innerHTML = innerHtml;
                            }
                            var position = context.chart.canvas.getBoundingClientRect();
                            var bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont); // Display, position, and set styles for font
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.position = "absolute";
                            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + "px";
                            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + "px";
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
    target.addEventListener("show.bs.collapse", function() {
        switching = document.getElementsByClassName("swap");
        parent.insertBefore(switching[1], switching[0]);
        window.addEventListener("resize", handleResize);
    });
    target.addEventListener("hidden.bs.collapse", function() {
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
    let path = location.pathname, page = path.slice(path.lastIndexOf("/") + 1);
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
    let confirmation = confirm("Are you sure you want to erase browser storage data?");
    if (confirmation === true) localStorage.clear();
};
window.displaySafetyAlert = function displaySafetyAlert() {
    alert("If, at any point, your thoughts turn into urges, please seek immediate help.");
};

},{"core-js/modules/es.regexp.to-string.js":"8bEcW","core-js/modules/es.string.includes.js":"iQrGk","core-js/modules/es.regexp.exec.js":"pNALB","core-js/modules/es.string.split.js":"c6es8","core-js/modules/es.number.to-fixed.js":"fnfHR"}],"iQrGk":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toString = require('../internals/to-string');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic('includes')
}, {
    includes: function includes(searchString /* , position = 0 */ ) {
        return !!~toString(requireObjectCoercible(this)).indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"dIGt4","../internals/not-a-regexp":"1iV8t","../internals/require-object-coercible":"fOR0B","../internals/to-string":"a1yl4","../internals/correct-is-regexp-logic":"1eMAl"}],"1iV8t":[function(require,module,exports) {
var isRegExp = require('../internals/is-regexp');
module.exports = function(it) {
    if (isRegExp(it)) throw TypeError("The method doesn't accept regular expressions");
    return it;
};

},{"../internals/is-regexp":"hR496"}],"1eMAl":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
module.exports = function(METHOD_NAME) {
    var regexp = /./;
    try {
        '/./'[METHOD_NAME](regexp);
    } catch (error1) {
        try {
            regexp[MATCH] = false;
            return '/./'[METHOD_NAME](regexp);
        } catch (error2) {}
    }
    return false;
};

},{"../internals/well-known-symbol":"gTwyA"}],"fnfHR":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var toInteger = require('../internals/to-integer');
var thisNumberValue = require('../internals/this-number-value');
var repeat = require('../internals/string-repeat');
var fails = require('../internals/fails');
var nativeToFixed = 1..toFixed;
var floor = Math.floor;
var pow = function(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x) {
    var n = 0;
    var x2 = x;
    while(x2 >= 4096){
        n += 12;
        x2 /= 4096;
    }
    while(x2 >= 2){
        n += 1;
        x2 /= 2;
    }
    return n;
};
var multiply = function(data, n, c) {
    var index = -1;
    var c2 = c;
    while(++index < 6){
        c2 += n * data[index];
        data[index] = c2 % 10000000;
        c2 = floor(c2 / 10000000);
    }
};
var divide = function(data, n) {
    var index = 6;
    var c = 0;
    while(--index >= 0){
        c += data[index];
        data[index] = floor(c / n);
        c = c % n * 10000000;
    }
};
var dataToString = function(data) {
    var index = 6;
    var s = '';
    while(--index >= 0)if (s !== '' || index === 0 || data[index] !== 0) {
        var t = String(data[index]);
        s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
    return s;
};
var FORCED = nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000100..toFixed(0) !== '1000000000000000128') || !fails(function() {
    // V8 ~ Android 4.3-
    nativeToFixed.call({});
});
// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({
    target: 'Number',
    proto: true,
    forced: FORCED
}, {
    toFixed: function toFixed(fractionDigits) {
        var number = thisNumberValue(this);
        var fractDigits = toInteger(fractionDigits);
        var data = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        var sign = '';
        var result = '0';
        var e, z, j, k;
        if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
        // eslint-disable-next-line no-self-compare -- NaN check
        if (number != number) return 'NaN';
        if (number <= -1000000000000000000000 || number >= 1000000000000000000000) return String(number);
        if (number < 0) {
            sign = '-';
            number = -number;
        }
        if (number > 0.000000000000000000001) {
            e = log(number * pow(2, 69, 1)) - 69;
            z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
            z *= 4503599627370496;
            e = 52 - e;
            if (e > 0) {
                multiply(data, 0, z);
                j = fractDigits;
                while(j >= 7){
                    multiply(data, 10000000, 0);
                    j -= 7;
                }
                multiply(data, pow(10, j, 1), 0);
                j = e - 1;
                while(j >= 23){
                    divide(data, 8388608);
                    j -= 23;
                }
                divide(data, 1 << j);
                multiply(data, 1, 1);
                divide(data, 2);
                result = dataToString(data);
            } else {
                multiply(data, 0, z);
                multiply(data, 1 << -e, 0);
                result = dataToString(data) + repeat.call('0', fractDigits);
            }
        }
        if (fractDigits > 0) {
            k = result.length;
            result = sign + (k <= fractDigits ? '0.' + repeat.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
        } else result = sign + result;
        return result;
    }
});

},{"../internals/export":"dIGt4","../internals/to-integer":"iQHvX","../internals/this-number-value":"8XTgu","../internals/string-repeat":"eLGaN","../internals/fails":"hL6D2"}],"8XTgu":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function(value) {
    if (typeof value != 'number' && classof(value) != 'Number') throw TypeError('Incorrect invocation');
    return +value;
};

},{"../internals/classof-raw":"bdfmm"}],"eLGaN":[function(require,module,exports) {
'use strict';
var toInteger = require('../internals/to-integer');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');
// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
    var str = toString(requireObjectCoercible(this));
    var result = '';
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
    for(; n > 0; (n >>>= 1) && (str += str))if (n & 1) result += str;
    return result;
};

},{"../internals/to-integer":"iQHvX","../internals/to-string":"a1yl4","../internals/require-object-coercible":"fOR0B"}]},["aIdiY","bDbGG"], "bDbGG", "parcelRequireac99")

//# sourceMappingURL=graphs.fbb3188c.js.map
