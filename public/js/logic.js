// INDEX GET INVOLVED BUTTONS
$("#topButtonDesktopIndex").on("click", function () {
    let newVolunteerEmail = $("#topEmailDesktopIndex").val()
    let newVolunteerZip = $("#topZipDesktopIndex").val()
    alert(newVolunteerEmail + newVolunteerZip)
})
$("#topButtonResponsiveIndex").on("click", function () {
    let newVolunteerEmail = $("#topEmailResponsiveIndex").val()
    let newVolunteerZip = $("#topZipResponsiveIndex").val()
    alert(newVolunteerEmail + newVolunteerZip)
})


$("#bottomInvolveButton").on("click", function () {
    let newVolunteerEmail = $("#bottomInvolveEmail").val()
    let newVolunteerZip = $("#bottomInvolveZip").val()
    alert(newVolunteerEmail + newVolunteerZip)
})