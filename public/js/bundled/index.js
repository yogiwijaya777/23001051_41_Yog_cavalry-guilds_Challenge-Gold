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
})({"14ixo":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4c74fe43c064fd94";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"f2QDv":[function(require,module,exports) {
var _authJs = require("./auth.js");
var _archetypesJs = require("./archetypes.js");
var _decksJs = require("./decks.js");
var _usersJs = require("./users.js");
// Utils
function createUuidRegex(keyword) {
    const regexString = `\\/${keyword}\\/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})`;
    return new RegExp(regexString);
}
// DOM TRIGGER
// Overviews
const overviewRoute = location.pathname === "/";
// Auth
const registerForm = document.querySelector(".form--register");
const loginForm = document.querySelector(".form--login");
const logoutButton = document.querySelector(".nav__el--logout");
// Archetypes
const archetypesRoute = location.pathname === "/archetypes" || location.pathname === "/archetypes/";
const isArchetypeByIdRoute = location.pathname.match(createUuidRegex("archetypes"));
// Decks
const decksRoute = location.pathname === "/decks" || location.pathname === "/decks/";
const isDeckByIdRoute = location.pathname.match(createUuidRegex("decks"));
// Users
const usersRoute = location.pathname === "/users" || location.pathname === "/users/";
const isUserByIdRoute = location.pathname.match(createUuidRegex("users"));
if (registerForm) registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, _authJs.register)(name, email, password);
});
if (loginForm) loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, _authJs.login)(email, password);
});
if (logoutButton) logoutButton.addEventListener("click", (0, _authJs.logout));
if (overviewRoute) {
    console.log("hello");
    document.addEventListener("DOMContentLoaded", ()=>{
        console.log("hello");
        (0, _archetypesJs.renderArchetypes)();
        (0, _decksJs.renderDecks)();
    });
}
if (archetypesRoute) {
    const urlParams = new URLSearchParams(window.location.search);
    const queries = urlParams.toString();
    let archetypes;
    if (queries) archetypes = (0, _archetypesJs.renderArchetypes)(queries);
    else archetypes = (0, _archetypesJs.renderArchetypes)();
    document.addEventListener("load", archetypes);
}
if (isArchetypeByIdRoute) {
    const archetypeId = isArchetypeByIdRoute[1];
    document.addEventListener("load", (0, _archetypesJs.renderArchetype)(archetypeId));
}
if (decksRoute) {
    const urlParams = new URLSearchParams(window.location.search);
    const queries = urlParams.toString();
    let decks;
    if (queries) decks = (0, _decksJs.renderDecks)(queries);
    else decks = (0, _decksJs.renderDecks)();
    document.addEventListener("load", decks);
}
if (isDeckByIdRoute) {
    const deckId = isDeckByIdRoute[1];
    document.addEventListener("load", (0, _decksJs.renderDeck)(deckId));
}
if (usersRoute) {
    const urlParams = new URLSearchParams(window.location.search);
    const queries = urlParams.toString();
    let users;
    if (queries) users = (0, _usersJs.renderUsers)(queries);
    else users = (0, _usersJs.renderUsers)();
    document.addEventListener("load", users);
}
if (isUserByIdRoute) {
    const userId = isUserByIdRoute[1];
    document.addEventListener("load", (0, _usersJs.renderUser)(userId));
}

},{"./auth.js":"fov0Z","./archetypes.js":"jiVwJ","./decks.js":"7dKr1","./users.js":"9h3E9"}],"fov0Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "register", ()=>register);
parcelHelpers.export(exports, "login", ()=>login);
parcelHelpers.export(exports, "logout", ()=>logout);
var _alert = require("./alert");
const register = async (name, email, password)=>{
    const res = await fetch("/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    const data = await res.json();
    if (data.message !== "Register Success") return (0, _alert.showAlert)("danger", data.message);
    localStorage.setItem("user", JSON.stringify(data.data.userCreated));
    (0, _alert.showAlert)("success", "Register Success");
    window.setTimeout(()=>{
        location.assign("/");
    }, 1500);
};
const login = async (email, password)=>{
    const res = await fetch("/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await res.json();
    if (data.message !== "Login Success") return (0, _alert.showAlert)("dangers", data.message);
    localStorage.setItem("user", JSON.stringify(data.data.user));
    (0, _alert.showAlert)("success", "Login Success");
    window.setTimeout(()=>{
        location.assign("/");
    }, 1500);
};
const logout = async ()=>{
    const res = await fetch("/v1/auth/logout");
    if (!res.ok) return (0, _alert.showAlert)("danger", "Please try again");
    localStorage.removeItem("user");
    (0, _alert.showAlert)("success", "Logout Success");
    location.reload(true);
};

},{"./alert":"kxdiQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxdiQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideAlert", ()=>hideAlert);
parcelHelpers.export(exports, "showAlert", ()=>showAlert);
const hideAlert = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
};
const showAlert = (type, msg)=>{
    hideAlert();
    const markup = `<div class="alert alert-${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout(hideAlert, 5000);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jiVwJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderArchetypes", ()=>renderArchetypes);
parcelHelpers.export(exports, "renderArchetype", ()=>renderArchetype);
var _alertJs = require("./alert.js");
const getArchetype = async (id)=>{
    const res = await fetch(`/v1/archetypes/${id}`, {
        credentials: "include"
    });
    const data = await res.json();
    if (!res.ok) {
        (0, _alertJs.showAlert)("error", data.message);
        if (data.message === "Please authenticate") setTimeout(()=>{
            location.assign("/auth/login");
        }, 1500);
    }
    return data.data;
};
const getArchetypes = async (queries)=>{
    let res;
    let data;
    if (queries) {
        res = await fetch(`/v1/archetypes/?${queries}`, {
            credentials: "include"
        });
        data = await res.json();
    } else {
        res = await fetch("/v1/archetypes/", {
            credentials: "include"
        });
        data = await res.json();
    }
    if (!res.ok) {
        (0, _alertJs.showAlert)("error", data.message);
        if (data.message === "Please authenticate") setTimeout(()=>{
            location.assign("/auth/login");
        }, 1500);
        return;
    }
    return data.data;
};
const renderArchetypes = async (queries)=>{
    const cardContainer = document.querySelector(".archetypes-container");
    cardContainer.classList.add("row");
    let archetypes;
    if (queries) {
        archetypes = await getArchetypes(queries);
        if (archetypes.length < 1) {
            const card = document.createElement("div");
            card.classList.add("not-found");
            const notFound = document.createElement("h1");
            notFound.textContent = "No Archetypes Found";
            card.appendChild(notFound);
            cardContainer.appendChild(card);
            return;
        }
    } else archetypes = await getArchetypes();
    archetypes.forEach((archetype)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-3", "gy-4");
        const cardCover = document.createElement("div");
        cardCover.classList.add("card-cover", "d-flex", "align-items-center", "justify-content-center", "mt-2");
        const coverImg = document.createElement("img");
        coverImg.classList.add("card__cover-img", "img-fluid", "rounded-circle");
        const nameHeader = document.createElement("h3");
        nameHeader.classList.add("archetype-name", "card-title", "text-center");
        nameHeader.textContent = archetype.name;
        if (archetype.name.includes(" ")) archetype.name = archetype.name.split(" ").join("");
        coverImg.src = `/img/archetypes/${archetype.name.toLowerCase()}.jpg`;
        coverImg.alt = `${archetype.name} cover`;
        const totalDecks = document.createElement("p");
        totalDecks.classList.add("total-decks", "text-center", "mb-0");
        totalDecks.textContent = "Total Decks: " + archetype.totalDecks;
        cardCover.appendChild(coverImg);
        card.appendChild(cardCover);
        card.appendChild(nameHeader);
        card.appendChild(totalDecks);
        cardContainer.appendChild(card);
        card.addEventListener("click", (e)=>{
            location.assign(`/archetypes/${archetype.id}`);
        });
    });
};
const renderArchetype = async (id)=>{
    const archetype = await getArchetype(id);
    const archetypeCardContainer = document.querySelector(".archetype-container");
    const card = document.createElement("div");
    card.classList.add("card");
    const cardCover = document.createElement("div");
    cardCover.classList.add("card-cover");
    const coverImg = document.createElement("img");
    coverImg.classList.add("card__cover-img");
    const nameHeader = document.createElement("h1");
    nameHeader.classList.add("archetype-name");
    nameHeader.textContent = archetype.name;
    if (archetype.name.includes(" ")) archetype.name = archetype.name.split(" ").join("");
    coverImg.src = `/img/archetypes/${archetype.name.toLowerCase()}.jpg`;
    coverImg.alt = `${archetype.name} cover`;
    const totalDecks = document.createElement("p");
    totalDecks.classList.add("total-decks");
    totalDecks.textContent = "Total Decks: " + archetype.totalDecks;
    cardCover.appendChild(coverImg);
    card.appendChild(cardCover);
    card.appendChild(nameHeader);
    card.appendChild(totalDecks);
    archetypeCardContainer.appendChild(card);
    const decksCardContainer = document.querySelector(".decks-container");
    archetype.decks.forEach((deck)=>{
        const deckCard = document.createElement("div");
        deckCard.classList.add("card");
        deckCard.classList.add("decks-card");
        const deckCover = document.createElement("div");
        deckCover.classList.add("card-cover");
        const nameHeader = document.createElement("h3");
        nameHeader.classList.add("deck-name");
        nameHeader.textContent = deck.name;
        const userInfo = document.createElement("p");
        userInfo.classList.add("user-info");
        const username = document.createElement("span");
        username.classList.add("username");
        username.textContent = deck.username;
        deckCard.appendChild(deckCover);
        deckCard.appendChild(nameHeader);
        userInfo.appendChild(username);
        deckCard.appendChild(userInfo);
        decksCardContainer.appendChild(deckCard);
        nameHeader.addEventListener("click", ()=>{
            location.assign(`/decks/${deck.id}`);
        });
        username.addEventListener("click", ()=>{
            location.assign(`/users/${deck.userId}`);
        });
    });
};

},{"./alert.js":"kxdiQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7dKr1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderDecks", ()=>renderDecks);
parcelHelpers.export(exports, "renderDeck", ()=>renderDeck);
var _alert = require("./alert");
var _modals = require("./modals");
const getDecks = async (queries)=>{
    let res;
    let data;
    if (queries) {
        res = await fetch(`/v1/decks/?${queries}`, {
            credentials: "include"
        });
        data = await res.json();
    } else {
        res = await fetch("/v1/decks/", {
            credentials: "include"
        });
        data = await res.json();
    }
    if (!res.ok) {
        (0, _alert.showAlert)("danger", data.message);
        if (data.message === "Please authenticate") setTimeout(()=>{
            location.assign("/auth/login");
        }, 1500);
        return;
    }
    return data.data;
};
const getDeck = async (id)=>{
    const res = await fetch(`/v1/decks/${id}`, {
        credentials: "include"
    });
    const data = await res.json();
    if (!res.ok) {
        (0, _alert.showAlert)("danger", data.message);
        if (data.message === "Please authenticate") setTimeout(()=>{
            location.assign("/auth/login");
        }, 1500);
    }
    return data.data;
};
const deleteDeck = async (id)=>{
    const res = await fetch(`/v1/decks/${id}`, {
        method: "DELETE",
        credentials: "include"
    });
    const data = await res.json();
    if (!res.ok) {
        (0, _alert.showAlert)("danger", data.message);
        if (data.message === "Please authenticate") setTimeout(()=>{
            location.assign("/auth/login");
        }, 1500);
    }
    return;
};
const updateDeck = async (id, data)=>{
    const res = await fetch(`/v1/decks/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const dataRes = await res.json();
    if (!res.ok) {
        (0, _alert.showAlert)("danger", dataRes.message);
        if (dataRes.message === "Please authenticate") setTimeout(()=>{
            location.assign("/auth/login");
        }, 1500);
    }
    return;
};
const renderDecks = async (queries)=>{
    const decksCardContainer = document.querySelector(".decks-container");
    decksCardContainer.classList.add("row");
    let decks;
    if (queries) {
        decks = await getDecks(queries);
        if (decks.length < 1) {
            const card = document.createElement("div");
            card.classList.add("not-found");
            const notFound = document.createElement("h1");
            notFound.textContent = "No Decks Found";
            card.appendChild(notFound);
            decksCardContainer.appendChild(card);
            return;
        }
    } else decks = await getDecks();
    decks.forEach((deck)=>{
        const card = document.createElement("div");
        card.classList.add("card", "col-3", "gy-4", "text-center");
        const cardCover = document.createElement("div");
        cardCover.classList.add("card-cover");
        const coverImg = document.createElement("img");
        coverImg.classList.add("card__cover-img");
        const nameHeader = document.createElement("h1");
        nameHeader.classList.add("deck-name");
        nameHeader.textContent = deck.name;
        const archetype = document.createElement("h2");
        archetype.classList.add("archetype");
        archetype.textContent = `Archetype : ${deck.archetypeName}`;
        const userInfo = document.createElement("p");
        userInfo.classList.add("user-info");
        const username = document.createElement("span");
        username.classList.add("username");
        username.textContent = `User : ${deck.userName}, Created at ${new Date(deck.createdAt).toString()}`;
        if (deck.archetypeName.includes(" ")) deck.archetypeName = deck.archetypeName.split(" ").join("");
        coverImg.src = `/img/archetypes/${deck.archetypeName.toLowerCase()}.jpg`;
        coverImg.alt = `${deck.name} cover`;
        userInfo.appendChild(username);
        cardCover.appendChild(coverImg);
        card.appendChild(cardCover);
        card.appendChild(nameHeader);
        card.appendChild(archetype);
        card.appendChild(userInfo);
        decksCardContainer.appendChild(card);
        nameHeader.addEventListener("click", ()=>{
            location.assign(`/decks/${deck.id}`);
        });
        coverImg.addEventListener("click", ()=>{
            location.assign(`/decks/${deck.id}`);
        });
        archetype.addEventListener("clicl", ()=>{
            location.assign(`/archetypes/${deck.archetypeId}`);
        });
        username.addEventListener("click", ()=>{
            location.assign(`/users/${deck.userId}`);
        });
    });
};
const renderDeck = async (id)=>{
    const deck = await getDeck(id);
    const deckCardContainer = document.querySelector(".deck-container");
    const card = document.createElement("div");
    card.classList.add("card");
    const cardCover = document.createElement("div");
    cardCover.classList.add("card-cover");
    const coverImg = document.createElement("img");
    coverImg.classList.add("card__cover-img");
    if (deck.archetypeName.includes(" ")) deck.archetypeName = deck.archetypeName.split(" ").join("");
    coverImg.src = `/img/archetypes/${deck.archetypeName.toLowerCase()}.jpg`;
    coverImg.alt = `${deck.name} cover`;
    const nameHeader = document.createElement("h1");
    nameHeader.classList.add("deck-name");
    nameHeader.textContent = deck.name;
    const archetype = document.createElement("h2");
    archetype.classList.add("archetype");
    archetype.textContent = `Archetype : ${deck.archetypeName}`;
    const userInfo = document.createElement("p");
    userInfo.classList.add("user-info");
    const username = document.createElement("span");
    username.classList.add("username");
    username.textContent = `User : ${deck.userName}, Created at ${new Date(deck.createdAt).toString()}`;
    const deckDescription = document.createElement("p");
    deckDescription.classList.add("deck-description", "card-text", "d-inline-block", "text-center");
    deckDescription.textContent = `Description : ${deck.description};`;
    userInfo.appendChild(username);
    cardCover.appendChild(coverImg);
    card.appendChild(deckDescription);
    card.appendChild(cardCover);
    card.appendChild(nameHeader);
    card.appendChild(archetype);
    card.appendChild(userInfo);
    const curUser = JSON.parse(localStorage.getItem("user"));
    if (curUser.id === deck.userId) {
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn", "btn", "btn-danger", "btn-sm", "float-end", "modal-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", async ()=>{
            const confirmation = await (0, _modals.showModal)("Are you sure you want to delete this deck?", "This action cannot be undone.");
            if (confirmation) {
                (0, _alert.showAlert)("success", "Deck deleted successfully");
                await deleteDeck(id);
                location.assign("/decks");
            } else (0, _alert.showAlert)("info", "Deletion canceled");
        });
        const updateBtn = document.createElement("button");
        updateBtn.classList.add("update-btn", "btn", "btn-primary", "btn-sm", "float-end", "modal-btn");
        updateBtn.textContent = "Update";
        updateBtn.addEventListener("click", async ()=>{
            const body = await (0, _modals.showUpdateDeckModal)();
            // Remove empty field
            for(const key in body)if (body[key] === "") delete body[key];
            if (body) {
                (0, _alert.showAlert)("success", "Deck updated successfully");
                await updateDeck(id, body);
                setTimeout(()=>{
                    location.reload(true);
                }, 2000);
            } else (0, _alert.showAlert)("info", "Update canceled");
        });
        card.appendChild(deleteBtn);
        card.appendChild(updateBtn);
    }
    deckCardContainer.appendChild(card);
    archetype.addEventListener("click", ()=>{
        location.assign(`/archetypes/${deck.archetypeId}`);
    });
    username.addEventListener("click", ()=>{
        location.assign(`/users/${deck.userId}`);
    });
};

},{"./alert":"kxdiQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./modals":"aja2f"}],"aja2f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideModal", ()=>hideModal);
parcelHelpers.export(exports, "showModal", ()=>showModal);
parcelHelpers.export(exports, "showUpdateDeckModal", ()=>showUpdateDeckModal);
const hideModal = ()=>{
    const el = document.querySelector(".modal");
    if (el) el.parentElement.removeChild(el);
};
const showModal = (modalTitle, modalBody)=>{
    return new Promise((resolve, reject)=>{
        hideModal();
        const markup = `
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${modalTitle}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>${modalBody}.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-result="false">
                Close
              </button>
              <button type="button" class="btn btn-primary" data-result="true">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
        document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
        const modal = new bootstrap.Modal(document.querySelector(".modal"));
        modal.show();
        const modalElement = document.querySelector(".modal");
        modalElement.addEventListener("click", (event)=>{
            const target = event.target;
            const result = target.getAttribute("data-result");
            if (result === "true") resolve(true);
            else resolve(false);
            modal.hide();
        });
    });
};
const showUpdateDeckModal = ()=>{
    return new Promise((resolve, reject)=>{
        hideModal();
        const markup = `
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Update Deck</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="updateDeckForm">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <textarea class="form-control" id="description" required></textarea>
                </div>
                <div class="mb-3">
                  <label for="archetypeId" class="form-label">Archetype ID</label>
                  <input type="text" class="form-control" id="archetypeId" required>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-result="false">
                Close
              </button>
              <button type="button" class="btn btn-primary" id="confirmUpdateDeckBtn">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
        document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
        const modal = new bootstrap.Modal(document.querySelector(".modal"));
        modal.show();
        const confirmUpdateDeckBtn = document.getElementById("confirmUpdateDeckBtn");
        confirmUpdateDeckBtn.addEventListener("click", ()=>{
            const name = document.getElementById("name").value;
            const description = document.getElementById("description").value;
            const archetypeId = document.getElementById("archetypeId").value;
            if (name !== "" || description !== "" || archetypeId !== "") {
                resolve({
                    name,
                    description,
                    archetypeId
                });
                modal.hide();
            } else alert("At least one of the fields (name, description, archetypeId) must be filled out.");
        });
        const modalElement = document.querySelector(".modal");
        modalElement.addEventListener("hidden.bs.modal", ()=>{
            modalElement.remove();
        });
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9h3E9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderUsers", ()=>renderUsers);
parcelHelpers.export(exports, "renderUser", ()=>renderUser);
var _alert = require("./alert");
const getUsers = async (queries)=>{
    let res;
    if (queries) res = await fetch(`/v1/users/?${queries}`, {
        credentials: "include"
    });
    else res = await fetch("/v1/users/", {
        credentials: "include"
    });
    const data = await res.json();
    if (!res.ok) {
        (0, _alert.showAlert)("danger", "Please try again");
        if (data.message === "Please authenticate") setTimeout(()=>{
            location.assign("/auth/login");
        }, 1500);
    }
    return data.data;
};
const getUserById = async (id)=>{
    const res = await fetch(`/v1/users/${id}`, {
        credentials: "include"
    });
    const data = await res.json();
    if (!res.ok) {
        (0, _alert.showAlert)("danger", "Please try again");
        if (data.message === "Please authenticate") setTimeout(()=>{
            location.assign("/auth/login");
        }, 1500);
    }
    return data.data;
};
const renderUsers = async (queries)=>{
    const cardContainer = document.querySelector(".users-container");
    let users;
    if (queries) {
        users = await getUsers(queries);
        if (users.length < 1) {
            const card = document.createElement("div");
            card.classList.add("not-found");
            const notFound = document.createElement("h1");
            notFound.textContent = "No Users Found";
            card.appendChild(notFound);
            cardContainer.appendChild(card);
            return;
        }
    } else users = await getUsers();
    users.forEach((user)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        const cardCover = document.createElement("div");
        cardCover.classList.add("card-cover");
        const coverImg = document.createElement("img");
        coverImg.classList.add("card__cover-img");
        const nameHeader = document.createElement("h1");
        nameHeader.classList.add("user-name");
        nameHeader.textContent = user.name;
        if (user.name.includes(" ")) user.name = user.name.split(" ").join("");
        coverImg.src = `/img/users/${user.name.toLowerCase()}.jpg`;
        coverImg.alt = `${user.name} Photo`;
        const userEmail = document.createElement("p");
        userEmail.classList.add("user-email");
        userEmail.textContent = `Email : ${user.email}`;
        const userRole = document.createElement("p");
        userRole.classList.add("user-role");
        userRole.textContent = `Role : ${user.role}`;
        const userCreated = document.createElement("p");
        userCreated.classList.add("user-created");
        userCreated.textContent = `Created At : ${new Date(user.createdAt).toString()}`;
        const userFollows = document.createElement("div");
        userFollows.classList.add("user-follows");
        userFollows.textContent = `Followers : ${user.followers}
    Following : ${user.following}`;
        card.appendChild(cardCover);
        card.appendChild(nameHeader);
        card.appendChild(userEmail);
        card.appendChild(userRole);
        card.appendChild(userCreated);
        card.appendChild(userFollows);
        cardCover.appendChild(coverImg);
        cardContainer.appendChild(card);
        nameHeader.addEventListener("click", ()=>{
            location.assign(`/users/${user.id}`);
        });
    });
};
const renderUser = async (id)=>{
    const user = await getUserById(id);
    const cardContainer = document.querySelector(".user-container");
    const card = document.createElement("div");
    card.classList.add("card");
    const cardCover = document.createElement("div");
    cardCover.classList.add("card-cover");
    const coverImg = document.createElement("img");
    coverImg.classList.add("card__cover-img");
    if (user.name.includes(" ")) user.name = user.name.split(" ").join("");
    coverImg.src = `/img/users/${user.name.toLowerCase()}.jpg`;
    coverImg.alt = `${user.name} Photo`;
    const nameHeader = document.createElement("h1");
    nameHeader.classList.add("user-name");
    nameHeader.textContent = user.name;
    const userEmail = document.createElement("p");
    userEmail.classList.add("user-email");
    userEmail.textContent = `Email : ${user.email}`;
    const userCreated = document.createElement("p");
    userCreated.classList.add("user-created");
    userCreated.textContent = `Created At : ${new Date(user.createdAt).toString()}`;
    const userFollows = document.createElement("div");
    userFollows.classList.add("user-follows");
    userFollows.textContent = `Followers : ${user.followers}
  Following : ${user.following}`;
    card.appendChild(cardCover);
    card.appendChild(nameHeader);
    card.appendChild(userEmail);
    card.appendChild(userCreated);
    card.appendChild(userFollows);
    cardCover.appendChild(coverImg);
    cardContainer.appendChild(card);
};

},{"./alert":"kxdiQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["14ixo","f2QDv"], "f2QDv", "parcelRequiref988")

//# sourceMappingURL=index.js.map
