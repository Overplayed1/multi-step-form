import React from 'react'
import { Form } from 'react-bootstrap';

const UserDetails = ({values, handleChange}) => {
    console.log(values, handleChange);
    return (
        <div>
            <Form className="mt-5">
                <h4>Preencha as informações</h4>

                <Form.Group className="mt-5">
                    <Form.Label>Primeiro Nome</Form.Label>
                    <Form.Control defaultValue={values.primeiroNome} onChange={handleChange('primeiroNome')} type="text" placeholder="Primeiro Nome" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>Último Nome</Form.Label>
                    <Form.Control defaultValue={values.ultimoNome} onChange={handleChange('ultimoNome')} type="text" placeholder="Último Nome" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>Endereço de email</Form.Label>
                    <Form.Control defaultValue={values.email} onChange={handleChange('email')} type="email" placeholder="Seu email" />
                </Form.Group>

            </Form>
        </div>
    )
}

export default UserDetails