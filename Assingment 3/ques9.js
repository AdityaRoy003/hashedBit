function countWords(paragraph) {
    // Trim the paragraph to remove leading and trailing spaces
    // Split the paragraph by whitespace and filter out any empty strings
    const words = paragraph.trim().split(/\s+/).filter(word => word.length > 0);
    
    // Return the number of words
    return words.length;
}

// Example usage
const paragraph = "This is an example paragraph. It contains several words.";
console.log(countWords(paragraph)); // Output: 10

const emptyParagraph = "   ";
console.log(countWords(emptyParagraph)); // Output: 0

const singleWordParagraph = "Hello";
console.log(countWords(singleWordParagraph)); // Output: 1