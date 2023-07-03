import Categories from './components/Categories';
import Header from './components/Header';
import Info from './components/Info/Info';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Info />
    </div> 
  );
}

export default App;
