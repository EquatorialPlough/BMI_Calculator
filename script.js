function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // Get result elements
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    
    // Check if inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values');
        return;
    }
    
    // Calculate BMI
    // Convert height from cm to m
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Display BMI value (rounded to 1 decimal place)
    bmiValue.textContent = bmi.toFixed(1);
    
    // Determine BMI category
    let category;
    if (bmi < 16) {
        category = 'Severely Underweight';
    } else if (bmi < 17) {
        category = 'Moderately Underweight';
    } else if (bmi < 18.5) {
        category = 'Mildly Underweight';
    } else if (bmi < 25) {
        category = 'Normal Weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else if (bmi < 35) {
        category = 'Obese Class I';
    } else if (bmi < 40) {
        category = 'Obese Class II';
    } else {
        category = 'Obese Class III';
    }
    
    // Display category and set color
    bmiCategory.textContent = category;
    
    // Color coding for categories
    let categoryColor;
    if (bmi < 18.5) {
        categoryColor = '#ff9800'; // Orange for underweight
    } else if (bmi < 25) {
        categoryColor = '#4caf50'; // Green for normal
    } else if (bmi < 30) {
        categoryColor = '#ff9800'; // Orange for overweight
    } else {
        categoryColor = '#f44336'; // Red for obese
    }
    
    bmiCategory.style.color = categoryColor;
} 