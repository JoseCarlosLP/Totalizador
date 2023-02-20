function calcularDescuentos(total){
    if(total<1000) return 0;
    if(total>=1000 && total<3000) return 3;
    if(total>=3000 && total<7000) return 5;
}

export default calcularDescuentos;