import React from 'react';
import {
  Field,
  Control,
  Label,
  Textarea,
  Input,
  Checkbox,
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Notification from 'react-bulma-components/lib/components/notification';
import { apiString } from '../config/api';
import { Loader, Heading } from 'react-bulma-components/full';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sending: false,
      fields: {
        name: '',
        message: '',
        subject: '',
        email: '',
        termsAccepted: false,
      },
      message: null,
      error: null,
    };
  }

  handleFieldChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: value,
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
      sending: true,
    }, () => {
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
            sending: false,
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
    });
  };

  render() {
    if (this.state.sending) {
      return (
        <React.Fragment>
          <Heading>Sending</Heading>
          <Loader />
        </React.Fragment>
      );
    }
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
          <Field>
            <Control>
              <Checkbox
                name="termsAccepted"
                onChange={this.handleFieldChange}
                required
                checked={this.state.fields.termsAccepted}
              >
                I agree to the use of my information in the handling of this enquiry.
              </Checkbox>
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
