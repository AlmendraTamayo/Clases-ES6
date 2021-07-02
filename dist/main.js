"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Instanciar impuestos y clientes
var calculoImpuesto1 = new _impuestos["default"](200, 100);
var calculoImpuesto2 = new _impuestos["default"](5000, 450);
var cliente1 = new _cliente["default"]('Almendra', calculoImpuesto1);
var cliente2 = new _cliente["default"]('Juan', calculoImpuesto2); //Calcular los impuestos de cada cleinte

console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());
console.log("El impuesto del cliente ".concat(cliente1.nombre, " es ").concat(cliente1.calcularImpuesto()));
console.log(cliente2);