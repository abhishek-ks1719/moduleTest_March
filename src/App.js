import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";


function App() {
  return (
    <div className="App">
      <h1>Social Media App</h1>
      {/* <Home/> */}
      <Routes>
      <Route path="moduleTest_March/" exact element={<Home/>}></Route>
      <Route path="moduleTest_March/items/:id" exact element={<Details/>}></Route>
    </Routes>
    </div>
    
  );
}

export default App;
