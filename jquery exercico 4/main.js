$(document).ready(function(){

    //tentando criar a loogica para adicionar tarefas
    $('form').on('submit', function(e){
        e.preventDefault();
        const task = $('#task').val()
      
    let novaLinha =   $(`
        <li style="font-size: 26px;">${task}</li>
        `).appendTo('ul')
      
        $('#task').val('')

        $(novaLinha).click(function(){
           novaLinha.css('text-decoration', 'line-through')
          })
    })

    

})