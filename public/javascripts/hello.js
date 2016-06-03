

if (window.console) {
  console.log("Welcome to your Play application's JavaScript!");
}

$(document).ready(function () {

  $("#consume-button").on("click", function () {
    console.log($("#topic-consumer").val())
    console.log("consuming!")
  })

  $("#produce-button").on("click", function () {

    console.log($("#topic-producer").val())

    var data = JSON.stringify({"name": $("#event-name").val(), "description": $("#event-description").val()})
    console.log(data)
  })

})