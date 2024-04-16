$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();

        const taskText = $('#taskInput').val().trim();

        if (taskText !== '') {
            const taskItem = $('<li>').text(taskText);
            $('#taskList').append(taskItem);
            $('#taskInput').val(''); // Limpa o campo de entrada
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});