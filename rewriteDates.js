const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/curriculumData.ts');
let code = fs.readFileSync(filePath, 'utf-8');

// We will use a regex to replace `num: 1,\n    phase: "phase1",\n    label: "Game design fundamentals",\n    date: "Apr 7 - Apr 13",` securely.
let weekMatchRegex = /num:\s*(\d+),[\s\S]*?date:\s*"(.*?)"/g;

code = code.replace(weekMatchRegex, (match, numString, oldDateString) => {
  const num = parseInt(numString);
  const startDay = ((num - 1) * 7) + 1;
  const endDay = num * 7;
  const newDateString = `Day ${startDay} - Day ${endDay}`;
  
  // Replace only the date portion within the matched block to avoid corrupting it
  return match.replace(`date: "${oldDateString}"`, `date: "${newDateString}"`);
});

fs.writeFileSync(filePath, code);
console.log("Successfully updated curriculumData.ts to use Day intervals instead of hardcoded dates.");
