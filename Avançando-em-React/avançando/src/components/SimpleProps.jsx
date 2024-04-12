const SimpleProps = (props) => {

console.log(props); //um objeto que contém varias propriedades. Nele, podemos acessar o objeto "userName", setado no componente, no arquivo main.jsx
 

    return(
        <>  <h1> --Props--</h1>
            <h2>O nome do usuário é: {props.userName} </h2>
        </>
    )

};

export default SimpleProps;