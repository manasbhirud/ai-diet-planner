// Function to update the height value in the slider
function updateHeightValue() {
    let height = document.getElementById("height").value;
    document.getElementById("heightValue").innerText = height + " cm";
}

// Function to update the weight value in the slider
function updateWeightValue() {
    let weight = document.getElementById("weight").value;
    document.getElementById("weightValue").innerText = weight + " kg";
}

// Function to go to the next step
function nextStep(currentStepId, nextStepId) {
    document.getElementById(currentStepId).style.display = 'none';
    document.getElementById(nextStepId).style.display = 'block';

    // Update progress bar
    let progress = 0;
    if (nextStepId === 'step2') {
        progress = 33;
    } else if (nextStepId === 'step3') {
        progress = 66;
    }
    document.getElementById("progressBar").style.width = progress + "%";
}

// Function to submit the form
function submitForm() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let age = document.getElementById("age").value;
    let activity = document.getElementById("activity").value;
    let diet = document.getElementById("diet").value;

    // console.log(`Height: ${height} cm, Weight: ${weight} kg, Age: ${age}, Activity: ${activity}, Diet: ${diet}`);
    // alert("Form submitted! Check the console for the collected data.");
    window.location.href = 'home.html';
}
