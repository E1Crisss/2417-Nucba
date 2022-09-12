/* Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

++Primero realice las actividades interando con for y if, luego me avisaron que realice con metodos asi que dejo los 2 modos que pude realizar esta actividad++

*/

const menuPizzas = [];

class Pizzas {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    (this.ingredientes = ingredientes), (this.precio = precio);
  }
}

const Muzarella = new Pizzas(
  0,
  "Muzarella",
  ["salsa", "queso muzarella", "aceituna"],
  1200
);
const Napolitana = new Pizzas(
  1,
  "Napolitana",
  ["salsa", "queso muzarella", "tomate", "aceituna"],
  1500
);
const Calabresa = new Pizzas(
  2,
  "Calabresa",
  ["salsa", "queso muzarella", "longaniza calabresa cortada en rodajas"],
  1800
);
const Espinaca = new Pizzas(
  3,
  "Espinaca a la crema",
  ["salsa", "queso muzarella", "aceituna", "aceite de oliva", "espinaca"],
  1700
);
const Fugazzetton = new Pizzas(
  4,
  "Fugazzettón",
  [
    "cebolla en juliana",
    "queso cremoso",
    "jamón",
    "tomate al natural",
    "aceite de oliva",
    "parmesano",
  ],
  1800
);
const Primavera = new Pizzas(
  5,
  "Primavera",
  ["palmitos", "huevo duro", "morrones", "salsa golf"],
  2000
);

menuPizzas.push(
  Muzarella,
  Napolitana,
  Calabresa,
  Espinaca,
  Fugazzetton,
  Primavera
);

console.log("Paso 1: Mostrar ID inpar");
// ``

let pizzaInpar = menuPizzas.filter((pizza) => pizza.id % 2 != 0);

pizzaInpar.forEach((pizzas) => {
  console.log(`Las pizza ${pizzas.nombre} son de ID inpar`);
});

/* 
let pizzaPar = [],
  pizzaInpar = [];

for (let i = 0; i < menuPizzas.length; i++) {
  if (menuPizzas[i].id % 2 == 0) {
    pizzaPar.push(menuPizzas[i].nombre);
  } else {
    pizzaInpar.push(menuPizzas[i].nombre);
  }
}

console.log(`La Pizza ${pizzaPar} tiene ID par`);
console.log(`La Pizza ${pizzaInpar} tiene ID Inpar`); */

console.log("");
console.log("Paso 2: Mostrar pizza de menor valor a $600");

let mostrarValor = () => {
  menuPizzas.some((pizza) => pizza.precio <= 600)
    ? console.log(`Hay Pizzas baratitas `)
    : console.log(`La elegancia no se mancha, no existe pizza de $600`);
};
mostrarValor();

/* for (let i = 0; i < menuPizzas.length; i++) {
  if (menuPizzas[i].precio < 600) {
    console.log(
      `Acá tenemos Pizza de ${menuPizzas[i].nombre} baratita amigo!!`
    );
  } else {
    console.log("No amigo, por $600 ni un alto guiso te armas");
  }
} */
console.log("");
console.log("Paso 3: Mostrar Menu con respectivo precio");

menuPizzas.forEach((pizzas) => {
  console.log(`Pizza de ${pizzas.nombre} cuesta $${pizzas.precio}`);
});

/* for (let i = 0; i < menuPizzas.length; i++) {
  console.log(
    `${menuPizzas[i].nombre} tiene un valor de $${menuPizzas[i].precio}.`
  );
} */

console.log("");
console.log("Paso 4: Mostrar Pizza con sus respectivos ingredientes!");

menuPizzas.forEach((pizzas) => {
  console.log(
    `La Pizza ${pizzas.nombre} tiene de ingredientes ${pizzas.ingredientes}`
  );
});

/* for (let i = 0; i < menuPizzas.length; i++) {
  console.log(
    `${menuPizzas[i].nombre} sus ingredientes son: ${menuPizzas[i].ingredientes}.`
  );
} */
