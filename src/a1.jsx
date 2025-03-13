import React, { useState } from 'react';

function ValidatedForm() {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let formErrors = {};

    // Name validation
    if (!name.trim()) {
      formErrors.name = 'Name is required';
    }

    // Email validation
    if (!email.trim()) {
      formErrors.email = 'Email is required';
    } 

    // Password validation
    if (!password) {
      formErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    return formErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    // If no errors, show alert
    if (Object.keys(formErrors).length === 0) {
      alert('Form submitted successfully!');

      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div style={{ margin: '30px', maxWidth: '400px' }}>
      <h2>React Form with Validations</h2>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.name && (
            <p style={{ color: 'red', margin: '5px 0' }}>{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.email && (
            <p style={{ color: 'red', margin: '5px 0' }}>{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.password && (
            <p style={{ color: 'red', margin: '5px 0' }}>{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ValidatedForm;
