import React from 'react'
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react'

const Contact = () => (
    <Container className="home">
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Nombre'
        placeholder='Nombre'
          />
          <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Apellido'
        placeholder='Apellido'
          />
        </Form.Group>
        <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Dejanos tu consulta'
      placeholder='Consulta'
        />
        <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
        />
        <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Enviar'
      label=''
        />
    </Form>
  </Container>
)

export default Contact