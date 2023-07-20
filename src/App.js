import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectDishes from "../src/screens/SelectDishes/SelectDishes";
import DishDetail from "../src/screens/DishDetail/DishDetail";

function App() {
  return (
    <>
      <BrowserRouter basename="/task-chefkart">
        <Routes>
          <Route path = "/" exact element = {<SelectDishes />}/>
          <Route path = "/DishDetail" element = {<DishDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
