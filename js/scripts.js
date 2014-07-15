$(document).ready(function() {

  event.preventDefault();

  var masterList = [];

  $("form#new-list").submit(function(event) {
    event.preventDefault();
    var inputtedNewList = $("input#list-name").val();
    var list = { listName: inputtedNewList, tasks: [] };

    masterList.push(list);

    $(".task-lists").show();
    $("ul.lists").append("<li class='task-list'>" +
                        list.listName + "</li>");
    $("input#list-name").val("");

    $(".task-list").last().click(function() {
      var currentList = list;
      $("#individual-results h2").text(currentList.listName);
      $("#individual-results").show();

      $("form#new-task").submit(function(event) {

        var taskNew = $("input#task").val();

        currentList.tasks.push(taskNew);
        console.log(currentList);

        // currentList.each(function(task) {
        // $("#task-list").append("<li>" + task + "</li>");
        event.preventDefault();
      });

    });
  });
});


 //  $("form.new-task").submit(function(event){
 //    var inputtedTask = $("input#task-name").val();
 //    var task = { name: inputtedTask };
 //    // list.last.push(task);

 //    if (inputtedTask != "") {
 //      $("table").show();
 //      $("tbody.tasks").append("<tr>" + "<td class='tasks'>" + task.name + "</td>" + "<td class='due'>" + task.date + "</td>" + "<td>" + "<input type='checkbox' class='checkbox'>" + "</td>" + "</tr>");
 //    } else {
 //      alert("Please enter a task and a due date!");
 //    }

 //    $("input#task-name").val("");
 //     event.preventDefault();
 //  });
 // event.preventDefault();


// $("button#clear").click(function(){
//   $("tbody.tasks").empty();
// });

    // $("input.checkbox").click(function() {
    //   $(this).closest("tr").empty();
    // });
