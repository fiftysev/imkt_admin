import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </Router>
  );
};

export default App;
