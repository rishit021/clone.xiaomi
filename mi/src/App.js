import Navbar from "./Components/Navbar";
import {Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import Marvel from "./Components/Marvel";
import Store from "./Components/Store";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Marvel' element={<Marvel/>} />
          <Route path='/Store' element={<Store/>} />
        </Routes>
    </div>
  );
}

export default App;
