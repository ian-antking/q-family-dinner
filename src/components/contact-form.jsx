import React from 'react';
import {
  Field,
  Control,
  Label,
  Textarea,
  Input,
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Notification from 'react-bulma-components/lib/components/notification';
import { apiString } from '../utils/api-config';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        message: '',
        subject: '',
        email: '',
      },
      message: null,
      error: null,
    };
  }

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  constructMessage() {
    return `
    A new contact request has been sent through the website:\n
    Name: ${this.state.fields.name}\n
    Email: ${this.state.fields.email}\n
    Subject: ${this.state.fields.subject}\n
    Message:\n
    ${this.state.fields.message}
    `;
  }

  handleSendMessage = (event) => {
    event.preventDefault();
    this.setState({
      error: '',
      message: '',
    });
    const URL = `${apiString}/message/enquiry`;
    const message = this.constructMessage();
    const messageBody = { text: message };
    window.fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(messageBody),
    })
      .then(() => {
        this.setState({
          message: 'Your message has been sent!',
          fields: {
            name: '',
            message: '',
            subject: '',
            email: '',
          },
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        {
          this.state.message || this.state.error ? (
            <Notification
              color={this.state.error ? 'danger' : 'success'}
            >
              {this.state.message || this.state.error}
            </Notification>
          ) : (
            null
          )
        }
        <form
          onSubmit={this.handleSendMessage}
        >
          <Field>
            <Label>Your Name</Label>
            <Control>
              <Input
                name="name"
                value={this.state.fields.name}
                onChange={this.handleFieldChange}
              />
            </Control>
          </Field>
          <Field>
            <Label>Email</Label>
            <Control>
              <Input
                name="email"
                type="email"
                required
                value={this.state.fields.email}
                onChange={this.handleFieldChange}
              />
            </Control>
          </Field>
          <Field>
            <Label>Subject</Label>
            <Control>
              <Input
                name="subject"
                value={this.state.fields.subject}
                onChange={this.handleFieldChange}
              />
            </Control>
          </Field>
          <Field>
            <Label>Message</Label>
            <Control>
              <Textarea
                name="message"
                value={this.state.fields.message}
                onChange={this.handleFieldChange}
                required
              />
            </Control>
          </Field>
          <Button
            type="submit"
            color="dark"
            fullwidth
          >
            Send
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactForm;
