const CarDetails = ({brand, model, km, color,}) => {
//desestruturando as props como argumento da função do componente
    return(
        <>
        <h2>Detalhes Carro</h2>

        <ul>
            <li>marca:{brand}</li>
            <li>modelo: {model}</li>
            <li>km:{km}</li>
            <li>cor:{color}</li>
        </ul>
        </>
    )
};

export default CarDetails;