import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Card, Button, Form } from 'react-bootstrap'

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
    <Card className='contact container-sm d-flex justify-content-between'>
        <Card.Title>
            <h3>
                Contact Me
            </h3>
        </Card.Title>
        <Card.Body>
            <div>
                <Form ref={form} onSubmit={sendEmail}>
                    <input classname='contact' type="text" name="user_name" placeholder='Full Name' /><br/>
                    <input classname='contact' type="email" name="user_email" placeholder='Your Email' /><br/>
                    <textarea classname='contact' name="message" placeholder='Type your message here' /><br/>
                    
                    <Button type="submit">
                        Send Message
                    </Button>
                </Form>
            </div>
            
        </Card.Body>
    </Card>
    
  );
}

export default Contact