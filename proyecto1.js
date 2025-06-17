$(document).ready(function () {
    carregarTarefas()

    $('#addTarefaBtn').click(function () { 
        
        var tarefaText = $('#tarefaInput').val();
        
        if(tarefaText !== '' ) {
        addTarefa(tarefaText)
        salvarTarefas()
        $('#tarefaInput').val('');
        }
    });


    function addTarefa(text) {
    $('#tarefaList').append('<li><span>&times;</span>' + text + '</li>')
    }


    //marcar/desmarcar tarefa como concluida
    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
        salvarTarefas()
      })

      //remover tarefa
      $(document).on('click', 'span', function(e){
        e.stopPropagation();
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
            salvarTarefas();
        });
        
      });

      function salvarTarefas() {
        var tarefas = $('#tarefaList').html();
        localStorage.setItem('tarefas', tarefas);
      };

      function carregarTarefas() {
        var tarefas = localStorage.getItem('tarefas')

        if (tarefas) {
            $('#tarefaList').html(tarefas);
        }

      };
});