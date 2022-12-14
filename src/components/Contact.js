import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Card, Button } from 'react-bootstrap'

const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_39dnmlg', 'template_xfphy1f', form.current, '0AiuwjeffYGuogAKo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Card className='container-sm d-flex justify-content-between' style={{ backgroundColor: '#34426A', maxWidth: '40em' }}>
        <Card.Header>
            <h3>
                Contact Me!
            </h3>
        </Card.Header>
        <Card.Body>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <label className='label'><b>Name:</b></label>
                    <input type="text" name="user_name" /><br/>
                    <label className='label'><b>Email:</b></label>
                    <input type="email" name="user_email" /><br/>
                    <label className='label'><b>Message:</b></label>
                    <textarea name="message" /><br/>
                    
                    <input type="submit" value="Send" />
                </form>
            </div>
            
        </Card.Body>
    </Card>
    
  );
}

export default Contact