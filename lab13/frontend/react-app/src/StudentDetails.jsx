import React, { useState } from 'react';

function StudentDetails() {
  const [formData, setFormData] = useState({
    name: '',
    class:'',
    Rollno: '',
    subjects: [
      { name: 'Cloud computing', marks: '' },
      { name: 'Internet Technologies', marks: '' },
      { name: 'UI/UX', marks: '' },
      { name: 'Full Stack', marks: '' },
    ],
  });

  const handleChange = (e, index) => {
    if (index !== undefined) {
      const newSubjects = [...formData.subjects];
 newSubjects[index].marks = e.target.value; // Always update marks for subjects
      setFormData({ ...formData, subjects: newSubjects });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.class || !formData.Rollno) {
      alert('Please fill in all student details.');
      return;
    }
    for (const subject of formData.subjects) {
      if (subject.marks === '' || isNaN(subject.marks)) {
        alert(`Please enter valid marks for ${subject.name}.`);
        return;
      }
    }

    
    console.log('Submitted Student Data:', formData);
    alert('Student details submitted successfully!');
 // Optionally clear the form or give feedback
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Student Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="class" className="form-label">Class</label>
          <input type="text" className="form-control" id="class" name="class" value={formData.class} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="Rollno" className="form-label">Roll No.</label>
          <input type="text" className="form-control" id="Rollno" name="Rollno" value={formData.Rollno} onChange={handleChange} />
        </div>
        <h3>Marks</h3>
        {formData.subjects.map((subject, index) => (
          <div className="mb-3" key={index}>
            <label htmlFor={`marks-${index}`} className="form-label">{subject.name}</label>
            <input type="number" className="form-control" id={`marks-${index}`} name="marks" value={subject.marks} onChange={(e) => handleChange(e, index)} />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default StudentDetails;