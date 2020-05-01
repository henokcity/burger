// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    //Click event for adding a burger.
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //Grab burger name from form field.
        //When user submits burger name, set devoured state to false.
        var newBurger = {
        burger_name: $("#burgerToGo").val().trim(),
        devoured: 0
        };

        // Send the POST request using ajax.
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
      );
    });
    
});