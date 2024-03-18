const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Implement admin signup logic
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

module.exports = router;