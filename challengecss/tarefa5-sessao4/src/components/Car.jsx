import styles './Car.module.css'

const Car = ({cars}) => {

    return(

        <>
        <h3>{cars.brand}</h3>
        <p>{cars.model}</p>
        <p>{cars.year}</p>
        
        </>
    )
}

export default Car