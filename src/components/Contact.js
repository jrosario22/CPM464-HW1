import React from "react";

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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <input
            type="text"
            placeholder="Subject"
            value={this.state.subject}
            onChange={this.handleChangeSubject}
          />
          <input
            type="text"
            placeholder="Message"
            value={this.state.URL}
            onChange={this.handleChangeURL}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
