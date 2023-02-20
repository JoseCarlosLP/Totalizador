const cant_items=document.querySelector("#cant_items")
const resultado=document.getElementById("resultado");
const form=document.querySelector("#totalizador-form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    mostrarNumero();
    //resultado.style.display="none";
    //ffresultado.style.display="block";

})

function mostrarNumero()
{
    ////document.getElementById("cantidad").innerHTML=cant_items.value;
    document.getElementById("resultado").innerHTML="La cantidad de items ingresados es : <b>" + cant_items.value + "</b>";

}

