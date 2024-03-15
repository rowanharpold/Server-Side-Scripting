const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json())

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
]
app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/api/courses", (req, res) => {
    res.send(courses)
});

// /api/courses/1
app.get("/api/courses/:id", (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("This course with the given ID was not found!!")
    res.send(course);
});

//https://youtu.be/pKd0Rpw7O48?t=2495

// app.get("/api/post/:year/:month", (req, res) => {
//     res.send(req.params);
// });


//adds a item
app.post("/api/courses", (req, res) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .required()
    });
    console.log(Joi);
    const result = schema.validate(req.body, schema);

    console.log(result)

    if (!req.body.name || req.body.name.length < 3){
        //400 bad request
        res.status(400).send("Name is required and should be minimum 3 characters.")
        return;
    }
    const course = {
        id: course.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
});

// PORT
const port = process.env.PORT || 3000
//makes the port / changes it
app.listen(port, () => console.log("Listenign on port "+port+"..."))


//(Cntrl + C) stop task
//(npm run serve) run it