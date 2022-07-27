import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import firebase from '../config/firebase'



const Confirm = ({values}) => {

    const {primeiroNome, ultimoNome, email, trabalho, cidade, pais} = values

    useEffect( () => {
        firebase.firestore().collection('multiFormData').doc(primeiroNome).set({
            pnome:primeiroNome,
            unome:ultimoNome,
            email:email,
            trabalho:trabalho,
            cidade:cidade,
            local:pais
        }).then( (data) => 
            console.log(data)
        ).catch( (err) => 
        console.log(err)
        )
    },[cidade, email, pais, primeiroNome, trabalho, ultimoNome])

    return (
        <div>
            <h4>Suas respostas foram registradas com sucesso! Obrigado! 😄 </h4>
            <ListGroup style={{maxWidth: '600px', margin: 'auto'}}>
                <ListGroup.Item variant="secondary">
                    PRIMEIRO NOME: {primeiroNome}
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                    ÚLTIMO NOME: {ultimoNome}
                </ListGroup.Item>
                <ListGroup.Item variant="danger">
                    EMAIL: {email}
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                    TRABALHO: {trabalho}
                </ListGroup.Item>
                <ListGroup.Item variant="light">
                    CIDADE: {cidade}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                    PAÍS: {pais}
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Confirm