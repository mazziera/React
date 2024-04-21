import "./DestructuringProps.css"

const CarDetails = ({brand, model, km, color, newCar}) => {
//desestruturando as props como argumento da função do componente

    return(
        <>
            <div className="div_com_props">
                <h2>Desestruturando props</h2>
                
                <h3>Detalhes do Carro</h3>
                <ul>
                    <li>marca:{brand}</li>
                    <li>modelo: {model}</li>
                    <li>km:{km}</li>
                    <li>cor:{color}</li>
                    {/* verificando se o carro é novo ou não com a condicional ternaria */}
                    {newCar === true ? <p>este carro é novo!</p> : <p>este carro é usado!</p>}
            
                </ul>
            </div>
        </>
    )
};

export default CarDetails;