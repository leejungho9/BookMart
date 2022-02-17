import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import Orders from './components/Orders';
import Header from './components/Header';
import Footer from './components/Footer';
import Provider from './providers/Provider';

function App() {
  return (
    <Provider>

       <Header />
       <div className="container">
         <Books />
         <Orders />
       </div>
       <Footer/>
    </Provider>
  );
}

export default App;
