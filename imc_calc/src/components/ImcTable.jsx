import './ImcTable.css'
import Button from './Button'

const ImcTable = ({data, imc, info, infoClass, resetCalc}) => {
  return (
    <div className="result_container">
      <p className="imc_number">Seu Imc: <span className={infoClass}>{imc}</span> </p>
      <p className="imc_info">Situação Atual: <span className={infoClass}>{info}</span></p>
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
      <Button id="back_btn" text="Voltar" action={resetCalc}/>
    </div>
  )
}

export default ImcTable