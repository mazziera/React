//component da biblioteca
import { Link } from "react-router-dom";

//hook
import { useFetch } from "../hooks/useFetch.jsx";

//style file
import "./Home.css"

const Home = () => {
    //3- carregamento de dados
    const url = "http://localhost:3000/products";
    const {data:items, error} = useFetch(url);

    return(
        <>
        <h1>Produtos</h1>

        {error && <p>{error}</p>}

        <ul className="products">
            {items && items.map( (item) => (
                <li key={item.id}>
                    <h3>{item.name}</h3> 
                    <p>R${item.price} reais</p>

                    {/* 4 - Rota Dinâmica */}
                    <Link to={`/products/${item.id}`}> Mais Detalhes</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Home