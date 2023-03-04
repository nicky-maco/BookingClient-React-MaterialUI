import { Routes, Route } from "react-router-dom";
import Home from "./components/containers/Home";
import Start from "./routes/Start";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />}>
        <Route index element={<Home />} />
        <Route path="services" />
      </Route>
    </Routes>
  );
};

export default App;
