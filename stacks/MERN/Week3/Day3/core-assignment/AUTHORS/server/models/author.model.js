const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const AuthorSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true,'Name is required'],
        minlength : [3, "{PATH} must have at least 3 chars, but you entered {VALUE}"]
    } ,

    books : [{
        title:{
            type :  String,
            required : true ,
        },
        numberOfPages : {
            type: Number,
            required : true,
        }

    }]
}, { timestamps: true }
)



const Author = mongoose.model("author", AuthorSchema);
module.exports = Author;