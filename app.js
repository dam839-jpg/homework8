console.log("Hello World!");

// My variables
const fullName = "Devan Martin";
let hasDownloadedResume = true;
const downloadAlert = document.getElementById('resume-download');
const outputElement = document.getElementById('output-area');

// Resume download function. Only displays alert on first time clicking
downloadAlert.addEventListener('click', function() {
  if(hasDownloadedResume) {
    alert('Your resume is downloaded successfully!');
    hasDownloadedResume = false;
  }
});

// Creating and calling showGreeting() function
function showGreeting(name) {
  return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

let myName = "Devan Martin";
outputElement.textContent = showGreeting(myName);


// Days until deadline function
function daysUntilDeadline(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
  return Math.ceil(daysDifference);
}

let startDate = '2025-10-14';
let endDate = '2025-11-01';
console.log(daysUntilDeadline(startDate, endDate));

// Homework 8 code

// Accepting skills input and displaying the input on the webpage
const skillForm = document.getElementById("skill-form");
const skillInput = document.getElementById("skill");
const outputContainer = document.getElementById("output-container");

skillForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const skillText = skillInput.value; 
  const newParagraph = document.createElement('p'); 

  newParagraph.textContent = skillText;
  outputContainer.appendChild(newParagraph);

  skillInput.value = "";
});

// Implementing a loop for project listings
let projectTitle = ['Previous Project Portfolio', 'Older Project Portfolio', 'Ongoing Project'];
let projectDesc = ['This was my most recent project. It is also a portfolio about me.', 'This was an older portfolio I made about me.', 'The deadline for this project is November 1st, 2025.'];
let projectDeadline = ['September 1st', 'October 1st', 'November 1st'];


const projectsSection = document.getElementById('projects-section');


for (let i = 0; i < projectTitle.length; i++) {
  
  const title = projectTitle[i];
  const desc = projectDesc[i];
  const deadline = projectDeadline[i];

  
  const projectContainer = document.createElement('div');
  const titleElement = document.createElement('h3');
  const descElement = document.createElement('p');
  const deadlineElement = document.createElement('p');

  
  titleElement.textContent = title;
  descElement.textContent = desc;
  deadlineElement.textContent = 'Deadline: ' + deadline;

  
  projectContainer.appendChild(titleElement);
  projectContainer.appendChild(descElement);
  projectContainer.appendChild(deadlineElement);

  
  projectsSection.appendChild(projectContainer);
}


// Project status

const project1Deadline = new Date('2025-09-01');
const project2Deadline = new Date('2025-10-01');
const project3Deadline = new Date('2025-11-01');

const currentDate = new Date();


let project1Status = '';
let project2Status = '';
let project3Status = '';

if (project1Deadline > currentDate) {
  project1Status = 'Ongoing';
} else {
  project1Status = 'Completed';
}

if (project2Deadline > currentDate) {
  project2Status = 'Ongoing';
} else {
  project2Status = 'Completed';
}

if (project3Deadline > currentDate) {
  project3Status = 'Ongoing';
} else {
  project3Status = 'Completed';
}



const status1DisplayElement = document.getElementById('project1-status');
const status2DisplayElement = document.getElementById('project2-status');
const status3DisplayElement = document.getElementById('project3-status');

status1DisplayElement.textContent = project1Status;
status2DisplayElement.textContent = project2Status;
status3DisplayElement.textContent = project3Status;

// Resume download button click tracker
const buttonClickContainer = document.getElementById('button-click-container');
const resumeButton = document.getElementById('resume-download');
let resumeDownloads = 0;

buttonClickContainer.textContent = resumeDownloads;

resumeButton.addEventListener('click', function() {
  resumeDownloads++;
  buttonClickContainer.textContent = resumeDownloads;
});

// Tables of education and experience
const experience = [
  { role: "Student", class: "CS212", timeline: "August 25-December 12, 2025"}
];

const education = [
  { institution: "Northern Arizona University", description: "Pursuing a bachelor's degree in software engineering.", timeline: "2025-2028"},
  { institution: "Paradise Valley Community College", description: "Attended for my freshman year of college.", timeline:"2024-2025" },
  { institution: "Gateway Academy", description: "Attended this high school for my junior and senior years of high school.", timeline: "2022-2024" },
  { institution: "Cactus Shadows High School", description: "Attended for my freshman and sophomore years of high school.", timeline: "2020-2022" }
];

function createTable(data, containerId, titleText) {
  const container = document.getElementById(containerId);

  const title = document.createElement('h2');
  title.textContent = titleText;
  container.appendChild(title);

  const table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  const headerRow = document.createElement('tr');
  const keys = Object.keys(data[0]);

  keys.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    th.style.border = '1px solid black';
    th.style.padding = '4px';
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  data.forEach(item => {
    const row = document.createElement('tr');
    keys.forEach(key => {
      const td = document.createElement('td');
      td.textContent = item[key];
      td.style.border = '1px solid black';
      td.style.padding = '4px';
      row.appendChild(td);
    });
    table.appendChild(row);
  });

  container.appendChild(table);
}

// Create both tables
createTable(experience, 'experience-table', 'Experience');
createTable(education, 'education-table', 'Education');
