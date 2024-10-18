const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

const filterAndAddscore = students.filter(student => student.score > 50).map(student => student.score * 1.1).reduce((acc,cur) => acc + cur,0)
const results = `Total score is ${filterAndAddscore}`
console.log(results)
