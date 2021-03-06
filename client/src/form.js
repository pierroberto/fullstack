import React, { Component } from 'react';

class Form extends Component {

  postThing (phone, message) {
    fetch('http://localhost:3000/letter', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
        message: message,
      })
    })
  }

  getThing() {
    return fetch('http://localhost:3000/letter')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
  }

  render() {
    return (
      <div>
        <label htmlFor="phone">Phone
          <input ref='phoneInput' id="phone" type="number"></input>
        </label>
        <label htmlFor="message">Message
          <textarea ref='messageInput' id="message"></textarea>
        </label>
        <button onClick={() => this.postThing(this.refs.phoneInput.value, this.refs.messageInput.value)}>Post data</button>
        <button onClick={() => this.getThing()}>Get</button>
      </div>
    );
  }
}



export default Form;
