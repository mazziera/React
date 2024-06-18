
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Search = () => {
    const [searchParams] = useSearchParams(); //permite manipular os parâmetros de consulta (query parameters) na URL de uma aplicação

    const url = "http://localhost:3000/products?" + searchParams;
    const {data: items, loading, error} = useFetch(url);
    return(
        <>
        <h1>Resultados Disponíveis</h1>

        <ul className="products">
            {error && <p>{error}</p>}
            {loading && <p>Carregando dados...</p>}


            {items && items.map( (item) =>(
                <li key={item.id}>
                    <h3>{item.name}-</h3>
                    <p>R${item.price} reais</p>
                    
                    {/* 4 - Rota Dinâmica */}
                    <Link to={`/products/${item.id}`}> Mais Detalhes</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Search