import { Opinion } from "./Opinion";

class Producto {
  constructor(titulo = "", descripcion = "", precio = 0.0, oferta = false) {
    if (
      typeof titulo !== "string" ||
      !/^.{2,20}$/.test(titulo) ||
      !/^.{2,200}$/.test(descripcion) ||
      typeof descripcion !== "string" ||
      typeof precio !== "number"
    ) {
      throw new Error("Los valores proporcionados no son válidos");
    }

    this._titulo = titulo;
    this._descripcion = descripcion;
    this._precio = precio;
    this._puntuacion_Media = 0;
    this._opiniones = [];
    this._oferta = oferta;
    this._num_Ventas = 0;
  }

  // Resto de la implementación de la clase...

  get titulo() {
    return this._titulo;
  }

  set titulo(value) {
    this._titulo = value;
  }

  get descripcion() {
    return this._descripcion;
  }

  set descripcion(value) {
    this._descripcion = value;
  }

  get precio() {
    return this._precio;
  }

  set precio(value) {
    this._precio = value;
  }

  get opiniones() {
    return this._opiniones;
  }

  set opiniones(value) {
    this._opiniones = value;
  }

  get puntuacion_Media() {
    return this._puntuacion_Media;
  }

  set puntuacion_Media(value) {
    this._puntuacion_Media = value;
  }

  get oferta() {
    return this._oferta;
  }

  set oferta(value) {
    this._oferta = value;
  }

  get num_Ventas() {
    return this._num_Ventas;
  }

  set num_Ventas(value) {
    this._num_Ventas = value;
  }
}
