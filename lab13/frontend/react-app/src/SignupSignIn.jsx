import { useState } from 'react';

function SignupSignIn() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null); // Clear previous messages

    const endpoint = isLogin ? '/api/login' : '/api/signup';

    try {
      const response = await fetch(endpoint, {
        method: 'POST', // Both login and signup will use POST
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || (isLogin ? "Login failed" : "Signup failed"));
      } else {
        setMessage(data.message || (isLogin ? "Login successful!" : "Signup successful!"));
        setFormData({ username: '', password: '' }); // clear form on success
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container" style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem' }}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {/* Removed inline styles and added Bootstrap classes for better styling */}
        {/* The custom CSS in App.css for form-container, label, input, and button will still apply */}

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username">Username:</label><br />
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            placeholder="username"
            required
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="password"
            required
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>
        <div className="d-grid gap-2"> {/* Bootstrap class for grid layout and spacing */}
          <button
            type="submit"
            className="btn btn-primary" // Bootstrap primary button style
            disabled={loading}
          >
            {loading ? "Submitting..." : (isLogin ? "Login" : "Sign Up")}
          </button>
          <button
            type="button"
            className="btn btn-link" // Bootstrap link button style
            onClick={() => {
              setIsLogin((prev) => !prev);
              setMessage(null); // Clear message when switching form type
              setFormData({ username: '', password: '' }); // Clear form when switching
            }}
          >
            {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </form>
      {message && <p style={{ marginTop: '1rem', textAlign: 'center' }}>{message}</p>}
    </div>
  );
}

export default SignupSignIn;
