import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3dfb3cea-f6bd-4e21-927a-92ee55750187");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
     <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=""/></h3>
        <p>Feel free to reach out through contact form or find our contact information below, 
        Your feedback, questions, and suggestions are important to us we strive to provide
         exceptional service to our university community.</p>
         <ul>
            <li><img src={mail_icon} alt=""/>Contact@educity.com</li>
            <li><img src={phone_icon} alt=""/>+91 123-456-7890</li>
            <li><img src={location_icon} alt=""/>Vidya Nagari, Kalina, Santacruz East, Mumai, Maharashtra 400098.</li>
         </ul>
     </div>
     <div className="contact-col">
       <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter your name" required/>
        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
        <label>Write your message here</label>
        <textarea name="message"  rows="6" placeholder="enter your message" required></textarea>
        <button type='submit' className='btn dark-btn'>Submit Now</button>
       </form>
    <span>{result}</span>
     </div>
    </div>
  )
}

export default Contact