import './App.css';
import MyGrid from './components/MyGrid';
import Header from "./components/header/header.component.jsx";
import Elements from "./components/elements/elements.component.jsx";


function App() {

  return(
    <div className="App">
          <Header/>
          <Elements/>
          <MyGrid/>
    </div>
  )
  
}

export default App;
