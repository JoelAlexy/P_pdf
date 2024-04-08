import { getData } from "./crud.js";

const login = document.getElementById("form_login");
const contenedorLogin = document.getElementById("formulario_login");
const formulario = document.getElementById("ficheros");

async function comprobarUsuario(nombre, contrasenhia) {
    const usuarios = await getData("usuarios");
    console.log(usuarios);
  return usuarios.filter(async (el) => {
    if (el.nombre === nombre && el.contrasenhia === contrasenhia) return el;
  });
}

login.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nombre = login.nombre.value;
  const password = login.password.value;
  const resultado = await comprobarUsuario(nombre, password);
  if (resultado.length >= 1) {
    contenedorLogin.setAttribute("hidden", true);
    formulario.removeAttribute("hidden");
  }
});
