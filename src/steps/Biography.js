import React from 'react'
import {Form} from 'react-bootstrap';

const Biography = ({values, handleChange}) => {
    return (
        <div>
            <Form className="mt-5">
                <h4>Fale um pouco sobre você</h4>

                <Form.Group className="mt-5">
                    <Form.Label>Qual seu trabalho?</Form.Label>
                    <Form.Control defaultValue={values.trabalho} onChange={handleChange('trabalho')} type="text" placeholder="Seu trabalho" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>Em que cidade você mora?</Form.Label>
                    <Form.Control defaultValue={values.cidade} onChange={handleChange('cidade')}type="text" placeholder="Cidade" />
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label>Qual seu país?</Form.Label>
                    <Form.Control defaultValue={values.pais} onChange={handleChange('pais')}type="text" placeholder="País" />
                </Form.Group>

            </Form>
        </div>
    )
}

export default Biography