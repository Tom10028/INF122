//operadores
var suma = 5+5;
console.log(suma);
var resta = 5-5;
console.log(resta);
var multiplicacion = 5*5;
console.log(multiplicacion);
var division=5/5;
console.log(division);
//estructuras
var num=10;
if(num%2==0){
    console.log("el numero" + num + " es par");
}else{
    console.log("el numero " + num + " no es par")  ;
}
for(let i=0;i<num;i++){
    console.log(i);
}
for(let i=num;i>=0;i--){
    console.log(i);
}
while(num >=0){
    console.log(num);
    num--;
}
//arrays y  objetos;
const persona = {
    nombre: "Marco",
    apellido: "Luna",
    ci: 9909972,
    edad: 22
};
const colores = ["rojo", "azul", "verde", "amarillo"];
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.ci);
console.log(persona.edad);

console.log(colores);
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);
console.log(colores[4]);

console.log(colores.length());

