function mostrarImpuesto(a)
{
    if(a=="UT"){
        return 6.65;
    }
    if(a=="NV"){
        return 8;
    }
    if(a=="TX"){
        return 6.25;
    }
    if(a=="AL"){
        return 4;
    }
    if(a=="CA"){
        return 8.25;
    }
}

export default mostrarImpuesto;