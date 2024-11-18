// Toggle between ft/in and cm inputs
const switchToCmButton = document.getElementById('switch-to-cm');
const heightFtIn = document.getElementById('height-ft-in');
const heightCm = document.getElementById('height-cm');

switchToCmButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page reload
    if (heightFtIn.classList.contains('hidden')) {
        // Switch to ft/in
        heightFtIn.classList.remove('hidden');
        heightCm.classList.add('hidden');
        switchToCmButton.textContent = 'Switch to cm';
    } else {
        // Switch to cm
        heightFtIn.classList.add('hidden');
        heightCm.classList.remove('hidden');
        switchToCmButton.textContent = 'Switch to ft/in';
    }
});

// Calculate BMI based on the current input type
document.getElementById('calc_but').addEventListener('click', () => {
    const ft = parseFloat(document.getElementById('ft').value) || 0;
    const inches = parseFloat(document.getElementById('in').value) || 0;
    const cm = parseFloat(document.getElementById('cm').value) || 0;
    const weight = parseFloat(document.getElementById('weight').value) || 0;

    let heightInMeters = 0;

    if (!heightFtIn.classList.contains('hidden')) {
        // Calculate height in meters from ft and in
        heightInMeters = ((ft * 12) + inches) * 0.0254;
    } else if (!heightCm.classList.contains('hidden')) {
        // Calculate height in meters from cm
        heightInMeters = cm / 100;
    }

    if (heightInMeters > 0 && weight > 0) {
        // Calculate BMI
        const bmi = weight / (heightInMeters * heightInMeters);
        updateBMIBar(bmi.toFixed(1));
    } else {
        alert('Please enter valid height and weight values.');
    }
});

function updateBMIBar(bmi) {
    const bmiIndicator = document.getElementById('bmi-indicator');
    const bmiResult = document.getElementById('bmi-result');
    const bmiRanges = {
        underweight: 18.5,
        healthy: 24.9,
        overweight: 29.9,
        obese: 40
    };

    // Map BMI to bar position
    const position = ((bmi - 10) / (40 - 10)) * 100; // Normalize to 10-40 range
    bmiIndicator.style.left = `${position}%`;

    // Determine category and update text
    let category = '';
    if (bmi < bmiRanges.underweight) {
        category = 'Underweight';
    } else if (bmi <= bmiRanges.healthy) {
        category = 'Healthy';
    } else if (bmi <= bmiRanges.overweight) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    bmiResult.textContent = `Your BMI: ${bmi} (${category})`;
}
