import './App.css';
import Contact from './Components/Contact'

function App() { 
  return (
    <div className="App">
      <Contact name="titi" avatar="https://randomuser.me/api/portraits/women/66.jpg" online/>
      <Contact name="toto" avatar="https://randomuser.me/api/portraits/men/14.jpg" online/>
      <Contact name="tata" avatar="https://randomuser.me/api/portraits/women/70.jpg" />
    </div>
  );
}

export default App;
