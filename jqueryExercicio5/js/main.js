$(document).ready(function(){

    $('#telefone').mask('(00 00000-0000)', {placeholder: '(00 00000-0000)'})
    $('#cpf').mask('000.000.000-00', {placeholder: '000.000.000-00'})
    $('#cep').mask('00000-000', {placeholder: '00000-000'})

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true,
            },
            telefone:{
                required:true,
            },
            cpf:{
                required:true,
            },
            cep:{
                required:true,
            },
            endereco:{
                required:true,
            }
        },
        messages:{
            nome:'Insira seu nome completo'
           
        },
        submitHandler: function(form){
            form.submit();
            
        }
    });
})