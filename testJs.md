Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?

R=Es un espacio recerbado en memoria donde se puede guardar información (tipos de datos).

¿Cuál es la diferencia entre declarar e inicializar una variable?

R=Declara es asignar la variable con un nombre no necesaria mente con un valor.
e inicializar es asignarle a la variable un vez declarada un valor.

¿Cuál es la diferencia entre sumar números y concatenar strings?

R=Cuando suma numeros esta haciendo una operación matematica y cuando se concatenan strings
se esta haciendo la conexión de textos.

¿Cuál operador me permite sumar o concatenar?

R=El sibolo utilizado para esto es +.

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre - String
Apellido - String
Nombre de usuario en Platzi - String
Edad - Number
Correo electrónico - String
Mayor de edad - Boleano
Dinero ahorrado - Number
Deudas - Number

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let name = "Isreal";
let lastName = "Anaya";
let Email = "correoUser@gmail.com";
let edad = 20
let mayorEdad = true;
let ahorrado = 5000;
let Deudad = 3500;

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

Nombre Completo 
let nombre = "Israel";
let apellido = "Anaya";
let resultado = nombre +" " + apellido;

resultado = "Isreal Anaya";

Dinero real
let ahorro = 5000;
let deudas = 1500;
let total = ahorro - deudas;

total = 3500;

Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?

R=Es un fragmento de codigo compuesto por argumentos y parametros que cumple con una tarea en 
especifico.

¿Cuándo me sirve usar una función en mi código?

R=Cuando vamos a utilizar ese fragmento de codigo en más partes de nuestro codigo tambien para
cuando no queremos repetir codigo.

¿Cuál es la diferencia entre parámetros y argumentos de una función?

R=Los parametros se encuentran entre los parentesis de la función y son como las variables que utilizara y los argumetos es lo que la función va a retornar.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

function nombreCompleto(name, lastname){
    return name+ " " +lastname
    }

function datosPersona(name,lastname,nickname){
    let completeName = nombreCompleto(name,lastname); 
    return "Su nombre completo es: "+ completeName+" Su apodo es :" + nickname
    }

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

datosPersona("Isreal Anaya", "Vikingo")
'Su nombre completo es: Isreal Anaya Su apodo es: Vikingo'

Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
R=Son la forma en la que se ejecuta un bloque de codigo u otro dependiendo de alguna condición
o validación.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
R= If(else y else if), Switch
El condicional if nos permite hacer validaciones distintas en cada validacióm o condicional.
En cambio el switch todo los cases se comparan con la misma variable o condición que definimos en el switch.

¿Puedo combinar funciones y condicionales?
R= si. Las funciones pueden encapsular cualquier bloque de codigo, inclyendo condicionales.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion == 'Free'){
    console.log("Solo puedes tomar los cusrsos gratis")
} else if(tipoDeSuscripcion == 'Basic' ){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == 'Expert'){
console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion == 'ExpertPlus'){
console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
 
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

function conseguirTipoSub(subcripcion){
    if(subcripcion == 'Free'){
    console.log("Solo puedes tomar los cusrsos gratis");
    return;
}  if(subcripcion == 'Basic' ){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
} if(subcripcion == 'Expert'){
console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
return;
} if(subcripcion == 'ExpertPlus'){
console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
return;
}
console.log("No existe");
}

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

 const tiposDeSubscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert:'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
 }

tiposDeSubscripciones.free
tiposDeSubscripciones['free']

function conseguirTipoDeSub(subcripcion){
    if(tiposDeSubscripciones[subcripcion]){
        console.log(tiposDeSubscripciones[subcripcion])
        return;
    }
    console.warn('Este tipo de subcripción no existe');
} 


Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
R=Es la forma de ejecutar bloques de codigo hasta que se cumpla la condición.

¿Qué tipos de ciclos existen en JavaScript?
R= While, do while y for.

¿Qué es un ciclo infinito y por qué es un problema?
R= Cuando la validación de nuestras condiconales nunca se cumple y termina dañando la aplicación.

¿Puedo mezclar ciclos y condicionales?
R=Si, aunque los ciclos son condicionales nada no impide agregar más condicionales dentreo del ciclo.

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;
while(i >= 2 ){
    console.log("El valor de i es: " + i);
    i--;
}

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

let respuesta;

while (respuesta != '4'){
    let pregunta  = prompt('Cuanto es 2 + 2')
    respuesta = pregunta; 
}

Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
R= Es una lista de elementos.
const array=[1,"hola",true,false];

¿Qué es un objeto?
R= Es una lista de elementos pero cada nombre tiene un nombre clave.
const obj = {
    nombre: "Fulanito",
    edad: "333";
}
¿Cuándo es mejor usar objetos o arrays?
R= Arrays cuando lo que se hara en un elemento es lo mismo que todos los demas.
Objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
R=Si. Los arrays pueden guardar objetos. y los objetos pueden guardar arrays entre sus propiedades.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function imprimirprimerElementoArray(arr){
    console.log(arr[1])
}
imprimirprimerElementoArray(['Natalia','Isreal','Oswaldo'])
Isreal

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprimirElementoPorElemento(arr){
for(let i=0; i<arr.length;i++){
    console.log(arr[i])
 }
}
imprimirElementoPorElemento(["Ireal","Natalia","Oswaldo"]);


4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

const obj = {
    nombre: "Fulanito",
    edad: "333";
}

Object.values(obj)



function imprimirObjetoElementoPorElemento(obj){
const arr = Object.values(obj);
for(let i = 0; i< arr.length; i++){
    console.log(arr[i])
 }
}
imprimirObjetoElementoPorElemento(obj);