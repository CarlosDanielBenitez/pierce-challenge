
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FindMissingNumber from "./components/FindMissingNumber";
import Card from "./components/Card";


function App() {
  const numeros = [1, 3, 2, 4, 2, 1, 3];
  const numeros2 = [1, 3, 2, 2, 2, 1, 3];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Desafio Pierce</h1>

      <div className="findContainer">
        <div>
          <h2>
            El Array completo: <span>{numeros}</span>
          </h2>
          <FindMissingNumber numeros={numeros} />
        </div>
        <div>
          <h2>
            El Array completo: <span>{numeros2}</span>
          </h2>
          <FindMissingNumber numeros={numeros2} />
        </div>
        
        
      </div>

      <div className="cardContainer">
        <Card
          question={"¿Cómo abordé el problema?"}
          answer={
            "Identifiqué el problema como un desafío de encontrar un elemento único en un conjunto de números repetidos, lo que sugirió una estrategia de conteo de ocurrencias."
          }
        />

        <Card
          question={
            "¿Qué estrategia utilicé para identificar el número único?"
          }
          answer={
            "Utilicé un objeto para contar las ocurrencias de cada número en el conjunto, luego iteré sobre el objeto para encontrar el número con una sola ocurrencia, que sería el número único."
          }
        />

        <Card
          question={
            " ¿Cómo manejé los casos donde el conjunto no cumple con las condiciones?"
          }
          answer={
            "En lugar de devolver null cuando no se encuentra ningún número único, proporcioné un mensaje indicando que el número único no existe para comunicar de manera clara y precisa la situación al usuario."
          }
        />
      </div>
    </>
  );
}

export default App;
