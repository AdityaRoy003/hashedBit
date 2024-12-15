// Input data
const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Function to calculate average scores
function calculateAverages(students) {
    const averages = {};

    // Iterate over each student
    for (const student in students) {
        const scores = Object.values(students[student]); // Get the scores as an array
        const total = scores.reduce((acc, score) => acc + score, 0); // Sum the scores
        const average = total / scores.length; // Calculate the average
        averages[student] = { average: average }; // Store the average in the result object
    }

    return averages;
}

// Calculate averages
const result = calculateAverages(students);

// Output the result
console.log(result);