const textContainer = document.getElementById('text-container');
const colorBox = document.getElementById('colorbox');
const colorChangeButton = document.getElementById('colorchange');
const fontSizeSlider = document.getElementById('fontsize');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const boldButton = document.getElementById('bold');
const fontFamilySelect = document.getElementById('list');
const getStyleButton = document.getElementById('getstyle');
const cssPropsParagraph = document.getElementById('css-props');

// Change text color
colorChangeButton.addEventListener('click', () => {
    const color = colorBox.value;
    textContainer.style.color = color;
});

// Change font size
fontSizeSlider.addEventListener('input', () => {
    const fontSize = fontSizeSlider.value + 'px';
    textContainer.style.fontSize = fontSize;
});

// Toggle italic style
italicButton.addEventListener('click', () => {
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

// Toggle underline style
underlineButton.addEventListener('click', () => {
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

// Toggle bold style
boldButton.addEventListener('click', () => {
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// Change font family
fontFamilySelect.addEventListener('change', () => {
    const fontFamily = fontFamilySelect.value;
    textContainer.style.fontFamily = fontFamily;
});

// Get CSS properties
getStyleButton.addEventListener('click', () => {
    const color = textContainer.style.color || 'inherit';
    const fontSize = textContainer.style.fontSize || 'inherit';
    const fontStyle = textContainer.style.fontStyle || 'normal';
    const fontWeight = textContainer.style.fontWeight || 'normal';
    const textDecoration = textContainer.style.textDecoration || 'none';
    const fontFamily = textContainer.style.fontFamily || 'inherit';

    cssPropsParagraph.textContent = `color: ${color}; font-size: ${fontSize}; font-style: ${fontStyle}; font-weight: ${fontWeight}; text-decoration: ${textDecoration}; font-family: ${fontFamily};`;
});