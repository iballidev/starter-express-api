/* GET 'index' page */
const index = (req, res) => {
    res.render("index", { title: "About" });
  };
  module.exports = {
    index
  };
  