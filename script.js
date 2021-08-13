function hola(){

    var valor = Number(document.getElementById('cantidad').value);
    document.getElementById("valor").innerHTML=valor;

    const de = document.getElementById("de").value;
    const a = document.getElementById("a").value;

  


const divisas = {

     /*conversion Dolar*/
    dolarPeso: 3900,
    pesoDolar:  0.00025,

    dolarEuro: 0.85,
    euroDolar: 1.18,

    dolarLibra: 0.72,
    libraDolar: 1.39,

    dolarMexicano: 20.05,
    mexicanoDolar: 0.050,

    /*conversion pesos Colombianos*/

    pesosEuro: 0.00022,
    euroPesos: 4.666,

    pesosLibra: 0.00018,
    libraPesos: 5.502,

    pesosMexicanos: 0.0051,
    mexicanosPesos: 197,

    /*conversion Euros*/

    euroLibra: 0.85,
    libraEuro: 1.18,

    euroMexicano: 23.58,
    mexicanoEuros: 0.042,

    /*conversion Libra Esterlina*/

    libraMexicano: 27.82,
    mexicanoLibra: 0.036
    
}

    
const {dolarEuro, dolarLibra, 
    dolarMexicano, dolarPeso, 
    euroDolar, euroLibra, 
    euroMexicano, euroPesos,
    libraDolar, libraEuro,
    libraMexicano, libraPesos,
    mexicanoDolar, mexicanoEuros,
    mexicanoLibra, mexicanosPesos,
    pesoDolar, pesosEuro, 
    pesosLibra,  pesosMexicanos} = divisas
    


//dolar a peso 
   
    if( de==1 && a==4 ){
           const results = dolarPeso * valor
        
           mensaje="<p> Resultado:  "+results+"</p>";
        document.getElementById("resultado").innerHTML=mensaje;
    }   

    else if( de==4 && a==1 ){

        const results = pesoDolar * valor

        mensaje="<p> Resultado:  "+results+"</p>";
        document.getElementById("resultado").innerHTML=mensaje;

    }

    //dolar a euro 

    else if( de==1 && a==2 ){


        const results = dolarEuro * valor

        mensaje="<p> Resultado:  "+results+"</p>";
        document.getElementById("resultado").innerHTML=mensaje;
    }

    else if( de==2 && a==1 ){

        const results = euroDolar * valor

        mensaje="<p> Resultado:  "+results+"</p>";
        document.getElementById("resultado").innerHTML=mensaje;

    }

    //Dolar a Libra esterlina

    else if( de==1 && a==3 ){

        const results = dolarLibra * valor
        
        mensaje="<p> Resultado:  "+results+"</p>";
        document.getElementById("resultado").innerHTML=mensaje;

    }

    else if( de==3 && a==1 ){

        const results = libraDolar * valor

        mensaje="<p> Resultado:  "+results+"</p>";
        document.getElementById("resultado").innerHTML=mensaje;

    }

    // Dolar a peso Mexicano

    else if( de==1 && a==5 ){

        const results = dolarMexicano * valor

        mensaje="<p> Resultado:  "+results+"</p>";
        document.getElementById("resultado").innerHTML=mensaje;

    }

    else if( de==5 && a==1 ){

        const results = mexicanoDolar * valor

        mensaje="<p> Resultado:  "+results+"</p>";
        document.getElementById("resultado").innerHTML=mensaje;

    }

    //peso a euro

    else if( de==4 && a==2 ){

        const results = pesosEuro * valor

    mensaje="<p> Resultado:  "+results+"</p>";
    document.getElementById("resultado").innerHTML=mensaje;

    }

    else if( de==2 && a==4 ){

    const results = euroPesos * valor

    mensaje="<p> Resultado:  "+results+"</p>";
    document.getElementById("resultado").innerHTML=mensaje;
    }


    //Pesos a Libra esterlina

    else if( de==4 && a==3 ){

        const results = pesosLibra * valor

    mensaje="<p> Resultado:  "+results+"</p>";
    document.getElementById("resultado").innerHTML=mensaje;

    }

    else if( de==3 && a==4 ){

        const results = libraPesos * valor

    mensaje="<p> Resultado:  "+results+"</p>";
    document.getElementById("resultado").innerHTML=mensaje;

    }

    //Euro a libras esterlinas

    else if( de==2 && a==3 ){

        const results = euroLibra * valor

     mensaje="<p> Resultado:  "+results+"</p>";
     document.getElementById("resultado").innerHTML=mensaje;

    }

    else if( de==3 && a==2 ){

        const results = libraEuro * valor

     mensaje="<p> Resultado:  "+results+"</p>";
     document.getElementById("resultado").innerHTML=mensaje;
    }

      //euros a pesos mexicanos


    else if( de==2 && a==5 ){

        const results = euroMexicano * valor

     mensaje="<p> Resultado:  "+results+"</p>";
     document.getElementById("resultado").innerHTML=mensaje;

    }

    else if( de==5 && a==2 ){

        const results = mexicanoEuros * valor

     mensaje="<p> Resultado:  "+results+"</p>";
     document.getElementById("resultado").innerHTML=mensaje;

    }

    // Libra a Pesos mexicanos

    else if( de==3 && a==5 ){

        const results = libraMexicano * valor

     mensaje="<p> Resultado:  "+results+"</p>";
     document.getElementById("resultado").innerHTML=mensaje;

    }

    else if( de==5 && a==3 ){

        const results = mexicanoLibra * valor

     mensaje="<p> Resultado:  "+results+"</p>";
     document.getElementById("resultado").innerHTML=mensaje;

    }

    // pesos Colombianos A pesos Mexicanos

    else if( de==4 && a==5 ){

        const results = pesosMexicanos * valor

     mensaje="<p> Resultado:  "+results+"</p>";
     document.getElementById("resultado").innerHTML=mensaje;

    }

    else if( de==5 && a==4 ){

        const results = mexicanosPesos * valor

     mensaje="<p> Resultado:  "+results+"</p>";
     document.getElementById("resultado").innerHTML=mensaje;

    }

} 