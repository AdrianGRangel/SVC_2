class Usuario {
  constructor(nombre, apellidos, telefono, correo, direccion) {
    this.nombre = nombre || "";
    this.apellidos = apellidos || "";
    this.telefono = telefono || "";
    this.correo = correo || "";
    this.direccion = direccion || "";
  }

  guardar() {
    localStorage.setItem("usuario", JSON.stringify(this));
  }

  static cargar() {
    const datos = localStorage.getItem("usuario");
    return datos ? JSON.parse(datos) : null;
  }
}
