import { useState } from 'react';

function LoginForm() {
  // State variables to manage form inputs and validation errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    // Reset error message
    setError('');

    // Validate form fields
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // If valid, proceed with form submission (e.g., API call)
    alert('Login successful!');
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Handle input change
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Handle input change
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>} {/* Show error if any */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
