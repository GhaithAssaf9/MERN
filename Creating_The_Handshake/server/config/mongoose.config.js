const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/chatapp", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Establishing a connection'))
    .catch((err) => {
        console.log('error connecting to database'), err
    });