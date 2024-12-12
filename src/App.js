import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";


function App() {

  const [dataCook, setDataCook] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch)
      .then((res) => {
          setDataCook(res.data.meals);
      })
  }, [inputSearch])
  
  return (
    <>
      <div className="header">
        <h1>React Cook</h1>
        <input type="text" placeholder="Tapez le nom d'un aliment (en anglais)" onChange={(e) => setInputSearch(e.target.value)} />
      </div>
      <div className="recipeContainer">
        {
          dataCook ? 
          dataCook
            .map((recipe) => (
              <Card key={recipe.idMeal} recipe={recipe}/>

            ))
            :
            <p>Aucune recette</p>
        }
      </div>
    </>
  );
}

export default App;
