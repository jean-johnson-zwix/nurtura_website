//import logo from './images/nurtura_logo.svg';
import './App.css';
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

//  return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

return (
  <Router>  {/* ✅ Wrap everything inside <Router> */}
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* ✅ Route for LoginPage */}
    </Routes>
  </Router>
);
}

export default App;
