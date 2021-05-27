import React from 'react'
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react'
import './Contact.css'

const Contact = () => (
    
    <Container className="home">      
      <Form className='formulario-contacto'>
        <div>
          <h3 className="titulo">CONTACTANOS</h3>
        </div>
        <hr></hr>
        <br></br>
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

        />
        <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Enviar'
        label=''
        color='red'
        />
      </Form>
    </Container>
)

export default Contact