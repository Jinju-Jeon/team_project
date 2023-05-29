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
})({"js/main.js":[function(require,module,exports) {
/* scroll-menu */
var headerInner = document.querySelector('.header_inner');
var prev = 0;

//scrollEvent
window.addEventListener('scroll', function () {
  /* header view */
  if (prev < window.scrollY && window.scrollY > 500) {
    headerInner.classList.remove('scroll_up');
    headerInner.classList.add('scroll_down');
  } else {
    headerInner.classList.remove('scroll_down');
    headerInner.classList.add('scroll_up');
  }
  prev = window.scrollY;
  headerStyle();

  /* magazine */
  var magImg = document.querySelectorAll('.magazine .img');
  var magOn = document.querySelector('.magazine').offsetTop;
  if (window.scrollY > magOn - 600) {
    magImg.forEach(function (img, i) {
      gsap.to(img, 0.8, {
        y: 0,
        opacity: 1
      }).delay(i * 0.3);
    }); //foreach
  }
});

/* header-hover */
var gnbLists = document.querySelectorAll('.gnb>ul>li');
var gnbHovers = document.querySelectorAll('.gnb .gnb_hover');
gnbLists.forEach(function (gnbList, i) {
  gnbList.addEventListener('mouseenter', function () {
    document.querySelector('.header').classList.remove('top');
    gnbHovers[i].classList.add('hovered');
    document.querySelector('.bg_opacity').style.display = 'block';
  });
  gnbList.addEventListener('mouseleave', function () {
    gnbHovers[i].classList.remove('hovered');
    document.querySelector('.bg_opacity').style.display = 'none';
    headerStyle();
  });
});

/* search */
var searchBtn = document.querySelector('.search_btn');
var search = document.querySelector('.search');
var searchClose = document.querySelector('.search .close');
searchBtn.addEventListener('click', function () {
  search.style.display = 'block';
  document.querySelector('.bg_opacity').style.display = 'block';
});
searchClose.addEventListener('click', function () {
  search.style.display = 'none';
  document.querySelector('.bg_opacity').style.display = 'none';
});
document.querySelector('.bg_opacity').addEventListener('click', function () {
  search.style.display = 'none';
  this.style.display = 'none';
});

/* search변화 */
var popSearch = ['데일리 슈즈', '키즈 바람막', '베이직리니어반팔티', '운동화', '스피드서브'];
var recomSearch = ['TENNIS COLLECTION', 'DAILY SHOES RAYFLIDE', '스포츠 언더웨어', '가볍고 편한 키즈 운동화 #문더스트'];
var recentSearch = ['씨어서커', '온라인 단독', '테니스 스커트'];
var searchAll = [popSearch, recomSearch, recentSearch];
var searchList = document.querySelectorAll('.search .bottom>div>ul');
makeSearch(); //

var madeX = document.querySelectorAll('.search ul span');
console.log(madeX);
madeX.forEach(function (x, i) {
  x.addEventListener('click', function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
  });
});

// visual_main
new Swiper('.vm_slider', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  }
});

//data-swiper-slide-index  이게 슬라이드 index임에 참고<< index는 자꾸 바뀌니까!!! 근데 어떻게 해야하지

/* new */
new Swiper(".new_tab", {
  slidesPerView: "auto",
  centeredSlides: true,
  slideToClickedSlide: true,
  touchRatio: 1,
  observer: true,
  observeParents: true,
  speed: 800,
  // loop: true,
  rewind: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/* rank */
var rankList1 = document.querySelectorAll('.rank_list1 li');
var rankList2 = document.querySelectorAll('.rank_list2 li');

//rankslider1
var rankSlider1 = new Swiper(".rank_slider1", {
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  rewind: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  on: {
    activeIndexChange: function activeIndexChange() {
      var _this = this;
      rankList1.forEach(function (rank, i) {
        rank.classList.remove('on');
        if (i === _this.realIndex) {
          rank.classList.add('on');
        } //if

        if (_this.realIndex == 5) {
          setTimeout(function () {
            rankSlider1.slideTo(0, 300, true);
          }, 3000);
        }
      }); //forEach
    } //activeIndex
  } //on    
});

rankList1.forEach(function (rank, i) {
  rank.addEventListener('click', function () {
    rankSlider1.slideTo(i, 300, true);
  });
});

//rankslider2
var rankSlider2 = new Swiper(".rank_slider2", {
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  rewind: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  on: {
    activeIndexChange: function activeIndexChange() {
      var _this2 = this;
      rankList2.forEach(function (rank, i) {
        rank.classList.remove('on');
        if (i === _this2.realIndex) {
          rank.classList.add('on');
        } //if

        if (_this2.realIndex == 5) {
          setTimeout(function () {
            rankSlider2.slideTo(0, 300, true);
          }, 3000);
        }
      }); //forEach
    } //activeIndex
  } //on    
});

rankList2.forEach(function (rank, i) {
  rank.addEventListener('click', function () {
    rankSlider2.slideTo(i, 300, true);
  });
});

/* recom */
var plusBtns = document.querySelectorAll('.recom_detail>button');
var plusIcon = document.querySelectorAll('.recom_detail>button span');
var recomDesc = document.querySelectorAll('.recom_desc');
var clickState = new Array();
for (var i = 0; i < plusBtns.length; i++) {
  clickState.push(0);
}
plusBtns.forEach(function (btn, i) {
  btn.addEventListener('click', function () {
    if (!clickState[i]) {
      clickState[i] = 1;

      // recomDesc[i].classList.add('on')

      recomDesc[i].style.display = 'block';
      gsap.to(recomDesc[i], 0.2, {
        opacity: 1
      });
      gsap.to(plusIcon[i], 0.2, {
        rotation: 45
      });
    } else {
      clickState[i] = 0;
      gsap.to(recomDesc[i], 0.2, {
        opacity: 0
      }, function () {
        recomDesc[i].style.display = 'none';
      });
      gsap.to(plusIcon[i], 0.2, {
        rotation: 0
      });
    }
  }); //click
}); //forEach

/* function */
function headerStyle() {
  if (window.scrollY === 0) {
    document.querySelector('.header').classList.add('top');
  } else {
    document.querySelector('.header').classList.remove('top');
  }
}
function makeSearch() {
  searchAll.forEach(function (searchItem, i) {
    var listCover = searchList[i];
    searchItem.forEach(function (keyword, j) {
      var list = document.createElement('li');
      list.innerText = keyword;
      if (i == 2) {
        var xBox = document.createElement('span');
        xBox.innerText = 'x';
        list.appendChild(xBox);
      }
      listCover.appendChild(list);
    });
  });
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "10450" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map