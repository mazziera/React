const Events = () => {
     const handleEventoClique = (event) =>{
        console.log(event);
     };

  return (
    <>
      <div>
        <button onClick={handleEventoClique}>Evento: Clique aqui!</button>
      </div>

      <div>
      <button onClick={() => (console.log("Evento inline/simples"))}>Evento inline: Clique aqui tambem</button>

      </div>
    </>
  );
};

export default Events;
