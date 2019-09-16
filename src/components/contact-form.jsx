import React from 'react';
import {
  Field,
  Control,
  Label,
  Textarea,
  Input,
} from 'react-bulma-components/lib/components/form';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        message: '',
        subject: '',
        email: '',
      },
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

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default ContactForm;
