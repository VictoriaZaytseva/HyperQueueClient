if (window.console) {
  
  console.log("Welcome to your Play application's JavaScript!");
}
$(document).ready(function () {

  $("#consume-button").on("click", function () {
    console.log("consuming!")
  })

  $("#produce-button").on("click", function () {
    console.log("producing!")
  })

})