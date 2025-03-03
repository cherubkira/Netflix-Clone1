import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        // minlength: 3,
        // maxlength: 20,
        // trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6 ,
       
    },
    image:{
        type: String,
        default: "",
    },
    searchHistory:{
        type: Array,
        default: [],
    }
    // role: {
    //     type: String,
    //     enum: ["USER", "ADMIN"],
    //     default: "USER",
    // },
});

export const User = mongoose.model("User", userSchema);