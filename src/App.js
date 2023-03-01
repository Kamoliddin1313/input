import { NavLink, Route,Routes } from "react-router-dom";
import Salom from "./Salom.jsx";
import Salom2 from "./Salom2.jsx";
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/salom"}>salom</NavLink>
        <NavLink to={"/salom2"}>salom2</NavLink>
      </nav>
      <heades>
        <Routes>
          <Route exect path={"/salom"} element={<Salom />} />
          <Route path={"/salom2"} element={<Salom2 />} />
        </Routes>
      </heades>
    </div>
  );
}

export default App;
