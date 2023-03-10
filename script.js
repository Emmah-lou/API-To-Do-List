
$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "https://fewd-todolist-api.onrender.com/tasks?api_key=129",
      dataType: "json",
      success: function(response, textStatus) {
        console.log(response);
      },
      error: function(request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
  });
  $.ajax({
    type: "POST",
    url: "https://fewd-todolist-api.onrender.com/tasks?api_key=130",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({
      task: {
        content: 'this is to test content',
        
        
        
      }
    }),
    success: function(response, textStatus) {
      console.log(response);
    },
    error: function(request, textStatus, errorMessage) {
      console.log(errorMessage, request, textStatus);
    }
  });
  
  
});

$('button').on('click', function(e) {
  //var taskContent = $('#newTodo').val();
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
      console.log(response);
    },
    error: function(request, textStatus, errorMessage) {
      console.log(errorMessage, request, textStatus);
    }
  });
});

// var addTask = function(event) {
//   var taskContent = $('#newTodo').val();
//   $.ajax({
//     type: "POST",
//     url: "https://fewd-todolist-api.onrender.com/tasks?api_key=130",
//     contentType: "application/json",
//     dataType: "json",
//     data: JSON.stringify({
//       task: {
//         content: 'test',
        
        
        
//       }
//     }),
//     success: function(response, textStatus) {
//       console.log(response);
//     },
//     error: function(request, textStatus, errorMessage) {
//       console.log(errorMessage, request, textStatus);
//     }
//   });

// };


// $(document).onload(function() {


// });
