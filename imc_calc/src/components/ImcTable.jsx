import './ImcTable.css'
import Button from './Button'

const ImcTable = ({data}) => {
  return (
    <div className="result_container">
      <p className="imc_number">Seu Imc: </p>
      <p className="imc_info">Situação Atual:</p>
      <h3>Classificações:</h3>
      <div className="imc_table">
        <div className="table_header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
        {data.map((item) => (
          <div className="table_data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <Button id="back_btn" text="Voltar"/>
    </div>
  )
}

export default ImcTable