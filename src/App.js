import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <Header/>
      <Routes>
      
      <Route path="/" element={<Cards/>}/>
      <Route path="/cart" element={<Cards/>}/>
      <Route path="/Cart/:id" element={<CardsDetails/>}></Route>
      <Route/>
      </Routes>
      
    </>
  );
}

export default App;
