import mostrarImpuesto from "./estados";
import precioNeto from "./precio_neto";
import calcularImpuesto from "./impuesto";

const cant_items=document.querySelector("#cant_items")
const precio_item=document.querySelector("#precio_item")
const estado=document.querySelector("#estado");
const resultado=document.getElementById("resultado");
const resultado2=document.getElementById("resultado2");
const resultado3=document.getElementById("resultado3");
const precio_neto=document.getElementById("precio_neto");
const impuestoCA=document.getElementById("ca");
const form1=document.querySelector("#IngresarItems-form");
const form2=document.querySelector("#IngresarPrecio-form");
const form3=document.querySelector("#SeleccionarEstado-form");
const form4=document.querySelector("#PrecioNeto-form");
const form5=document.querySelector("#Impuestos-form");

form1.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(cant_items.value!="")
        mostrarCantItems();
    //resultado.style.display="none";
    //resultado.style.display="block";

})

form2.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(precio_item.value!="")
        mostrarPrecioXItem();
    //resultado2.style.display="none";
    //resultado2.style.display="block";

})

form3.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(estado.value!="-")
        mostrarEstado();
    //resultado2.style.display="none";
    //resultado2.style.display="block";

})

form4.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(cant_items.value!=0 && precio_item.value!=0)
        precio_neto.innerHTML="("+cant_items.value+"*"+precio_item.value+") : $"+precioNeto(cant_items.value,precio_item.value);
    else
        alert("Debe ingresar valores a los campos para calcular el precio neto");
})

form5.addEventListener("submit",(event)=>{
    event.preventDefault();
    impuestoCA.innerHTML=calcularImpuesto(precioNeto(cant_items.value,precio_item.value),mostrarImpuesto("CA"));
})

function mostrarCantItems()
{
    ////document.getElementById("cantidad").innerHTML=cant_items.value;
    resultado.innerHTML="La cantidad de items ingresados es : <b>" + cant_items.value + "</b>";
}

function mostrarPrecioXItem(){
    resultado2.innerHTML="El precio por item es : <b>" + precio_item.value+"</b>";
}

function mostrarEstado(){
    resultado3.innerHTML="El estado seleccionado es : <b>"+estado.value+"</b> y tiene un impuesto de: "+ mostrarImpuesto(estado.value)+"%"; 
}