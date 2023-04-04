import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";


function App() {
  return (
    <div className="App">
      <h1>Social Media App</h1>
      <Routes>
      <Route path="moduleTest_March/" exact element={<Home/>}></Route>
      <Route path="moduleTest_March/item/:id" element={<Details/>}></Route>
    </Routes>
    </div>
    
  );
}

export default App;
