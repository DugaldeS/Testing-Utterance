exports.ids = [4,1,2];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/HeaderView.vue?vue&type=template&id=1ca6be64&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_vm._ssrNode("<button disabled=\"disabled\" class=\"twelve columns button-primary\">\n    Numeros Ganadores de loteria\n  </button>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/HeaderView.vue?vue&type=template&id=1ca6be64&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/HeaderView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3602a89f"
  
)

/* harmony default export */ var HeaderView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/FooterView.vue?vue&type=template&id=60e0c207&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_vm._ssrNode("<button disabled=\"disabled\" class=\"twelve columns button-primary\">\n    Copyright (c) 2023 - David Ugalde\n  </button>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/FooterView.vue?vue&type=template&id=60e0c207&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/FooterView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d678dad"
  
)

/* harmony default export */ var FooterView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/lotery/_slug.vue?vue&type=template&id=36fef5fa&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_c('HeaderView'), _vm._ssrNode(" <div class=\"row\"><div class=\"three columns\"></div> <div class=\"six columns\"><h4>" + _vm._ssrEscape("Numero de loteria: " + _vm._s(_vm.lotery.num)) + "</h4>" + _vm._ssrEscape("\n       Multiplicador " + _vm._s(_vm.lotery.multiplier) + " ") + "<br>" + _vm._ssrEscape("\n       Mega Ball: " + _vm._s(_vm.lotery.megaball) + " ") + "<br>" + _vm._ssrEscape("\n       Numbers: " + _vm._s(_vm.lotery.WinningNumbers) + " ") + "<br>" + _vm._ssrEscape("\n       Dia de lanzanmiento: " + _vm._s(_vm.lotery.Drawdate) + "\n\t ") + "</div> <div class=\"two columns\"></div></div> "), _c('FooterView')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/lotery/_slug.vue?vue&type=template&id=36fef5fa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/lotery/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const lotery = await $content('lotery', params.slug).fetch();
    return {
      lotery
    };
  }
});
// CONCATENATED MODULE: ./pages/lotery/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var lotery_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/lotery/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lotery_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1bbc059b"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderView: __webpack_require__(23).default,FooterView: __webpack_require__(24).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map