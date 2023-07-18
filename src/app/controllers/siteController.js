class SiteController {
        index(req, res, next) {
                res.send("This is the database of Nguyen The Duong")
        }
}

module.exports = new SiteController();
