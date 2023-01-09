import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
//import{ Stack, InputLabel, MenuItem, Select, Box } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/addstudent.css";

function EditStudent({ student, setStudent }) {
  const { index } = useParams();
  const selectedStudent = student[index];
  const [name, setName] = useState(selectedStudent.name);
  const [email, setEmail] = useState(selectedStudent.email);
  const [phone, setPhone] = useState(selectedStudent.phone);
  const [rank, setRank] = useState(selectedStudent.rank);
  const [id, setId] = useState(selectedStudent.id);
  const [course, setCourse] = useState(selectedStudent.course);
  const navigate = useNavigate();

  let handleEdit = () => {
    let newData = { name, email, phone, rank, id, course };
    let newArray = [...student];
    newArray.splice(index, 1, newData);
    setStudent(newArray);
    navigate("/allStudent");
    console.log(newData);
  };

  return (
    <div className="content">
      <h1>Edit Student</h1>
      <div className="subject">
        <FormControl className="form-container">
          <h3>Student Registration Form</h3>
          <TextField
            id="standard-name"
            label="Name"
            variant="standard"
            required
            value={name}
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="standard-email"
            label="Email"
            variant="standard"
            required
            value={email}
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="standard-phone"
            label="Phone"
            variant="standard"
            required
            defaultValue={selectedStudent.phone}
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setPhone(event.target.value)}
          />
          <TextField
            id="standard-rank"
            label="Rank"
            defaultValue={selectedStudent.rank}
            variant="standard"
            required
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setRank(event.target.value)}
          />
          <TextField
            id="standard-id"
            label="ID"
            defaultValue={selectedStudent.id}
            variant="standard"
            required
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setId(event.target.value)}
          />
          <TextField
            id="standard-course"
            label="Course"
            defaultValue={selectedStudent.course}
            variant="standard"
            required
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setCourse(event.target.value)}
          />

          <Button variant="outlined" onClick={handleEdit}>
            {/* //   const newStudent = {
            //     name: name,
            //     email: email,
            //     phone: phone,
            //     rank: rank,
            //     id: id,
            //     course: course,
            //   };

            //   setStudent([...student, newStudent]);
            //   navigate("/allStudent");
            // }}> */}
            Submit
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default EditStudent;
