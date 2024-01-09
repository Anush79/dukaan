import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import Payments from './pages/Payments';

function App() {
  return (
    <div className="App">
     <LeftSideBar/>
     <main className='grow w-full'>
    <Payments/>
     </main>
    </div>
  );
}

export default App;
