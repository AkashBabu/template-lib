"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;(function () {var _nestedObj$address, _nestedObj$address$co, _nestedObj$address$co2, _nestedObj$address$co3, _nestedObj$wrong, _nestedObj$wrong$prop;
  var nestedObj = {
    address: {
      country: {
        state: {
          city: {
            area: 'BTM' } } } } };






  console.log('area:', nestedObj === null || nestedObj === void 0 ? void 0 : (_nestedObj$address = nestedObj.address) === null || _nestedObj$address === void 0 ? void 0 : (_nestedObj$address$co = _nestedObj$address.country) === null || _nestedObj$address$co === void 0 ? void 0 : (_nestedObj$address$co2 = _nestedObj$address$co.state) === null || _nestedObj$address$co2 === void 0 ? void 0 : (_nestedObj$address$co3 = _nestedObj$address$co2.city) === null || _nestedObj$address$co3 === void 0 ? void 0 : _nestedObj$address$co3.area);
  console.log('area:', nestedObj === null || nestedObj === void 0 ? void 0 : (_nestedObj$wrong = nestedObj.wrong) === null || _nestedObj$wrong === void 0 ? void 0 : (_nestedObj$wrong$prop = _nestedObj$wrong.prop) === null || _nestedObj$wrong$prop === void 0 ? void 0 : _nestedObj$wrong$prop.check);

})();

var sum = function sum(a, b) {return a + b;};var _default =

sum;exports["default"] = _default;