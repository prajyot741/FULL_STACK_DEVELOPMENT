const express = require('express');
const app = express();
const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on http://localhost:${PORT_NUMBER}`);
});
app.use("/",mainrouter);

app.use("/student", studentrouter);
app.use("/teacher", teacherrouter);
app.use("/subject", subjectrouter);

app.get("/api/ok", (req, res) => {
});

app.get("/api/ok", (req, res) => {
    res.send("welcome");
}
);

app.get("/student/get", (req, res) => {
    res.send("Student");
});

app.get("/teacher/get", (req, res) => {
    res.send("teacher");
});

app.get("/student/save", (req, res) => {
    res.send("Student");
});

app.get("/teacher/save", (req, res) => {
    res.send("teacher");
});

app.get("/subject/save", (req, res) => {
    res.send("subject");
});

