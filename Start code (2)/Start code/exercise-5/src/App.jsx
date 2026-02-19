import { GAMES } from "./data";

function App() {
  return (
    <>
      <header className="main-header">
        <h1>Games</h1>
      </header>

      <div className="cards-container">
        {GAMES.map((game) => (
          <div key={game.id} className="card">
            <img src={game.image} alt={game.name} className="card-image" />
            <h2>{game.name}</h2>
            <p className="Type-text">{game.Type}</p>
           
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
