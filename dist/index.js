"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;function testOptionalChaining() {var _nestedObj$address, _nestedObj$wrong;
  var nestedObj = {
    address: {
      country: 'india' } };



  console.log('area:', nestedObj === null || nestedObj === void 0 ? void 0 : (_nestedObj$address = nestedObj.address) === null || _nestedObj$address === void 0 ? void 0 : _nestedObj$address.country);
  console.log('area:', nestedObj === null || nestedObj === void 0 ? void 0 : (_nestedObj$wrong = nestedObj.wrong) === null || _nestedObj$wrong === void 0 ? void 0 : _nestedObj$wrong.prop);
}

testOptionalChaining();

var sum = function sum(a, b) {return a + b;};var _default =

sum;exports["default"] = _default;