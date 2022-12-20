import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Card, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
                    <Form.Control 
                        className='details' 
                        type="text" 
                        name="user_name" 
                        placeholder='Full Name' 
                    />
                    <br/>
                    <Form.Control 
                        className='details' 
                        type="email" 
                        name="user_email" placeholder='Your Email' 
                    />
                    <br/>
                    <Form.Control 
                        className='note' 
                        name="message" 
                        type='textbox'
                        as="textarea"
                        rows={3}
                        placeholder='Type your message here' 
                    />
                    <br/>
                    
                    <Button type="submit" variant='outline-dark' className='mt-2' >
                        Send Message
                        <FontAwesomeIcon icon={ faPaperPlane } />
                    </Button>
                </Form>
            </div>
            
        </Card.Body>
    </Card>
    
  );
}

export default Contact

// style={{ width: '30em', height: 'auto' }}