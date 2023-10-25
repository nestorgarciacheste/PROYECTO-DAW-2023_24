export class Opinion {
  constructor(usuario, puntuacion, opinion) {
    this.usuario = usuario;
    try {
      if (!Number.isInteger(puntuacion) || puntuacion < 0 || puntuacion > 5) {
        throw new Error(
          "La puntuación elegida no es la correcta, debe ser un número entero mayor o igual a 0 e inferior o igual a 5."
        );
      }
      this.puntuacion = puntuacion;
    } catch (error) {
      alert(error.message);
    }

    try {
      if (opinion.length > 300) {
        throw new Error("La opinión debe tener menos de 300 caracteres.");
      }
      this.opinion = opinion;
    } catch (error) {
      alert(error.message);
    }
    this.fecha = new Date();
  }
}
