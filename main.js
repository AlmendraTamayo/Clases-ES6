import Cliente from './src/cliente.js';
import Impuestos from './src/impuestos.js';

//Instanciar impuestos y clientes
const calculoImpuesto1 = new Impuestos(200, 100);
const calculoImpuesto2 = new Impuestos(5000, 450);

const cliente1 = new Cliente('Almendra', calculoImpuesto1);
const cliente2 = new Cliente('Juan', calculoImpuesto2);

//Calcular los impuestos de cada cleinte
console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());
console.log(`El impuesto del cliente ${cliente1.nombre} es ${cliente1.calcularImpuesto()}`);
console.log(cliente2)