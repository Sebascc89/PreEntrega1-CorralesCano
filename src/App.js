import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Empaques compostables hechos de PLA, caña de azúcar y papel'}/>
    </div>
  );
}

export default App;
