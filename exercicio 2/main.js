
form =  document.querySelector('.form-validar')
campA = document.querySelector('.camp-a')
campB =  document.querySelector('.camp-b')



 const validar = function validaCampo(){
    if(parseFloat(campB.value) > parseFloat( campA.value)){
        return true;
    }else{
        return false;
    }
}




form.addEventListener('input', function(e){
    formEValido = validar();

    if(formEValido){
        document.querySelector('.message').innerHTML = 'Campo Válido'
        document.querySelector('.message').style.backgroundColor = 'chartreuse ' 
        document.querySelector('p').style.display = 'block'
    }else{
        document.querySelector('.message').innerHTML = 'Campo Inválido'
        document.querySelector('p').style.backgroundColor='red'
        document.querySelector('p').style.display = 'block'
    }
})