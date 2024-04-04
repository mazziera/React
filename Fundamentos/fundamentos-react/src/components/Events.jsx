const Events = () => {
     const handleEventoClique = (event) =>{
        console.log(event);
     };

  return (
    <>
      <div>
        <button onClick={handleEventoClique}>Evento: Clique aqui!</button>

        <button onClick={() => (console.log("Evento inline/simples"))}>Evento simples: Clique aqui tambem</button>
      </div>
    </>
  );
};

export default Events;
