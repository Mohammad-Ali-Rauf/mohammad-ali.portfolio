import React, { useRef, useState } from 'react'
import { contact, section5Title, social } from '../../profile'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        const params = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        }

        emailjs.send('mail', 'send_mail', params, 'user_O3y1kXCKWXkY4Hl9fe7Os')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                <>
                    <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                    </div>
                </>
                <div className="container">
                    <div className="git-cont row">
                        <div className="col-12 col-sm-6 half">
                            <form onSubmit={sendEmail} ref={form}>
                                <input type="text" id="from_name" value={name}  placeholder="Your name" required onChange={(e) => setName(e.target.value)} />
                                <input type="email" id="email_id" value={email}  placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" id="subject" value={subject}  placeholder="Subject" onChange={(e) => setSubject(e.target.value)} required />
                                <textarea id="msg" value={message} placeholder="Message" required onChange={(e) => setMessage(e.target.value)} />
                                <button style={{ cursor: 'pointer' }} type="submit">Send Message</button>
                            </form>
                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                {contact.pitch}
                            </p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                    {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact
