
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/ProductSchema", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connecting"))
    .catch(err => console.log("error", err));