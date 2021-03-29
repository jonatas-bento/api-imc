function calcular(){
    let imc = (document.querySelector('#quilos').value) / 
    ((document.querySelector('#metros').value) * 
    (document.querySelector('#metros').value));
    
    document.querySelector('.result_imc').innerText = imc.toFixed(2);
}

function limpar(){
    document.querySelector('#quilos').value = '';
    document.querySelector('#metros').value = '';
    document.querySelector('.result_imc').innerHTML = clearImmediate;
}