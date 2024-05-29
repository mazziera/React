//libs
import { useState } from 'react'

//styles
import './FirstForm.css'

// 1 criando o formulario
const FirstForm = () => {
    // 3 Gerenciando Dados de formularios utilizando Hook 
    const [name, setName] = useState()
    const handleName = (event) => {
        setName(event.target.value)
        // objeto event, resgata o valor necessario para alterar o estado da variavel
    };

    //4 simplificando o gerenciamento de dados de formularios, linha 50
    const [email, setEmail] = useState()
    

    // 5 enviando o formulario
    const handleSubmit = (event) =>{
        event.preventDefault()
        /*um método em JavaScript que serve para evitar que o comportamento padrão de um evento seja executado.
        É útil quando precisa adicionar um comportamento personalizado a um evento, como validar um formulário antes de enviá-lo ou evitar que um formulário seja enviado mais de uma vez. */

        console.log(name)
        console.log(email)
        console.log(bio);
        console.log(duty);

        //6 limpando o formulario

         setName("");
         setEmail("");
         setBio("");
         setDuty("");
        //basta atualizar a função do state para uma string vazia. A propriedade value do input tem que corresponder com a variavel do State
 
    };


    //7 Textarea
    const [bio, setBio] = useState()
    

    //8 Select
    const [duty, setDuty] = useState()
   
    return(
        <>
        <h2>Formulario React</h2>
        <form onSubmit={handleSubmit}>
            <h4>Criando um formulario React</h4>
            <div className='form_container'>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" placeholder="Nome" onChange={handleName} value={name}/>
                {/* os atributos htmlFor e name, devem possuir o mesmo valor */}
            </div>

            {/* 2 Label envolvendo input */}

            <label>
                <span>E-mail</span>

                <input 
                type="email"
                name="email"
                placeholder='E-mail' 
                value={email}
                onChange={(event) => setEmail(event.target.value)}/>
            </label>

            {/*  7 Textarea */}
            <label htmlFor="bio">
                <span>Biografia</span>

                <textarea
                    name="bio"
                    cols="30"
                    rows="5"
                    placeholder='Conte sua história'
                    onChange={(event) => setBio(event.target.value)}
                    value={bio}>

                </textarea>
            </label>

            {/* 8 Select */}
            <label>
                <span>Função no sistema</span>
                
                <select name="duty" onChange={(event) => setDuty(event.target.value)} value={duty}>
                    <option value="">Seleciona uma função</option>
                    <option value="user">Usuario</option>
                    <option value="suport">Suporte</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>

            <input type="submit" className='button_submit' value="Enviar" />
        </form>
        </>
    )
}

export default FirstForm