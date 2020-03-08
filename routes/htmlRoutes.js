module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });
    app.get("/meet_Cindy", function (req, res) {
        res.render("meet_Cindy");
    });


    app.get("/priorities", function (req, res) {
        res.render("priorities");
    });
    app.get("/traffic", function (req, res) {
        res.render("traffic");
    });
    app.get("/flooding", function (req, res) {
        res.render("flooding");
    });
    app.get("/water", function (req, res) {
        res.render("water");
    });
    app.get("/leadership", function (req, res) {
        res.render("leadership");
    });


    app.get("/in_the_media", function (req, res) {
        res.render("in_the_media");
    });
    app.get("/south_florida_leadership", function (req, res) {
        res.render("south_florida_leadership");
    });
    app.get("/exalcaldesa", function (req, res) {
        res.render("exalcaldesa");
    });
    app.get("/mammoth_funding", function (req, res) {
        res.render("mammoth_funding");
    });
    app.get("/press_release", function (req, res) {
        res.render("press_release");
    });


    app.get("/privacy_policy", function (req, res) {
        res.render("privacy_policy");
    });
    app.get("/contact", function (req, res) {
        res.render("contact");
    });
    app.get("/endorsements", function (req, res) {
        res.render("endorsements");
    });
    app.get("/get_involved", function (req, res) {
        res.render("get_involved");
    });
    app.get("/district", function (req, res) {
        res.render("district");
    });


    app.get("/donate", function (req, res) {
        res.render("donate");
    });
    app.get("/volunteer", function (req, res) {
        res.render("volunteer");
    });

    // app.get("*", function (req, res) {
    //     res.render("404");
    // });
};