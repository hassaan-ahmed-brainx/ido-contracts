import Initiateauction from "./components/Initiateauction";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {  
  return (
    <div>
     <Router>
        <Routes>
        <Route path="/" element={<Initiateauction/>}/>
        </Routes>     
      </Router>

    </div>
  );
}

export default App;
