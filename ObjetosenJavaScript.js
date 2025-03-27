let jugador = {
    nombre: "Giannis Antetokounmpo",
    edad: 30,
    equipo: "Milwaukee Bucks",
    puntosPorPartido: 30.4,

    actualizarPuntos: function (nuevosPuntos) {
        this.puntosPorPartido = nuevosPuntos;
        console.log(`Los nuevos puntos por partido de ${this.nombre} son: ${this.puntosPorPartido}`);
    }
};


console.log(jugador);

jugador.actualizarPuntos(30.5);

console.log(jugador);