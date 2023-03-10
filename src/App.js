// React imports
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

// Component imports
import Home from "./components/HomePage";
import Edit from "./components/EditPage";
import Layout from "./components/Layout";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Navigate to ="/notes" />}></Route>
          <Route path="/notes" element={<Home />}></Route>
          <Route path="/notes/:id" element={<Home />}></Route>
          <Route path="/notes/:id/edit" element={<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
