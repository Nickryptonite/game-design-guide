const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'curriculumData.ts');
let text = fs.readFileSync(filePath, 'utf-8');

// The original file used `dates: "Apr 7 - Apr 13"`, let's safely override it mathematically
let weekNum = 1;
text = text.replace(/"dates":\s*"(.*?)"/g, (match) => {
  const startDay = ((weekNum - 1) * 7) + 1;
  const endDay = weekNum * 7;
  const newDateString = `Day ${startDay} - Day ${endDay}`;
  weekNum++;
  return `"dates": "${newDateString}"`;
});

// Just in case it's not JSON formatted but JS formatted
weekNum = 1;
text = text.replace(/dates:\s*"(.*?)"/g, (match) => {
  const startDay = ((weekNum - 1) * 7) + 1;
  const endDay = weekNum * 7;
  const newDateString = `Day ${startDay} - Day ${endDay}`;
  weekNum++;
  return `dates: "${newDateString}"`;
});


fs.writeFileSync(filePath, text);
console.log('Successfully enforced Day 1 - Day 7 locally.');
