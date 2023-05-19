// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"sub/js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cat = ['공용', '남성', '여성'];
var menClothList = [{
  id: 'men01',
  src: './img/men01.jpg',
  category: cat[0],
  name: '핫써머 씨어서커 우븐반바지',
  price: '69000',
  href: 'link'
}, {
  id: 'men02',
  src: './img/men02.jpg',
  category: cat[0],
  name: '핫써머 씨어서커 아노락 바람막이',
  price: '119000',
  href: 'link2'
}, {
  id: 'men03',
  src: './img/men03.jpg',
  category: cat[0],
  name: '컴포트핏 인터내셔널 반팔 카라티',
  price: '69000',
  href: 'link2'
}, {
  id: 'men04',
  src: './img/men04.jpg',
  category: cat[0],
  name: '핫써머 씨어서커 아노락 바람막이',
  price: '119000',
  href: 'link2'
}, {
  id: 'men05',
  src: './img/men05.jpg',
  category: cat[0],
  name: '핫써머 사이드프린트 우븐 반바지',
  price: '69000',
  href: 'link2'
}, {
  id: 'men06',
  src: './img/men06.jpg',
  category: cat[0],
  name: '핫써머 모노그램 우븐 반바지',
  price: '79000',
  href: 'link2'
}, {
  id: 'men07',
  src: './img/men07.jpg',
  category: cat[0],
  name: '컴포트핏 인터내셔널 6부 반바지',
  price: '59000',
  href: 'link2'
}, {
  id: 'men08',
  src: './img/men08.jpg',
  category: cat[0],
  name: '페스타 그래픽 티셔츠',
  price: '49000',
  href: 'link2'
}, {
  id: 'men09',
  src: './img/men09.jpg',
  category: cat[0],
  name: '레터링 그래픽 티셔츠',
  price: '49000',
  href: 'link2'
}, {
  id: 'men10',
  src: './img/men10.jpg',
  category: cat[0],
  name: '레코드 그래픽 티셔츠',
  price: '59000',
  href: 'link2'
}, {
  id: 'men11',
  src: './img/men11.jpg',
  category: cat[0],
  name: 'havefun 그래픽 티셔츠',
  price: '49000',
  href: 'link2'
}, {
  id: 'men12',
  src: './img/men12.jpg',
  category: cat[0],
  name: '컴포트핏 인터내셔널 우븐 후드티',
  price: '119000',
  href: 'link2'
}, {
  id: 'men13',
  src: './img/men13.jpg',
  category: cat[0],
  name: '컴포트핏 인터내셔널 우븐 후드티',
  price: '119000',
  href: 'link2'
}, {
  id: 'men14',
  src: './img/men14.jpg',
  category: cat[0],
  name: '컴포트핏 인터내셔널 우븐 후드티',
  price: '119000',
  href: 'link2'
}, {
  id: 'men15',
  src: './img/men15.jpg',
  category: cat[0],
  name: '컴포트핏 인터내셔널 우븐 후드티',
  price: '119000',
  href: 'link2'
}, {
  id: 'men16',
  src: './img/men16.jpg',
  category: cat[0],
  name: '컴포트핏 인터내셔널 스몰로고 카라티',
  price: '79000',
  href: 'link2'
}, {
  id: 'men17',
  src: './img/men17.jpg',
  category: cat[0],
  name: '컴포트핏 플래그 반팔티',
  price: '39000',
  href: 'link2'
}, {
  id: 'men18',
  src: './img/men18.jpg',
  category: cat[0],
  name: '컴포트핏 플래그 반팔티',
  price: '39000',
  href: 'link2'
}, {
  id: 'men19',
  src: './img/men19.jpg',
  category: cat[0],
  name: '컴포트핏 플래그 반팔티',
  price: '39000',
  href: 'link2'
}, {
  id: 'men20',
  src: './img/men20.jpg',
  category: cat[0],
  name: '컴포트핏 마인드블로어 반팔티',
  price: '39000',
  href: 'link2'
}, {
  id: 'men21',
  src: './img/men21.jpg',
  category: cat[1],
  name: '핫써머 모노그램 나시티',
  price: '49000',
  href: 'link2'
}, {
  id: 'men22',
  src: './img/men22.jpg',
  category: cat[1],
  name: '핫써머 우븐 포켓 반바지',
  price: '69000',
  href: 'link2'
}, {
  id: 'men23',
  src: './img/men23.jpg',
  category: cat[0],
  name: '핫써머 씨어서커 우븐반바지',
  price: '69000',
  href: 'link2'
}, {
  id: 'men24',
  src: './img/men24.jpg',
  category: cat[0],
  name: '핫써머 씨어서커 아노락 바람막이',
  price: '119000',
  href: 'link2'
}];
var _default = menClothList;
exports.default = _default;
},{}],"sub/js/main.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var productList = document.querySelector('.product_list');
var makeIcon = function makeIcon() {
  var icon = document.createElement('div');
  icon.setAttribute('class', 'icon');
  var cartBtn = document.createElement('button');
  cartBtn.setAttribute('class', 'cart_btn');
  cartBtn.setAttribute('type', 'button');
  var iconCart = document.createElement('span');
  iconCart.setAttribute('class', 'material-icons');
  iconCart.appendChild(document.createTextNode('shopping_cart'));
  var heartBtn = document.createElement('button');
  heartBtn.setAttribute('class', 'heart_btn');
  heartBtn.setAttribute('type', 'button');
  var iconHeart = document.createElement('span');
  iconHeart.setAttribute('class', 'material-icons-outlined');
  iconHeart.appendChild(document.createTextNode('favorite_border'));
  cartBtn.appendChild(iconCart);
  heartBtn.appendChild(iconHeart);
  icon.append(cartBtn, heartBtn);
  return icon;
};
for (var i in _data.default) {
  var product = document.createElement('div');
  product.setAttribute('class', 'product');
  var href = document.createElement('a');
  href.setAttribute('href', _data.default[i].href);
  product.appendChild(href);
  var itemTop = document.createElement('div');
  itemTop.setAttribute('class', 'item_top img');
  var productImg = document.createElement('img');
  productImg.setAttribute('src', _data.default[i].src);
  itemTop.append(productImg, makeIcon());
  var productCategory = document.createElement('p');
  productCategory.setAttribute('class', 'product_category');
  productCategory.appendChild(document.createTextNode(_data.default[i].category));
  var productInfo = document.createElement('div');
  productInfo.setAttribute('class', 'product_info');
  var infoName = document.createElement('p');
  infoName.setAttribute('class', 'info_name');
  infoName.appendChild(document.createTextNode(_data.default[i].name));
  var infoPrice = document.createElement('p');
  infoPrice.setAttribute('class', 'info_price');
  var priceString = _data.default[i].price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  infoPrice.appendChild(document.createTextNode(priceString + '원'));
  productInfo.append(infoName, infoPrice);
  href.append(itemTop, productCategory, productInfo);
  productList.appendChild(product);
} //sub item 생성

