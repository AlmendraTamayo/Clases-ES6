"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Impuestos = function Impuestos(monto_bruto_anual, deducciones) {
  _classCallCheck(this, Impuestos);

  this.monto_bruto_anual = monto_bruto_anual;
  this.deducciones = deducciones;
};

exports["default"] = Impuestos;