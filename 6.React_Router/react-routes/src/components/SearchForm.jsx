
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const SearchForm = () => {
    // hook que permite a navegação programática e realizar uma navegação para uma URL específica
    const navigate = useNavigate(); 
    const [query, setQuery] = useState();

    const handleSubmit = (event) => {
        event.preventDefault()

        navigate('/search?q=' + query) //redireciona o usuário para a URL junto do valor que será pesquisado
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event) => setQuery(event.target.value)} />
            <input type="submit" value="Buscar"/>
        </form>
        </>
    )
};

export default SearchForm