var elCart = document.querySelectorAll('.cart_btn');
var elHeart = document.querySelectorAll('.heart_btn');
var _iterator = _createForOfIteratorHelper(elCart),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var item = _step.value;
    item.addEventListener('click', function (e) {
      e.preventDefault();
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(elHeart),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _item = _step2.value;
    _item.addEventListener('click', function (e) {
      e.preventDefault();
    });
  }
  //a태그 이동 방지
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var productImgs = document.querySelectorAll('.item_top img');
var _iterator3 = _createForOfIteratorHelper(productImgs),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var _productImg = _step3.value;
  }
  //hover효과
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
$(function () {
  //나중에 바꿀 것: 스크롤탑 0일때만 투명배경 아닐때는 흰배경
  //스크롤 업/다운 따라서 메뉴 온오프

  $(window).scroll(function () {
    var p = $(this).scrollTop();
    if (p === 0) {
      $('.header').addClass('top');
    } else {
      $('.header').removeClass('top');
    }
  });
  $('.gnb ul>li').hover(function () {
    $(this).children('.gnb_hover').stop().fadeIn(300);
    $('.header').removeClass('top');
  }, function () {
    $(this).children('.gnb_hover').stop().fadeOut(300);
    $('.header').addClass('top');
  });
}); ////jquery_END
},{"./data.js":"sub/js/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61108" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","sub/js/main.js"], null)
//# sourceMappingURL=/main.fd09e239.js.map