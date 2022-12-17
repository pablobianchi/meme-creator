import 'bootstrap/dist/css/bootstrap.css';
import MemeList from './components/MemeList';
import MemeCreate from './components/MemeCreate';
import {BrowserRouter, Route ,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<MemeList/>}/>
        <Route path='/crear-meme/:id' element={<MemeCreate/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
