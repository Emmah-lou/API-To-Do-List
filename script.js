$(document).ready(function() {
  fetchTodos();
  
});

$(document).on('click', '.delete', function() {
  var id = $(this).data('id');
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
});




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
   
      $('#todo-container').append(
        `<div class="todo-item">
        <li>${response.task.content}</li><button data-id="${response.task.id}"  class="delete">Delete</button>
        </div>`);
      
    },
    error: function(request, textStatus, errorMessage) {
      console.log(errorMessage, request, textStatus);
    }
  });
  $('input').val('');
  
});


 
var fetchTodos = function() {
  $('#todo-container').empty();
  $.ajax({
    type: "GET",
    url: "https://fewd-todolist-api.onrender.com/tasks?api_key=130",
    dataType: "json",
    success: function(response, textStatus) {
      console.log(response);
      //return response;
      for (let i = 0; i < response.tasks.length; i++) {
        var data = response.tasks[i].id;
        $('#todo-container').append(
          `<div><li>${response.tasks[i].content}</li><button data-id="${data}"   class="delete">Delete</button></div>`
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
  for (let i = 1750; i < 1900; i++) {
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




// function fetchTasks() {
//   $.ajax({
//     type: 'GET',
//     url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=112',
//     dataType: 'json',
//     success: function (response, textStatus) {
//       console.log(response);
//       $('#all-tasks-container').empty();
//       $('#completed-tasks-container').empty(); 
//       for (var i = 0; i < response.tasks.length; i++) {
//         var task = response.tasks[i];
//         var itemHtml = `
//           <div class="item ${task.completed ? 'completed' : 'active'}" data-id="${task.id}">
//             <div class="badge ${task.completed ? 'red' : 'green'}">${task.completed ? "Completed Tasks" : "All Tasks"}</div>
//             <input type="checkbox" id="myCheckbox${i}" ${task.completed ? 'checked' : ''} ${task.completed ? 'disabled' : ''}>
//             <label class="task" for="myCheckbox${i}">${task.content}</label>
//             ${task.completed ? '<button class="delete-button" data-task-id="' + task.id + '">Delete</button>' : '<button class="start-button" data-task-id="' + task.id + '">Start</button>'}
//           </div>
//         `;
//         if (task.completed) {
//           $('#completed-tasks-container').append(itemHtml);
//         } else {
//           $('#all-tasks-container').append(itemHtml);
//         }
//       }
//       switchContainers($('#navigation button.active').text().toLowerCase()); // call switchContainers with the currently active navigation button
//     },
//     error: function (request, textStatus, errorMessage) {
//       console.log(errorMessage);
//     }
//   });
// }

// $(document).on('click', '.delete-button', function() {
//   var taskId = $(this).data('task-id');
//   var deleteUrl = `https://fewd-todolist-api.onrender.com/tasks/${taskId}?api_key=112`;
//   var $item = $(this).closest('.item');
  
//   $.ajax({
//     type: 'DELETE',
//     url: deleteUrl,
//     success: function (response, textStatus) {
//       console.log(response);
//       $item.remove();
//     },
//     error: function (request, textStatus, errorMessage) {
//       console.log(errorMessage);
//     }
//   });
// });