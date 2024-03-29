import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainet/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
         <Route path="/" element={<ItemListContainer/>}/>
         <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
         <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
         <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
