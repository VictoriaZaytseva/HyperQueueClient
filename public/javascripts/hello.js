

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
$(document).ready(function () {

  $("#consume-button").on("click", function () {
    console.log($("#topic-consumer").val())
    var url = $("#topic-consumer").val()
    var sessionId = getCookie("PLAY_SESSION")
    console.log("sessionid" + sessionId)
      $.ajax({
        type: "GET",
        headers: {"Session": sessionId},
        url: "http://localhost:9000/"+url,
            // The key needs to match your method's input parameter (case-sensitive).
        success: function(data){
                console.log(data)
                alert(data);},
        failure: function(errMsg) {
                console.log(errMsg)
                alert(errMsg);
        }
      });
  })

  $("#produce-button").on("click", function () {
    console.log($("#topic-producer").val())
    var url = $("#topic-producer").val()
    var eventData = JSON.stringify({"name": $("#event-name").val(), "description": $("#event-description").val()})
    $.ajax({
        type: "POST",
        url: "http://localhost:9000/"+url,
        // The key needs to match your method's input parameter (case-sensitive).
        data: eventData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
        console.log(data)
        alert(data);},
        failure: function(errMsg) {
        console.log(errMsg)
            alert(errMsg);
        }
    });
  })
})