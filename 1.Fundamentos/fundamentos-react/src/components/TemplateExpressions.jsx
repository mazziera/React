const TemplateExpressions = () => {

    const name = "Raphael"

    const infos = {
        age: 26,
        ocupation: "developer"
    }
    return(
        <>
        <h1>Olá {name}, voce usou template expressions para renderizar o seu nome</h1>
        <h4>Você trabalha como {infos.ocupation} ?</h4>

        <p>olhe o console para ver os dados do template expressions</p>
       {console.log(name)}
       {console.log(infos)}
       {console.log(infos.age)}
       {console.log(infos.ocupation)}
       {console.log("template expressions é nada mais que escrever codigo js dentro do return do componente, utilizando chaves{}, concatenando com o html. Esse é o poder do JSX!")}
        
        </>
    )
}

export default TemplateExpressions