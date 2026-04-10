// dame un array de colores
// dame un array de tamaños
// dame un array de formas

const colores = ['rojo', 'verde', 'azul', 'amarillo'];

const tamaños = ['pequeño', 'mediano', 'grande'];

const formas = ['cuadrado', 'triangulo', 'circulo'];

const coloresRandom = () => {
  return colores[Math.floor(Math.random() * colores.length)];
};
console.log(coloresRandom());

const tamañosRandom = () => {
  return tamaños[Math.floor(Math.random() * tamaños.length)];
};
console.log(tamañosRandom());

const formasRandom = () => {
  return formas[Math.floor(Math.random() * formas.length)];
};
console.log(formasRandom());
