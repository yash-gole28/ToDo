import {Route , Routes} from 'react-router-dom'
import './App.css';
import Homepage from './Components/Homepage';
import New from './Components/New';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/new' element={<New/>}/>
     </Routes>
    </div>
  );
}

export default App;
