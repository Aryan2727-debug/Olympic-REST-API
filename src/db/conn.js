const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect("mongodb://localhost:27017/olympics" , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connection successful!");
}).catch((err) => {
    console.log(err);
});