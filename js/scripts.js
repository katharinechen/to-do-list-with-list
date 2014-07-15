$(document).ready(function(){
  $("form#task").submit(function(event){
    event.preventDefault();

    var inputtedList = $("input#list-name").val();
    var inputtedTask = $("input#task-name").val();
    var inputtedDate = $("input#due-date").val();
    var list = { listName: inputtedList, task: [] };
    var task = { name: inputtedTask, date: inputtedDate };


    if (inputtedTask != "") {
      $("tbody.tasks").append("<tr>" + "<td class='tasks'>" + task.name + "</td>" + "<td class='due'>" + task.date + "</td>" + "<td>" + "<input type='checkbox' class='checkbox'>" + "</td>" + "</tr>");
    } else {
      alert("Please enter a task and a due date!");
    }


    $("input#task-name").val("");
    $("input#due-date").val("");

    $("input.checkbox").click(function() {
      $(this).closest("tr").empty();
    });
  });

  $("button#clear").click(function(){
    $("tbody.tasks").empty();
  });

});
