import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './routes/Allroutes';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
