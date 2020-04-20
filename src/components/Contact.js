import React from "react";
import "../css/Contact.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { name: "", subject: "", message: "" };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeSubject = (event) => {
    this.setState({
      subject: event.target.value,
    });
  };

  handleChangeMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Contact</h2>
        <h3>
          If you'd like to make an enquiry, please feel free to get in touch
        </h3>
        <form onSubmit={this.handleSubmit} className="container">
          <div className="row">
            <div className="col-25">
              <label>Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Subject</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                value={this.state.subject}
                onChange={this.handleChangeSubject}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Message</label>
            </div>
            <div className="col-75">
              <textarea
                type="text"
                value={this.state.URL}
                onChange={this.handleChangeURL}
              />
            </div>
          </div>
          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
