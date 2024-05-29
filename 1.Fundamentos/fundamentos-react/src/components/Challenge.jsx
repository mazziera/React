const Challenge = () => {

    const numero1 = 70;
    const numero2 = 97;

    const handlerSomar = () => {
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    };

    return(
        <>
        <p>{numero1}</p>
        <p>{numero2}</p>

        <button onClick={handlerSomar}>Somar os numeros e mostrar no console</button>
        </>
    )
    
};

export default Challenge;