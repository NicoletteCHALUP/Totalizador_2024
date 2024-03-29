import { totalizador, Impuestos } from './totalizador.js';

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado1-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Cantidad = Number.parseInt(cantidad.value);
  const Precio = Number.parseInt(precio.value);
  const Estado = estado.value;
  const impuesto = Impuestos(Estado);
  

  div.innerHTML = `
    <p>Precio Neto (${Cantidad} * $${Precio}): $${totalizador(Cantidad, Precio)}</p>
    <p>Impuesto (${impuesto}%): $${impuesto}</p>
    
  `;
});
