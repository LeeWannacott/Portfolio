import React, { Component } from 'react'
import './Contact.css'
import axios from 'axios';





export class Contact extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         email: '',
    //         message: ''
    //     }
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     axios({
    //         method: "POST",
    //         url: "http://localhost:3002/send",
    //         data: this.state
    //     }).then((response) => {
    //         if (response.data.status === 'success') {
    //             alert("Message Sent.");
    //             this.resetForm()
    //         } else if (response.data.status === 'fail') {
    //             alert("Message failed to send.")
    //         }
    //     })
    // }

    // resetForm() {
    //     this.setState({ name: '', email: '', message: '' })
    // }

    render() {
        return (

            <div className="container">
                <h6 className='heading'>Email: WannacottL@gmail.com</h6>
                <hr></hr>
                <a href="https://www.linkedin.com/in/lee-wannacott-64289b174/" ><img src={process.env.PUBLIC_URL + '/LinkedIn.png'} className="contact-images" style={{ width: "10em", marginTop: '0.25em', marginLeft: '1em' }} ></img></a>
                <a href="https://github.com/LeeWannacott" ><img src={process.env.PUBLIC_URL + '/GithubLogo.jpeg'} className="contact-images" alt="https://github.com/LeeWannacott" style={{ width: "10em", marginTop: '0.25em', marginLeft: '0.75em'}} ></img></a>
                <a href="mailto:WannacottL@gmail.com" ><img src={process.env.PUBLIC_URL + '/Gmail.png'} className="contact-images" alt="mailto:WannacottL@gmail.com" style={{ width: "8em", marginTop: '0.25em', marginLeft: '0.1em' ,marginRight:'0.1em'}}></img></a>
                {/* 
                <h2 className='heading'>Contact via form:</h2><hr></hr>


                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> */}
            </div>
        );
    }

    // onNameChange(event) {
    //     this.setState({ name: event.target.value })
    // }

    // onEmailChange(event) {
    //     this.setState({ email: event.target.value })
    // }

    // onMessageChange(event) {
    //     this.setState({ message: event.target.value })
    // }

    // handleSubmit(event) {
    // }
}


export default Contact


