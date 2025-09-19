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
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaResultado.appendChild(li);
    }
}