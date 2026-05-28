let students = [
  {
    name: "kumkum chauhan",
    dept: "CSE",
    college: "DGI",
    city: "Delhi",
  },

  {
    name: "aryan",
    dept: "ECE",
    college: "IIIT Allahabad",
    city: "Prayagraj",
  },

  {
    name: "kushagra aggrawal",
    dept: "CSE",
    college: "PESUniversity",
    city: "Bangalore",
  },

  {
    name: "akash kumar",
    dept: "CSE",
    college: "Parul University",
    city: "Noida",
  },

  {
    name: "tushar",
    dept: "CSE",
    college: "pse",
    city: "BLR",
  },

  {
    name: "arushi sonal",
    dept: "CSE",
    college: "Vishwakarma University",
    city: "pune",
  },

  {
    name: "esha jain",
    dept: "ECE",
    college: "Brecw",
    city: "Hyderabad",
  },

  {
    name: "priyanka",
    dept: "Diploma in computer science",
    college: "Sanjay Gandhi Polytechnic",
    city: "Ballari",
  },

  {
    name: "kushagra aggrawal",
    dept: "CSE",
    college: "PES University",
    city: "Bangalore",
  },

  {
    name: "jagrat gupta",
    dept: "AI",
    college: "Mahindra University",
    city: "Hyderabad",
  },

  {
    name: "pravin singh",
    dept: "CSE",
    college: "Parul University",
    city: "Vadodara",
  },

  {
    name: "om prakash sharma",
    dept: "MCA",
    college: "GEC",
    city: "BBSR",
  },
];

const displayStudent = (student) => {
  return `
  <tbody>
      <td>${student.name}</td>
      <td>${student.dept}</td>
      <td>${student.college}</td>
      <td>${student.city}</td>
    </tbody>
    `;
  
};

const studentUI = students.map((student) => displayStudent(student));

const studentsContainer = document.getElementById('Students')

studentsContainer.innerHTML = studentUI.join(" ")
