import React, { useState } from 'react'
import Biography from './steps/Biography'
import Confirm from './steps/Confirm'
import UserDetails from './steps/UserDetails'
import Welcome from './steps/Welcome'
import { Button } from 'react-bootstrap'

const UserForm = () => {
    //passo a passo
    const [activeStep, setActiveStep] = useState(0)

    const getSteps = () => {
        return ["Welcome", "User Details", "Biography", "Confirm"]
    }

    const steps = getSteps()

    // Variaveis de estado
    const [multiFormValues, setMultiFormValues] = useState({
        primeiroNome: "",
        ultimoNome: "",
        email: "",
        trabalho: "",
        cidade: "",
        pais: ""
    })

    // Navega para a próxima página
    const handleNext = () => {
        setActiveStep((nextStep) => nextStep + 1)
    }
    // Navega para a página anterior
    const handleBack = () => {
        setActiveStep((previousStep) => previousStep - 1)
    }

    //Lida com a mudança do valor do formulário
    const handleChange = (input) => (e) => {
        setMultiFormValues({ ...multiFormValues, [input]: e.target.value })
    }

    return (
        <div>
            {activeStep === 0 && (
                <Welcome handleChange={handleChange} />
            )}
            {activeStep === 1 && (
                <UserDetails values={multiFormValues} handleChange={handleChange} />
            )}
            {activeStep === 2 && (
                <Biography values={multiFormValues} handleChange={handleChange} />
            )}
            {activeStep === 3 && (
                <Confirm values={multiFormValues} handleChange={handleChange} />
            )}

                <Button disabled={activeStep === 0} className="mr-5" onClick={handleBack} style={activeStep === 3 ? {display: 'none'} : {}}>Voltar</Button>

                <Button className="ml-5" variant="contained" onClick={handleNext} style={activeStep === 3 ? {display: 'none'} : {}}>{activeStep === steps.length - 2 ? 'Enviar' : 'Próximo'}</Button>

        </div>
    )
}

export default UserForm