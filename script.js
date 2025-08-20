// Simple, working script
document.addEventListener('DOMContentLoaded', function() {
    const loadingContainer = document.getElementById('loadingContainer');
    const mainForm = document.getElementById('mainForm');
    const box = document.querySelector('.box');
    
    // Show loading for 3 seconds
    setTimeout(() => {
        // Hide loading
        loadingContainer.style.display = 'none';
        // Show form
        mainForm.style.display = 'flex';
        
        // Expand form immediately to show content
        setTimeout(() => {
            box.classList.add('expanded');
        }, 100);
    }, 3000);
});

// Form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value);
    
    if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
    }
    
    if (interests.length === 0) {
        alert('Please select at least one design interest area.');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show success
    document.querySelector('.registrationBx').style.display = 'none';
    document.getElementById('successMessage').classList.add('show');
    
    console.log('Registration Data:', {
        name: name,
        email: email,
        interests: interests,
        timestamp: new Date().toISOString()
    });
    
    // Reset after 3 seconds
    setTimeout(() => {
        document.querySelector('.registrationBx').style.display = 'flex';
        document.getElementById('successMessage').classList.remove('show');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.querySelectorAll('input[name="interests"]').forEach(cb => cb.checked = false);
    }, 3000);
}