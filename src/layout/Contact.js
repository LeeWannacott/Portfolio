import React, { Component } from 'react'
import './Contact.css'
import axios from 'axios';

export class Contact extends Component {

    render() {
        return (

            <div className="container">
                <h6 className='heading'>Email: WannacottL@gmail.com</h6>
                <h6 className='heading'>Phone: +64279029608</h6>
                <div className= "contactIcons">
                    <hr></hr>
                        <a href="https://nz.linkedin.com/in/lee-wannacott-64289b174?challengeId=AQFkfy__xc4AmAAAAXb6XNWBg-lX0dJGd3cUbYqSlczEeAsPTi875qJdB4ldYjqDS6OqbyjucceHYj0w4Ix3vu9AKhidJGAtJw&submissionId=c4e5ccfe-bab5-5916-24bc-2c10d37ed03c" ><img src={process.env.PUBLIC_URL + '/LinkedIn.png'} className="contact-linked" style={{ width: "10em", marginTop: '0.25em', marginLeft: '1em' }} ></img></a>
                        <a href="https://github.com/LeeWannacott" ><img src={process.env.PUBLIC_URL + '/GithubLogo.jpeg'} className="contact-github" alt="https://github.com/LeeWannacott" style={{ width: "10em", marginTop: '0.25em', marginLeft: '0.75em'}} ></img></a>
                        <a href="mailto:WannacottL@gmail.com" ><img src={process.env.PUBLIC_URL + '/Gmail.png'} className="contact-email" alt="mailto:WannacottL@gmail.com" style={{ width: "8em", marginTop: '0.25em', marginLeft: '0.1em' ,marginRight:'0.1em'}}></img></a>
                </div>
            </div>
        );
    }
}


export default Contact


