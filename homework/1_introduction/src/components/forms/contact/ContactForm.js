import React from "react";

import ContactFormInput from "./ContactFormInput";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { fullName, email, question } = e.target.elements

    console.log({
      fullName: fullName.value,
      email: email.value,
      question: question.value
    });
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col-sm-12">
          <h3>Contact form</h3>
          <form onSubmit={this.submit}>
            <ContactFormInput name="fullName" placeholder="Ivan Ivanov" label="Full name" />
            <ContactFormInput name="email" type="email" placeholder="name@example.com" label="Email address" />
            <div className="form-group">
              <label>Your question</label>
              <textarea name="question" className="form-control" rows="3" />
            </div>
            <button type="submit" className="btn btn-success">Send</button>
          </form>
        </div>
      </div>
    );
  }
}