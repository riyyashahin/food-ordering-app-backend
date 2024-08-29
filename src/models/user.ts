import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    addressLine1: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
});

const User = mongoose.model("User", userSchema);
export default User;

//properties of the schema
//auth0Id - Id of the user , to link the user to the database
// last 2 lines - for the database to interact

// next step - create the endpoint that frontend is going to call inorder to create the user