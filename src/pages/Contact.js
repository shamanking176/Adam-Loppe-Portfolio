 import React, { useState } from 'react';
 import '../../src/style.css'
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can send the form data to a backend server or perform other actions
    console.log(name, email, message);
  };

  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div className ="mt-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            
          />
        </div>
        <div className='mt-3'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mt-3'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Contact
