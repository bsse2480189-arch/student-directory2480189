
// Students: objects ki array (dummy data), har object ek student hai
const Students = [
  // pehla student object shuru
  {
    id: 1, // unique id (key banane ke kaam aati hai)
    name: 'Ali Khan', // student ka naam
    program: 'Computer Science', // degree program
    semester: 5, // semester number
    email: 'ali.khan@example.com', // email address
    phone: '0300-1234567' // phone number
  },
  // doosra student object
  {
    id: 2, // unique id
    name: 'Sara Ahmed', // naam
    program: 'Software Engineering', // program
    semester: 6, // semester
    email: 'sara.ahmed@example.com', // email
    phone: '0301-2345678' // phone
  },
  // teesra student object
  {
    id: 3, // unique id
    name: 'Ahmed Raza', // naam
    program: 'Information Technology', // program
    semester: 4, // semester
    email: 'ahmed.raza@example.com', // email
    phone: '0302-3456789' // phone
  },
  // chautha student object
  {
    id: 4, // unique id
    name: 'Ayesha Noor', // naam
    program: 'Computer Science', // program
    semester: 7, // semester
    email: 'ayesha.noor@example.com', // email
    phone: '0303-4567890' // phone
  }
// array khatam
];

// default export: doosri files mein "import students from ..." likh kar use kar sakte hain
export default Students;
