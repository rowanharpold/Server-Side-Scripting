const express = require('express');
const app = express();

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

//https://youtu.be/pKd0Rpw7O48?t=1813

// app.get("/api/post/:year/:month", (req, res) => {
//     res.send(req.params);
// });

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log("Listenign on port "+port+"..."))


//(Cntrl + C) stop task
//(npm run serve) run it