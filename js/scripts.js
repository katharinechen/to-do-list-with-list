$(document).ready(function() {

  event.preventDefault();

  var masterList = [];
  var currentList;

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
      currentList = list;
      var currentListName = list.listName;

      $("#individual-results h2").text(currentList.listName);

      $("#task-list").empty();
      currentList.tasks.forEach(function(task) {
        $("#task-list").append("<li>" + task + "</li>");
      });

      $("#individual-results").show();

    });
  });

  $("form#new-task").submit(function(event) {

    var taskNew = $("input#task").val();

    currentList.tasks.push(taskNew);

    $("#task-list").append("<li>" + taskNew + "</li>");
    $("input#task").val("");

    event.preventDefault();
  });
});


// $("button#clear").click(function(){
//   $("tbody.tasks").empty();
// });

    // $("input.checkbox").click(function() {
    //   $(this).closest("tr").empty();
    // });
