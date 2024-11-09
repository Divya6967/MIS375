// Display current date and time
    document.getElementById('today').textContent = new Date().toLocaleDateString();
document.getElementById('currentTime').textContent = new Date().toLocaleTimeString();
 
// Review button functionality
document.getElementById('reviewButton').addEventListener('click', function() {
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const dob = document.getElementById('dob').value;
    const ssn = document.getElementById('ssn').value.replace(/(\d{3})(\d{2})(\d{4})/, '$1-**-****');
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const maritalStatus = document.getElementById('maritalStatus').value;
    const ageRange = document.getElementById('ageRange').value; // Changed to the correct ID
   
    const occupation = document.getElementById('occupation').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const allergies = document.getElementById('allergies').value;
    const vaccinated = document.querySelector('input[name="vaccinated"]:checked') ? document.querySelector('input[name="vaccinated"]:checked').value : '';
    const insurance = document.querySelector('input[name="insurance"]:checked') ? document.querySelector('input[name="insurance"]:checked').value : '';
 
    // Get health range slider value correctly
    const health = document.getElementById('myRange').value; // Changed to the correct ID
     const userID = document.getElementById('userID').value; // Getting User ID value directly

    const reviewContent = `
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Middle Initial:</strong> ${mname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Social Security:</strong> ${ssn}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Marital Status:</strong> ${maritalStatus}</p>
        <p><strong>Age Range:</strong> ${ageRange}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Zip Code:</strong> ${zip}</p>
        <p><strong>Allergies:</strong> ${allergies}</p>
        <p><strong>Vaccinated:</strong> ${vaccinated}</p>
        <p><strong>Insurance:</strong> ${insurance}</p>
        <p><strong>Health Rating:</strong> ${health}</p>
        <p><strong>User ID:</strong> ${userID}</p>
    `;
 
    document.getElementById('reviewDetails').innerHTML = reviewContent;
    document.getElementById('reviewModal').style.display = 'block';
});
 
// Close modal functionality
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('reviewModal').style.display = 'none';
});
 
// Confirm submission
document.getElementById('confirmSubmission').addEventListener('click', function() {
    document.getElementById('registrationForm').submit(); // Ensure the form ID is correct
});
 
// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('reviewModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('signupForm');

  // Input fields
  const fname = document.getElementById('fname');
  const mname = document.getElementById('mname');
  const lname = document.getElementById('lname');
  const ssn = document.getElementById('ssn');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const zip = document.getElementById('zip');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const userID = document.getElementById('userID');
  const addressLine1 = document.getElementById('addressLine1');
  const addressLine2 = document.getElementById('addressLine2');

  // Error fields
  const fnameError = document.getElementById('fnameError');
  const mnameError = document.getElementById('mnameError');
  const lnameError = document.getElementById('lnameError');
  const ssnError = document.getElementById('ssnError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');
  const zipError = document.getElementById('zipError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  const userIDError = document.getElementById('userIDError'); // Corrected to reference the right ID
  const addressLine1Error = document.getElementById('addressLine1Error');
const addressLine2Error = document.getElementById('addressLine2Error');

  // Validation patterns
  const patterns = {
    fname: /^[a-zA-Z' -]{1,30}$/, // Letters, apostrophes, dashes, 1-30 characters
    mname: /^[a-zA-Z]?$/, // 1 character only, or blank
    lname: /^[a-zA-Z' -2-5]{1,30}$/, // Letters, apostrophes, numbers 2 to 5, and dashes
    ssn: /^\d{3}-\d{2}-\d{4}$/, // XXX-XX-XXXX format
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Standard email
    phone: /^\d{3}-\d{3}-\d{4}$/, // 000-000-0000 format
    zip: /^\d{5}(-\d{4})?$/,
    userID: /^[a-zA-Z][a-zA-Z0-9_-]{4,29}$/, // Desired User ID regex
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()\-+=\/><.,`~])[A-Za-z\d!@#%^&*()\-+=\/><.,`~]{8,}$/, // Password regex
    addressLine1: /^.{2,30}$/, // 2 to 30 characters
    addressLine2: /^.{2,30}$/ // 2 to 30 characters (optional if provided)

  };

  // Real-time validation functions
  function validateFname() {
    if (patterns.fname.test(fname.value)) {
      fnameError.textContent = '';
      fname.classList.remove('error');
    } else {
      fnameError.textContent = 'First name must be 1-30 characters long and contain only letters, apostrophes, and dashes.';
      fname.classList.add('error');
    }
  }

  function validateMname() {
    if (patterns.mname.test(mname.value)) {
      mnameError.textContent = '';
      mname.classList.remove('error');
    } else {
      mnameError.textContent = 'Middle initial must be a single letter or blank.';
      mname.classList.add('error');
    }
  }

  function validateLname() {
    if (patterns.lname.test(lname.value)) {
      lnameError.textContent = '';
      lname.classList.remove('error');
    } else {
      lnameError.textContent = 'Last name must be 1-30 characters long and contain only letters, apostrophes, numbers (2 to 5), and dashes.';
      lname.classList.add('error');
    }
  }

  function validateSSN() {
    if (patterns.ssn.test(ssn.value)) {
      ssnError.textContent = '';
      ssn.classList.remove('error');
    } else {
      ssnError.textContent = 'SSN must be in the format XXX-XX-XXXX.';
      ssn.classList.add('error');
    }
  }

  function validatePhone() {
    if (patterns.phone.test(phone.value)) {
      phoneError.textContent = '';
      phone.classList.remove('error');
    } else {
      phoneError.textContent = 'Phone number must be in the format 000-000-0000.';
      phone.classList.add('error');
    }
  }

  function validateEmail() {
    if (patterns.email.test(email.value)) {
      emailError.textContent = '';
      email.classList.remove('error');
    } else {
      emailError.textContent = 'Please enter a valid email address.';
      email.classList.add('error');
    }
  }

  function validatePassword() {
    if (patterns.password.test(password.value)) {
      passwordError.textContent = '';
      password.classList.remove('error');
    } else {
      passwordError.textContent = 'Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.';
      password.classList.add('error');
    }
  }

  function validateConfirmPassword() {
    if (password.value === confirmPassword.value && confirmPassword.value !== '') {
      confirmPasswordError.textContent = '';
      confirmPassword.classList.remove('error');
    } else {
      confirmPasswordError.textContent = 'Passwords do not match.';
      confirmPassword.classList.add('error');
    }
  }

  function validateUserID() {
    if (patterns.userID.test(userID.value)) {
      userIDError.textContent = '';
      userID.classList.remove('error');
    } else {
      userIDError.textContent = 'User ID must start with a letter and be 5 to 30 characters long. Only letters, numbers, underscores, and dashes are allowed.';
      userID.classList.add('error');
    }
  }
  function validatezip() {
    if (patterns.zip.test(zip.value)) {
      zipError.textContent = '';
      zip.classList.remove('error');
    } else {
      zipError.textContent = 'Please enter a valid zip code (e.g., 77002 or 77002-1234)';
      zip.classList.add('error');
    }
  }
  function validateAddressLines() {
  // Address Line 1 validation
  if (addressLine1.value.length < 2 || addressLine1.value.length > 30) {
    addressLine1Error.textContent = 'Address Line 1 must be between 2 and 30 characters.';
    addressLine1.classList.add('error');
  } else {
    addressLine1Error.textContent = '';
    addressLine1.classList.remove('error');
  }

  // Address Line 2 validation (optional)
  if (addressLine2.value.length > 0 && (addressLine2.value.length < 2 || addressLine2.value.length > 30)) {
    addressLine2Error.textContent = 'Address Line 2 must be between 2 and 30 characters if provided.';
    addressLine2.classList.add('error');
  } else {
    addressLine2Error.textContent = '';
    addressLine2.classList.remove('error');
  }
}

  // Add event listeners for real-time validation
  fname.addEventListener('input', validateFname);
  mname.addEventListener('input', validateMname);
  lname.addEventListener('input', validateLname);
  ssn.addEventListener('input', validateSSN);
  phone.addEventListener('input', validatePhone);
  email.addEventListener('input', validateEmail);
  zip.addEventListener('input', validatezip);
  userID.addEventListener('input', validateUserID); // UserID validation
  password.addEventListener('input', validatePassword);
  confirmPassword.addEventListener('input', validateConfirmPassword);
  addressLine1.addEventListener('input', validateAddressLines);
  addressLine2.addEventListener('input', validateAddressLines);
  

  // Final form submission validation
  form.addEventListener('submit', (e) => {
    validateFname();
    validateMname();
    validateLname();
    validateSSN();
    validatePhone();
    validateEmail();
    validatezip();
    validateUserID(); 
    validatePassword();
    validateConfirmPassword();
    validateAddressLine1();
    validateAddressLine2();

    if (
      !patterns.fname.test(fname.value) ||
      !patterns.mname.test(mname.value) ||
      !patterns.lname.test(lname.value) ||
      !patterns.ssn.test(ssn.value) ||
      !patterns.phone.test(phone.value) ||
      !patterns.email.test(email.value) ||
      !patterns.zip.test(zip.value) ||
      !patterns.userID.test(userID.value) || 
      !patterns.password.test(password.value) ||
      password.value !== confirmPassword.value ||
      !patterns.addressLine1.test(addressLine1.value) ||
      !patterns.addressLine2.test(addressLine2.value)

    ) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
  });
});

// Slider functionality
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

// Update age value
function updateAgeValue() {
    const slider = document.getElementById("ageRange");
    const output = document.getElementById("ageValue");
    output.innerHTML = slider.value; // Update displayed value
}
