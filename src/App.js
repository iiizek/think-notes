import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  const [categories, setCategories] = useState([]);
  const [choiceOfCategory, setChoiceOfCategory] = useState("");

  const addCategory = (category) => {
    setCategories([...categories, {title: category, stickers: [], flagged: false}]);
  }

  return (
    <div className="App">
        <Header 
          categories={categories} 
          addCategory={addCategory}
          setCategories={setCategories}
          setChoiceOfCategory={setChoiceOfCategory}
          choiceOfCategory={choiceOfCategory}
        />
        <Main 
          categories={categories}
          choiceOfCategory={choiceOfCategory}
        />
    </div>
  );
}

export default App;
