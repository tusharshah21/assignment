const mongoose = require('mongoose');
const express = require('express');
const app = express();
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    usernames:String,
    password:String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    usernames: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);


app.listen(3000);
console.log('Server started on port 3000' + Date());
module.exports = {
    Admin,
    User,
    Course
}