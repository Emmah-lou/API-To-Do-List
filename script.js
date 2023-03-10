$(document).ready(function() {
  fetchTodos();
  
});

//delet todo button
$(document).on('click', '.delete', function(e) {
  e.preventDefault();
  var id = $(this).data().id;
  console.log(id);
  
  $.ajax({
    type: "DELETE",
    url: `https://fewd-todolist-api.onrender.com/tasks/${id}?api_key=130`,
    success: function(response, textStatus) {
      console.log(response);
      $(this).closest('.todo-item').remove();
      
    },
    error: function(request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
  setTimeout(fetchTodos, 500);
});


// $('button').on('click', ".active", function() {
//   var id = $('.delete').data().id;
//   console.log(id);
//   setTimeout(fetchTodos, 500);
// });

$('body').on('click', '.active', function() {
  var id = $(this).data().id;
  console.log(id);
  $.ajax({
    type: "PUT",
    url: `https://fewd-todolist-api.onrender.com/tasks/${id}/mark_complete?api_key=130`,
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({
      task: {
        completed: true,
      }
    }),
    success: function(response, textStatus) {
      console.log(response);
    },
    error: function(request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
  setTimeout(fetchTodos, 500);
});
// $(document).on('click', '.active', function(e) {
//   e.preventDefault();
//   var thisId = $('.delete').data().id;
//   console.log(id);

//   setTimeout(fetchTodos, 500);
// });

$('#add-btn').on('click', function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "https://fewd-todolist-api.onrender.com/tasks?api_key=130",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({
      task: {
        content: $('input').val(),
        
      }
    }),
    success: function(response, textStatus) {
      console.log(response.task.content);
     
    },
    error: function(request, textStatus, errorMessage) {
      console.log(errorMessage, request, textStatus);
    }
  });
  $('input').val('');
  setTimeout(fetchTodos, 500);
});


 
var fetchTodos = function() {
  $('#todo-container').empty();
  $.ajax({
    type: "GET",
    url: "https://fewd-todolist-api.onrender.com/tasks?api_key=130",
    dataType: "json",
    success: function(response, textStatus) {
      console.log(response);
      for (let i = 0; i < response.tasks.length; i++) {
        var data = response.tasks[i].id;
        $('#todo-container').append(
          `<div class="todo-item"><button data-id="${data}" class="active">Mark Complete</button><li>${response.tasks[i].content}</li><button data-id="${data}"class="delete">Delete</button></div>`
        );
      }
    },
    error: function(request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
    
};

//!!!!!!! 
//!!!!!!!be careful with this function, it will delete all your todos
//!!!!!!!

$('#dont-press').on('click', function() {
  clearTodos();
});

let clearTodos = function() {
  for (let i = 1900; i < 2000; i++) {
    $.ajax({
      type: "DELETE",
      url: `https://fewd-todolist-api.onrender.com/tasks/${i}?api_key=130`,
      success: function(response, textStatus) {
        console.log(response);
      },
      error: function(request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });
  } 
};


