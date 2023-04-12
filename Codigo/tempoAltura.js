var tempo = document.getElementById("tempo_1");
var calcular = document.getElementById("calcular");
var funcao = document.getElementById('funcao');
var resultado_p = document.getElementById('resultado_p');
var resultado = 0;


calcular.addEventListener('click', (e) =>{
    e.preventDefault();
    if(funcao.value == "exp"){
        resultado = 1 + parseInt(tempo.value);
        resultado_p.innerText = resultado;  
        
    }else if(funcao.value == "quad"){
        resultado = 2 + parseInt(tempo.value);
        resultado_p.innerText = resultado;
    }else if(funcao.value == "line"){
        resultado = 3 + parseInt(tempo.value);
        resultado_p.innerText = resultado;
    }
    
    
})