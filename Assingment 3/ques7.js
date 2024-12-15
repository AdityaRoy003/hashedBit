const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    const average = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
    return { name: student.name, average: Math.round(average) }; // Rounding the average to the nearest integer
});

console.log(output);