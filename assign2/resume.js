// Function to update the preview in real-time [cite: 60]
const form = document.getElementById('resume-form');

form.addEventListener('input', () => {
    document.getElementById('displayName').innerText = document.getElementById('nameInput').value || "Your Name";
    document.getElementById('displayEmail').innerText = document.getElementById('emailInput').value || "email@example.com";
    document.getElementById('displayPhone').innerText = document.getElementById('phoneInput').value || "";
    document.getElementById('displaySummary').innerText = document.getElementById('summaryInput').value || "";
});

// Function to add multiple rows for Education 
function addEducation() {
    const eduList = document.getElementById('edu-list');
    const displayEdu = document.getElementById('displayEdu');
    
    // Create input for the form
    const newEduInput = document.createElement('input');
    newEduInput.type = 'text';
    newEduInput.placeholder = 'e.g., B.Tech in CS - 2025';
    newEduInput.className = 'edu-entry';
    
    // Create corresponding display element for the preview
    const newEduDisplay = document.createElement('p');
    newEduDisplay.className = 'preview-edu-item';
    
    // Update preview when this specific field changes [cite: 60]
    newEduInput.addEventListener('input', () => {
        newEduDisplay.innerText = newEduInput.value;
    });

    eduList.appendChild(newEduInput);
    displayEdu.appendChild(newEduDisplay);
}

// Function to reset form and preview [cite: 76]
function resetForm() {
    form.reset();
    document.getElementById('displayName').innerText = "Your Name";
    document.getElementById('displayEmail').innerText = "email@example.com";
    document.getElementById('displayPhone').innerText = "";
    document.getElementById('displaySummary').innerText = "";
    document.getElementById('edu-list').innerHTML = "";
    document.getElementById('displayEdu').innerHTML = "";
}