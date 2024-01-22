import { useState } from "react"

import "./ImcCalc.css"
import Button from "./Button"

const ImcCalc = () => {
    const [heigth, setHeight] = useState("")
    const [weigth, setWeight] = useState("")

    const clearForm = (e) => {
        e.preventDefault()
        setHeight("")
        setWeight("")
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeigthChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setHeight(updatedValue)
    }

    const handleWeigthChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setWeight(updatedValue)
    }

  return (
    <div className="calc_container">
        <h2>Calculadora de IMC</h2>
        <form className="imc_form">
            <div className="form_inputs">
                <div className="form_control">
                    <label>Altura:</label>
                    <input type="text" name="heigth" id="heigth" placeholder="Exemplo: 1,70" onChange={(e) => handleHeigthChange(e)} value={heigth}/>
                </div>
                <div className="form_control">
                    <label>Peso:</label>
                    <input type="text" name="weigth" id="weigth" placeholder="Exemplo: 70,5" onChange={(e) => handleWeigthChange(e)} value={weigth}/>
                </div>
            </div>
            <div className="action_control">
                <Button id="clear_btn" text="Limpar" action={clearForm}/>
                <Button id="calc_btn" text="Calcular"/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc