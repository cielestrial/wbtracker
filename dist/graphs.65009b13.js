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
})({"lCgv3":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "948d2fa465009b13";
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

},{}],"cjdzq":[function(require,module,exports) {
/**
 * @popperjs/core v2.9.3 - MIT License
 */ "use strict";
!function(e, t) {
    t(exports);
}(this, function(e1) {
    function t1(e) {
        return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e;
    }
    function n1(e) {
        return e instanceof t1(e).Element || e instanceof Element;
    }
    function o1(e) {
        return e instanceof t1(e).HTMLElement || e instanceof HTMLElement;
    }
    function r1(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof t1(e).ShadowRoot || e instanceof ShadowRoot);
    }
    function i1(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(), r = 1, i = 1;
        return o1(e) && t && (r = n.width / e.offsetWidth || 1, i = n.height / e.offsetHeight || 1), {
            width: q(n.width / r),
            height: q(n.height / i),
            top: q(n.top / i),
            right: q(n.right / r),
            bottom: q(n.bottom / i),
            left: q(n.left / r),
            x: q(n.left / r),
            y: q(n.top / i)
        };
    }
    function a1(e) {
        return {
            scrollLeft: (e = t1(e)).pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function s1(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function f1(e) {
        return ((n1(e) ? e.ownerDocument : e.document) || window.document).documentElement;
    }
    function p1(e) {
        return i1(f1(e)).left + a1(e).scrollLeft;
    }
    function c1(e) {
        return t1(e).getComputedStyle(e);
    }
    function l1(e) {
        return e = c1(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX);
    }
    function u1(e, n, r) {
        void 0 === r && (r = !1);
        var c, u = o1(n);
        if (c = o1(n)) {
            var d = (c = n.getBoundingClientRect()).height / n.offsetHeight || 1;
            c = 1 !== (c.width / n.offsetWidth || 1) || 1 !== d;
        }
        d = c, c = f1(n), e = i1(e, d), d = {
            scrollLeft: 0,
            scrollTop: 0
        };
        var h = {
            x: 0,
            y: 0
        };
        return (u || !u && !r) && (("body" !== s1(n) || l1(c)) && (d = n !== t1(n) && o1(n) ? {
            scrollLeft: n.scrollLeft,
            scrollTop: n.scrollTop
        } : a1(n)), o1(n) ? ((h = i1(n, !0)).x += n.clientLeft, h.y += n.clientTop) : c && (h.x = p1(c))), {
            x: e.left + d.scrollLeft - h.x,
            y: e.top + d.scrollTop - h.y,
            width: e.width,
            height: e.height
        };
    }
    function d1(e) {
        var t = i1(e), n = e.offsetWidth, o = e.offsetHeight;
        return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - o) && (o = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: o
        };
    }
    function h1(e) {
        return "html" === s1(e) ? e : e.assignedSlot || e.parentNode || (r1(e) ? e.host : null) || f1(e);
    }
    function m1(e) {
        return 0 <= [
            "html",
            "body",
            "#document"
        ].indexOf(s1(e)) ? e.ownerDocument.body : o1(e) && l1(e) ? e : m1(h1(e));
    }
    function v1(e, n) {
        var o;
        void 0 === n && (n = []);
        var r = m1(e);
        return e = r === (null == (o = e.ownerDocument) ? void 0 : o.body), o = t1(r), r = e ? [
            o
        ].concat(o.visualViewport || [], l1(r) ? r : []) : r, n = n.concat(r), e ? n : n.concat(v1(h1(r)));
    }
    function g1(e) {
        return o1(e) && "fixed" !== c1(e).position ? e.offsetParent : null;
    }
    function y1(e) {
        for(var n = t1(e), r = g1(e); r && 0 <= [
            "table",
            "td",
            "th"
        ].indexOf(s1(r)) && "static" === c1(r).position;)r = g1(r);
        if (r && ("html" === s1(r) || "body" === s1(r) && "static" === c1(r).position)) return n;
        if (!r) e: {
            if (r = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !o1(e) || "fixed" !== c1(e).position) for(e = h1(e); o1(e) && 0 > [
                "html",
                "body"
            ].indexOf(s1(e));){
                var i = c1(e);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(i.willChange) || r && "filter" === i.willChange || r && i.filter && "none" !== i.filter) {
                    r = e;
                    break e;
                }
                e = e.parentNode;
            }
            r = null;
        }
        return r || n;
    }
    function b1(e2) {
        function t(e3) {
            o.add(e3.name), [].concat(e3.requires || [], e3.requiresIfExists || []).forEach(function(e) {
                o.has(e) || (e = n.get(e)) && t(e);
            }), r.push(e3);
        }
        var n = new Map, o = new Set, r = [];
        return e2.forEach(function(e) {
            n.set(e.name, e);
        }), e2.forEach(function(e) {
            o.has(e.name) || t(e);
        }), r;
    }
    function w1(e) {
        var t;
        return function() {
            return t || (t = new Promise(function(n) {
                Promise.resolve().then(function() {
                    t = void 0, n(e());
                });
            })), t;
        };
    }
    function x1(e) {
        return e.split("-")[0];
    }
    function O1(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && r1(n)) do {
            if (t && e.isSameNode(t)) return !0;
            t = t.parentNode || t.host;
        }while (t)
        return !1;
    }
    function j1(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        });
    }
    function E1(e, n) {
        if ("viewport" === n) {
            n = t1(e);
            var r = f1(e);
            n = n.visualViewport;
            var s = r.clientWidth;
            r = r.clientHeight;
            var l = 0, u = 0;
            n && (s = n.width, r = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = n.offsetLeft, u = n.offsetTop)), e = j1(e = {
                width: s,
                height: r,
                x: l + p1(e),
                y: u
            });
        } else o1(n) ? ((e = i1(n)).top += n.clientTop, e.left += n.clientLeft, e.bottom = e.top + n.clientHeight, e.right = e.left + n.clientWidth, e.width = n.clientWidth, e.height = n.clientHeight, e.x = e.left, e.y = e.top) : (u = f1(e), e = f1(u), s = a1(u), n = null == (r = u.ownerDocument) ? void 0 : r.body, r = U(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), l = U(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), u = -s.scrollLeft + p1(u), s = -s.scrollTop, "rtl" === c1(n || e).direction && (u += U(e.clientWidth, n ? n.clientWidth : 0) - r), e = j1({
            width: r,
            height: l,
            x: u,
            y: s
        }));
        return e;
    }
    function D1(e4, t2, r2) {
        return t2 = "clippingParents" === t2 ? function(e5) {
            var t = v1(h1(e5)), r = 0 <= [
                "absolute",
                "fixed"
            ].indexOf(c1(e5).position) && o1(e5) ? y1(e5) : e5;
            return n1(r) ? t.filter(function(e) {
                return n1(e) && O1(e, r) && "body" !== s1(e);
            }) : [];
        }(e4) : [].concat(t2), (r2 = (r2 = [].concat(t2, [
            r2
        ])).reduce(function(t, n) {
            return n = E1(e4, n), t.top = U(n.top, t.top), t.right = z(n.right, t.right), t.bottom = z(n.bottom, t.bottom), t.left = U(n.left, t.left), t;
        }, E1(e4, r2[0]))).width = r2.right - r2.left, r2.height = r2.bottom - r2.top, r2.x = r2.left, r2.y = r2.top, r2;
    }
    function L(e) {
        return 0 <= [
            "top",
            "bottom"
        ].indexOf(e) ? "x" : "y";
    }
    function M1(e) {
        var t = e.reference, n = e.element, o = (e = e.placement) ? x1(e) : null;
        e = e ? e.split("-")[1] : null;
        var r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2;
        switch(o){
            case "top":
                r = {
                    x: r,
                    y: t.y - n.height
                };
                break;
            case "bottom":
                r = {
                    x: r,
                    y: t.y + t.height
                };
                break;
            case "right":
                r = {
                    x: t.x + t.width,
                    y: i
                };
                break;
            case "left":
                r = {
                    x: t.x - n.width,
                    y: i
                };
                break;
            default:
                r = {
                    x: t.x,
                    y: t.y
                };
        }
        if (null != (o = o ? L(o) : null)) switch(i = "y" === o ? "height" : "width", e){
            case "start":
                r[o] -= t[i] / 2 - n[i] / 2;
                break;
            case "end":
                r[o] += t[i] / 2 - n[i] / 2;
        }
        return r;
    }
    function P(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e);
    }
    function k(e, t3) {
        return t3.reduce(function(t, n) {
            return t[n] = e, t;
        }, {});
    }
    function W(e6, t4) {
        void 0 === t4 && (t4 = {});
        var o = t4;
        t4 = void 0 === (t4 = o.placement) ? e6.placement : t4;
        var r = o.boundary, a = void 0 === r ? "clippingParents" : r, s = void 0 === (r = o.rootBoundary) ? "viewport" : r;
        r = void 0 === (r = o.elementContext) ? "popper" : r;
        var p = o.altBoundary, c = void 0 !== p && p;
        o = P("number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, N));
        var l = e6.elements.reference;
        p = e6.rects.popper, a = D1(n1(c = e6.elements[c ? "popper" === r ? "reference" : "popper" : r]) ? c : c.contextElement || f1(e6.elements.popper), a, s), c = M1({
            reference: s = i1(l),
            element: p,
            strategy: "absolute",
            placement: t4
        }), p = j1(Object.assign({}, p, c)), s = "popper" === r ? p : s;
        var u = {
            top: a.top - s.top + o.top,
            bottom: s.bottom - a.bottom + o.bottom,
            left: a.left - s.left + o.left,
            right: s.right - a.right + o.right
        };
        if (e6 = e6.modifiersData.offset, "popper" === r && e6) {
            var d = e6[t4];
            Object.keys(u).forEach(function(e) {
                var t = 0 <= [
                    "right",
                    "bottom"
                ].indexOf(e) ? 1 : -1, n = 0 <= [
                    "top",
                    "bottom"
                ].indexOf(e) ? "y" : "x";
                u[e] += d[n] * t;
            });
        }
        return u;
    }
    function A() {
        for(var e7 = arguments.length, t = Array(e7), n = 0; n < e7; n++)t[n] = arguments[n];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
        });
    }
    function B(e8) {
        void 0 === e8 && (e8 = {});
        var t5 = e8.defaultModifiers, o2 = void 0 === t5 ? [] : t5, r = void 0 === (e8 = e8.defaultOptions) ? X : e8;
        return function(e9, t6, i2) {
            function a() {
                f.forEach(function(e) {
                    return e();
                }), f = [];
            }
            void 0 === i2 && (i2 = r);
            var s = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, X, r),
                modifiersData: {},
                elements: {
                    reference: e9,
                    popper: t6
                },
                attributes: {},
                styles: {}
            }, f = [], p = !1, c = {
                state: s,
                setOptions: function(i) {
                    return a(), s.options = Object.assign({}, r, s.options, i), s.scrollParents = {
                        reference: n1(e9) ? v1(e9) : e9.contextElement ? v1(e9.contextElement) : [],
                        popper: v1(t6)
                    }, i = function(e10) {
                        var t = b1(e10);
                        return _.reduce(function(e11, n) {
                            return e11.concat(t.filter(function(e) {
                                return e.phase === n;
                            }));
                        }, []);
                    }(function(e12) {
                        var t7 = e12.reduce(function(e, t) {
                            var n = e[t.name];
                            return e[t.name] = n ? Object.assign({}, n, t, {
                                options: Object.assign({}, n.options, t.options),
                                data: Object.assign({}, n.data, t.data)
                            }) : t, e;
                        }, {});
                        return Object.keys(t7).map(function(e) {
                            return t7[e];
                        });
                    }([].concat(o2, s.options.modifiers))), s.orderedModifiers = i.filter(function(e) {
                        return e.enabled;
                    }), s.orderedModifiers.forEach(function(e) {
                        var t = e.name, n = e.options;
                        n = void 0 === n ? {} : n, "function" == typeof (e = e.effect) && (t = e({
                            state: s,
                            name: t,
                            instance: c,
                            options: n
                        }), f.push(t || function() {}));
                    }), c.update();
                },
                forceUpdate: function() {
                    if (!p) {
                        var e13 = s.elements, t = e13.reference;
                        if (A(t, e13 = e13.popper)) for(s.rects = {
                            reference: u1(t, y1(e13), "fixed" === s.options.strategy),
                            popper: d1(e13)
                        }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(e) {
                            return s.modifiersData[e.name] = Object.assign({}, e.data);
                        }), t = 0; t < s.orderedModifiers.length; t++)if (!0 === s.reset) s.reset = !1, t = -1;
                        else {
                            var n = s.orderedModifiers[t];
                            e13 = n.fn;
                            var o = n.options;
                            o = void 0 === o ? {} : o, n = n.name, "function" == typeof e13 && (s = e13({
                                state: s,
                                options: o,
                                name: n,
                                instance: c
                            }) || s);
                        }
                    }
                },
                update: w1(function() {
                    return new Promise(function(e) {
                        c.forceUpdate(), e(s);
                    });
                }),
                destroy: function() {
                    a(), p = !0;
                }
            };
            return A(e9, t6) ? (c.setOptions(i2).then(function(e) {
                !p && i2.onFirstUpdate && i2.onFirstUpdate(e);
            }), c) : c;
        };
    }
    function H(e) {
        var n, o = e.popper, r = e.popperRect, i = e.placement, a = e.offsets, s = e.position, p = e.gpuAcceleration, l = e.adaptive;
        if (!0 === (e = e.roundOffsets)) {
            e = a.y;
            var u = window.devicePixelRatio || 1;
            e = {
                x: F(F(a.x * u) / u) || 0,
                y: F(F(e * u) / u) || 0
            };
        } else e = "function" == typeof e ? e(a) : a;
        e = void 0 === (e = (u = e).x) ? 0 : e, u = void 0 === (u = u.y) ? 0 : u;
        var d = a.hasOwnProperty("x");
        a = a.hasOwnProperty("y");
        var h, m = "left", v = "top", g = window;
        if (l) {
            var b = y1(o), w = "clientHeight", x = "clientWidth";
            b === t1(o) && "static" !== c1(b = f1(o)).position && (w = "scrollHeight", x = "scrollWidth"), "top" === i && (v = "bottom", u -= b[w] - r.height, u *= p ? 1 : -1), "left" === i && (m = "right", e -= b[x] - r.width, e *= p ? 1 : -1);
        }
        return o = Object.assign({
            position: s
        }, l && K), p ? Object.assign({}, o, ((h = {})[v] = a ? "0" : "", h[m] = d ? "0" : "", h.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + u + "px)" : "translate3d(" + e + "px, " + u + "px, 0)", h)) : Object.assign({}, o, ((n = {})[v] = a ? u + "px" : "", n[m] = d ? e + "px" : "", n.transform = "", n));
    }
    function T(e15) {
        return e15.replace(/left|right|bottom|top/g, function(e) {
            return ee[e];
        });
    }
    function R(e16) {
        return e16.replace(/start|end/g, function(e) {
            return te[e];
        });
    }
    function S(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        };
    }
    function C(e) {
        return [
            "top",
            "right",
            "bottom",
            "left"
        ].some(function(t) {
            return 0 <= e[t];
        });
    }
    var q = Math.round, N = [
        "top",
        "bottom",
        "right",
        "left"
    ], V = N.reduce(function(e, t) {
        return e.concat([
            t + "-start",
            t + "-end"
        ]);
    }, []), I = [].concat(N, [
        "auto"
    ]).reduce(function(e, t) {
        return e.concat([
            t,
            t + "-start",
            t + "-end"
        ]);
    }, []), _ = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "), U = Math.max, z = Math.min, F = Math.round, X = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    }, Y = {
        passive: !0
    }, G = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e17) {
            var n = e17.state, o = e17.instance, r = (e17 = e17.options).scroll, i = void 0 === r || r, a = void 0 === (e17 = e17.resize) || e17, s = t1(n.elements.popper), f = [].concat(n.scrollParents.reference, n.scrollParents.popper);
            return i && f.forEach(function(e) {
                e.addEventListener("scroll", o.update, Y);
            }), a && s.addEventListener("resize", o.update, Y), function() {
                i && f.forEach(function(e) {
                    e.removeEventListener("scroll", o.update, Y);
                }), a && s.removeEventListener("resize", o.update, Y);
            };
        },
        data: {}
    }, J = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state;
            t.modifiersData[e.name] = M1({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            });
        },
        data: {}
    }, K = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    }, Q = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state, n = e.options;
            e = void 0 === (e = n.gpuAcceleration) || e;
            var o = n.adaptive;
            o = void 0 === o || o, n = void 0 === (n = n.roundOffsets) || n, e = {
                placement: x1(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: e
            }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, H(Object.assign({}, e, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: o,
                roundOffsets: n
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, H(Object.assign({}, e, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: n
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            });
        },
        data: {}
    }, Z = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e18) {
            var t8 = e18.state;
            Object.keys(t8.elements).forEach(function(e19) {
                var n = t8.styles[e19] || {}, r = t8.attributes[e19] || {}, i = t8.elements[e19];
                o1(i) && s1(i) && (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
                    var t = r[e];
                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t);
                }));
            });
        },
        effect: function(e20) {
            var t9 = e20.state, n = {
                popper: {
                    position: t9.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(t9.elements.popper.style, n.popper), t9.styles = n, t9.elements.arrow && Object.assign(t9.elements.arrow.style, n.arrow), function() {
                Object.keys(t9.elements).forEach(function(e21) {
                    var r = t9.elements[e21], i = t9.attributes[e21] || {};
                    e21 = Object.keys(t9.styles.hasOwnProperty(e21) ? t9.styles[e21] : n[e21]).reduce(function(e, t) {
                        return e[t] = "", e;
                    }, {}), o1(r) && s1(r) && (Object.assign(r.style, e21), Object.keys(i).forEach(function(e) {
                        r.removeAttribute(e);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    }, $ = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(e22) {
            var t = e22.state, n2 = e22.name, o = void 0 === (e22 = e22.options.offset) ? [
                0,
                0
            ] : e22, r3 = (e22 = I.reduce(function(e, n) {
                var r = t.rects, i = x1(n), a = 0 <= [
                    "left",
                    "top"
                ].indexOf(i) ? -1 : 1, s = "function" == typeof o ? o(Object.assign({}, r, {
                    placement: n
                })) : o;
                return r = (r = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= [
                    "left",
                    "right"
                ].indexOf(i) ? {
                    x: s,
                    y: r
                } : {
                    x: r,
                    y: s
                }, e[n] = i, e;
            }, {}))[t.placement], i3 = r3.x;
            r3 = r3.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i3, t.modifiersData.popperOffsets.y += r3), t.modifiersData[n2] = e22;
        }
    }, ee = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    }, te = {
        start: "end",
        end: "start"
    }, ne = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e23) {
            var t10 = e23.state, n3 = e23.options;
            if (e23 = e23.name, !t10.modifiersData[e23]._skip) {
                var o3 = n3.mainAxis;
                o3 = void 0 === o3 || o3;
                var r4 = n3.altAxis;
                r4 = void 0 === r4 || r4;
                var i4 = n3.fallbackPlacements, a2 = n3.padding, s2 = n3.boundary, f2 = n3.rootBoundary, p2 = n3.altBoundary, c = n3.flipVariations, l = void 0 === c || c, u = n3.allowedAutoPlacements;
                c = x1(n3 = t10.options.placement), i4 = i4 || (c !== n3 && l ? function(e) {
                    if ("auto" === x1(e)) return [];
                    var t = T(e);
                    return [
                        R(e),
                        t,
                        R(t)
                    ];
                }(n3) : [
                    T(n3)
                ]);
                var d = [
                    n3
                ].concat(i4).reduce(function(e24, n4) {
                    return e24.concat("auto" === x1(n4) ? function(e25, t11) {
                        void 0 === t11 && (t11 = {});
                        var n = t11.boundary, o = t11.rootBoundary, r = t11.padding, i6 = t11.flipVariations, a = t11.allowedAutoPlacements, s = void 0 === a ? I : a, f = t11.placement.split("-")[1];
                        0 === (i6 = (t11 = f ? i6 ? V : V.filter(function(e) {
                            return e.split("-")[1] === f;
                        }) : N).filter(function(e) {
                            return 0 <= s.indexOf(e);
                        })).length && (i6 = t11);
                        var p = i6.reduce(function(t, i) {
                            return t[i] = W(e25, {
                                placement: i,
                                boundary: n,
                                rootBoundary: o,
                                padding: r
                            })[x1(i)], t;
                        }, {});
                        return Object.keys(p).sort(function(e, t) {
                            return p[e] - p[t];
                        });
                    }(t10, {
                        placement: n4,
                        boundary: s2,
                        rootBoundary: f2,
                        padding: a2,
                        flipVariations: l,
                        allowedAutoPlacements: u
                    }) : n4);
                }, []);
                n3 = t10.rects.reference, i4 = t10.rects.popper;
                var h = new Map;
                c = !0;
                for(var m = d[0], v = 0; v < d.length; v++){
                    var g = d[v], y = x1(g), b = "start" === g.split("-")[1], w = 0 <= [
                        "top",
                        "bottom"
                    ].indexOf(y), O = w ? "width" : "height", j = W(t10, {
                        placement: g,
                        boundary: s2,
                        rootBoundary: f2,
                        altBoundary: p2,
                        padding: a2
                    });
                    if (b = w ? b ? "right" : "left" : b ? "bottom" : "top", n3[O] > i4[O] && (b = T(b)), O = T(b), w = [], o3 && w.push(0 >= j[y]), r4 && w.push(0 >= j[b], 0 >= j[O]), w.every(function(e) {
                        return e;
                    })) {
                        m = g, c = !1;
                        break;
                    }
                    h.set(g, w);
                }
                if (c) for(o3 = function(e26) {
                    var t12 = d.find(function(t) {
                        if (t = h.get(t)) return t.slice(0, e26).every(function(e) {
                            return e;
                        });
                    });
                    if (t12) return m = t12, "break";
                }, r4 = l ? 3 : 1; 0 < r4 && "break" !== o3(r4); r4--);
                t10.placement !== m && (t10.modifiersData[e23]._skip = !0, t10.placement = m, t10.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    }, oe = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state, n = e.options;
            e = e.name;
            var o = n.mainAxis, r = void 0 === o || o, i = void 0 !== (o = n.altAxis) && o;
            o = void 0 === (o = n.tether) || o;
            var a = n.tetherOffset, s = void 0 === a ? 0 : a, f = W(t, {
                boundary: n.boundary,
                rootBoundary: n.rootBoundary,
                padding: n.padding,
                altBoundary: n.altBoundary
            });
            n = x1(t.placement);
            var p = t.placement.split("-")[1], c = !p, l = L(n);
            n = "x" === l ? "y" : "x", a = t.modifiersData.popperOffsets;
            var u = t.rects.reference, h = t.rects.popper, m = "function" == typeof s ? s(Object.assign({}, t.rects, {
                placement: t.placement
            })) : s;
            if (s = {
                x: 0,
                y: 0
            }, a) {
                if (r || i) {
                    var v = "y" === l ? "top" : "left", g = "y" === l ? "bottom" : "right", b = "y" === l ? "height" : "width", w = a[l], O = a[l] + f[v], j = a[l] - f[g], E = o ? -h[b] / 2 : 0, D = "start" === p ? u[b] : h[b];
                    p = "start" === p ? -h[b] : -u[b], h = t.elements.arrow, h = o && h ? d1(h) : {
                        width: 0,
                        height: 0
                    };
                    var M = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                    v = M[v], g = M[g], h = U(0, z(u[b], h[b])), D = c ? u[b] / 2 - E - h - v - m : D - h - v - m, u = c ? -u[b] / 2 + E + h + g + m : p + h + g + m, c = t.elements.arrow && y1(t.elements.arrow), m = t.modifiersData.offset ? t.modifiersData.offset[t.placement][l] : 0, c = a[l] + D - m - (c ? "y" === l ? c.clientTop || 0 : c.clientLeft || 0 : 0), u = a[l] + u - m, r && (r = o ? z(O, c) : O, j = o ? U(j, u) : j, r = U(r, z(w, j)), a[l] = r, s[l] = r - w), i && (r = (i = a[n]) + f["x" === l ? "top" : "left"], f = i - f["x" === l ? "bottom" : "right"], r = o ? z(r, c) : r, o = o ? U(f, u) : f, o = U(r, z(i, o)), a[n] = o, s[n] = o - i);
                }
                t.modifiersData[e] = s;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    }, re = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = x1(n.placement);
            if (e = L(s), s = 0 <= [
                "left",
                "right"
            ].indexOf(s) ? "height" : "width", i && a) {
                r = P("number" != typeof (r = "function" == typeof (r = r.padding) ? r(Object.assign({}, n.rects, {
                    placement: n.placement
                })) : r) ? r : k(r, N));
                var f = d1(i), p = "y" === e ? "top" : "left", c = "y" === e ? "bottom" : "right", l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s];
                a = a[e] - n.rects.reference[e], a = (i = (i = y1(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2), s = U(r[p], z(a, i - f[s] - r[c])), n.modifiersData[o] = ((t = {})[e] = s, t.centerOffset = s - a, t);
            }
        },
        effect: function(e) {
            var t = e.state;
            if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) {
                if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return;
                O1(t.elements.popper, e) && (t.elements.arrow = e);
            }
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    }, ie = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(e) {
            var t = e.state;
            e = e.name;
            var n = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = W(t, {
                elementContext: "reference"
            }), a = W(t, {
                altBoundary: !0
            });
            n = S(i, n), o = S(a, o, r), r = C(n), a = C(o), t.modifiersData[e] = {
                referenceClippingOffsets: n,
                popperEscapeOffsets: o,
                isReferenceHidden: r,
                hasPopperEscaped: a
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": r,
                "data-popper-escaped": a
            });
        }
    }, ae = B({
        defaultModifiers: [
            G,
            J,
            Q,
            Z
        ]
    }), se = [
        G,
        J,
        Q,
        Z,
        $,
        ne,
        oe,
        re,
        ie
    ], fe = B({
        defaultModifiers: se
    });
    e1.applyStyles = Z, e1.arrow = re, e1.computeStyles = Q, e1.createPopper = fe, e1.createPopperLite = ae, e1.defaultModifiers = se, e1.detectOverflow = W, e1.eventListeners = G, e1.flip = ne, e1.hide = ie, e1.offset = $, e1.popperGenerator = B, e1.popperOffsets = J, e1.preventOverflow = oe, Object.defineProperty(e1, "__esModule", {
        value: !0
    });
});

},{}]},["lCgv3","cjdzq"], "cjdzq", "parcelRequireac99")

//# sourceMappingURL=graphs.65009b13.js.map
