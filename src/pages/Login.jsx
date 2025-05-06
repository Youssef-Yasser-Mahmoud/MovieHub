import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
    // Here you would typically handle authentication
  };

  return (
    <div className='login-container'>
      <div className='login-card'>
        <h2 className='login-title'>Log In</h2>
        <form className='login-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
              placeholder='Enter your username'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              placeholder='Enter your password'
            />
          </div>
          <button type='submit' className='login-button' onClick={() => navigate('/home')}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
