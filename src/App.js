import './App.css';
import Blogs from './components/Blogs/Blogs';
import Gym from './components/Gym/Gym';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Gym></Gym>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
