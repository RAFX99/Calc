var tempo = document.getElementById("tempo_1");
var tempo2 = document.getElementById("tempo_2")
var calcular = document.getElementById("calcular");
var calcular2 = document.getElementById("calcular_2");
var funcao = document.getElementById('funcao');
var funcao2 = document.getElementById('funcao_2');
var resultado_p = document.getElementById('resultado_p');
var resultado = 0;


calcular.addEventListener('click', (e) =>{
    e.preventDefault();
    if(funcao.value == "exp"){
        resultado = 32.93 * (Math.pow(2.718281828, (parseFloat(tempo.value) * (-0.18))));
        resultado_p.innerText = resultado;  
        
    }else if(funcao.value == "quad"){
        resultado = ((0.05 * Math.pow(parseFloat(tempo.value), 2)) - (2.18 * parseFloat(tempo.value))) + 23.51 ;
        resultado_p.innerText = resultado;
    }else if(funcao.value == "line"){
        resultado = (1.05 * parseFloat(tempo.value)) + 19.65;
        resultado_p.innerText = resultado;
    }
    
    
})


calcular2.addEventListener('click', (e) =>{
    e.preventDefault();
    if(funcao2.value == "exp"){
        resultado = 282.38 * (Math.pow(2.718281828, (parseFloat(tempo2.value) * (-0.18))));
        resultado_p.innerText = resultado;  
        
    }else if(funcao2.value == "quad"){
        resultado = ((0.46 * Math.pow(parseFloat(tempo2.value), 2)) - (19.33 * parseFloat(tempo2.value))) + 203.02 ;
        resultado_p.innerText = resultado;
    }else if(funcao2.value == "line"){
        resultado = (-9.11 * parseFloat(tempo2.value)) + 167.96;
        resultado_p.innerText = resultado;
    }
    
    
})