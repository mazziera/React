const ExecuteFunction = ({funtionAsProps}) => {
    

    return(
        <>
        <h2>Função executada como props</h2>
        <button onClick={funtionAsProps}> Clique aqui para executar a função</button>
        </>
    )

};
export default ExecuteFunction