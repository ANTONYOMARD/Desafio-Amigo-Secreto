// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //capturar el valor del input
    let nombre = document.getElementById("amigo").value;
    //validar entrada
    if(nombre === ""){
        alert("Por favor ingresa un nombre");
        return;
    }else{
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    //obtener la referencia de la lista y vaciarla
    let listaResultado = document.getElementById("listaAmigos");
    listaResultado.innerHTML = "";
    //recorrer el array y crear elementos li
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaResultado.appendChild(li);
    }
}

function sortearAmigo(){
    //validar que haya amigos añadidos y haya menos 2 amigos
    if(amigos.length < 0 || amigos.length < 2){
        alert("Por favor añade al menos 2 amigos para sortear");
    }
    //generar un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //mostrar el resultado
    let resultado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerText = `Tu amigo secreto es: ${resultado}`;
}