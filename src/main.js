import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

//Instanciar impuestos y clientes
const calculoImpuesto1 = new Impuestos(200, 100);
const calculoImpuesto2 = new Impuestos(5000, 450);

const cliente1 = new Cliente('Almendra', calculoImpuesto1);
const cliente2 = new Cliente('Juan', calculoImpuesto2);

//Calcular los impuestos de cada cleinte
console.log(cliente1.CalcularImpuesto());
console.log(cliente2.CalcularImpuesto());
console.log(`El impuesto del cliente ${cliente1.nombre} es ${cliente1.CalcularImpuesto()}`);
console.log(`El impuesto del cliente ${cliente2.nombre} es ${cliente2.CalcularImpuesto()}`);
console.log(cliente1)
console.log(cliente2)