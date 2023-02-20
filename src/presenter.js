const cant_items=document.querySelector("#cant_items")
const precio_item=document.querySelector("#precio_item")
const resultado=document.getElementById("resultado");
const resultado2=document.getElementById("resultado2");
const form1=document.querySelector("#IngresarItems-form");
const form2=document.querySelector("#IngresarPrecio-form");


form1.addEventListener("submit",(event)=>{
    event.preventDefault();
    mostrarCantItems();
    //resultado.style.display="none";
    //resultado.style.display="block";

})

form2.addEventListener("submit",(event)=>{
    event.preventDefault();
    mostrarPrecioXItem();
    //resultado2.style.display="none";
    //resultado2.style.display="block";

})

function mostrarCantItems()
{
    ////document.getElementById("cantidad").innerHTML=cant_items.value;
    document.getElementById("resultado").innerHTML="La cantidad de items ingresados es : <b>" + cant_items.value + "</b>";
}

function mostrarPrecioXItem(){
    resultado2.innerHTML="El precio por item es : <b>" + precio_item.value+"</b>";
}
