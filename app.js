// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(nombre){
    //capturar el valor del input
    nombre = document.getElementById("amigo").value;
    //validar entrada
    if(nombre === ""){
        alert("Por favor ingresa un nombre");
        return;
    }
    amigos.push(nombre);
    
}