//styles
import "./Container.css"

const Container = ({ children, componentValue}) => {
// é uma propriedade especial do objeto props, que permite que os componentes transmitam elementos filho (child elements) para outros componentes. Ela é usada quando um componente precisa aceitar e renderizar conteúdo aninhado dentro dele.
    return(
        <>
        <div className="container_styles">
            <h2>Titulo do Container</h2>
            {children}
            <p>{componentValue}</p>
        </div>
        </>
        
        
        
    )
};

export default Container