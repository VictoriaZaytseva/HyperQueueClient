//Temporary session Id is here
//TODO: implement a normal play session for this
var sessionId = ""

$(document).ready(function () {

  $("#consume-button").on("click", function () {
    console.log($("#topic-consumer").val())
    var url = $("#server-url").val() + $("#topic-consumer").val()

    console.log("sessionid" + sessionId)
      $.ajax({
        type: "GET",
        headers: {"Session": sessionId},
        url: url,
        success: function(data, status, xhr){
                console.log(xhr)
                if(sessionId === ""){
                    sessionId = data.sessionId
                }
                console.log(data)},
        failure: function(errMsg) {
                console.log(errMsg)
        }
      });
  })

  $("#produce-button").on("click", function () {
    var url = $("#server-url").val() + $("#topic-producer").val()
    var eventData = JSON.stringify({"name": $("#event-name").val(), "description": $("#event-description").val()})
    $.ajax({
        type: "POST",
        url: url,
        data: eventData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
            success: function(data){
        console.log(data)},
        failure: function(errMsg) {
            console.log(errMsg)
        }
    });
  })
})