function calcularDescuentos(total){
    if(total<1000) return 0;
    if(total>=1000 && total<3000) return 3;
    if(total>=3000 && total<7000) return 5;
    if(total>=7000 && total<10000) return 7;
    if(total>=10000 && total<30000) return 10;
}

export default calcularDescuentos;