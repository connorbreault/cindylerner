$(document).ready(function () {

    // GET INVOLVED BUTTONS
    $("#topButtonDesktopIndex").on("click", function () {
        let email = $("#topEmailDesktopIndex").val()
        let zip = $("#topZipDesktopIndex").val()
        addVolunteer(email, zip)
    })
    $("#topButtonResponsiveIndex").on("click", function () {
        let email = $("#topEmailResponsiveIndex").val()
        let zip = $("#topZipResponsiveIndex").val()
        addVolunteer(email, zip)
    })
    $("#bottomInvolveButton").on("click", function () {
        let email = $("#bottomInvolveEmail").val()
        let zip = $("#bottomInvolveZip").val()
        addVolunteer(email, zip)
    })

    // ADD VOLUNTEER TO FIREBASE
    function addVolunteer(email, zip) {
        if (email === "" | zip === "") {
            alert("Please fill out both inputs")
        } else {
            let newVolunteer = {
                email: email,
                zip: zip
            }
            // Add to DB
        }
    }
});