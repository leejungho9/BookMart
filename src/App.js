import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import Orders from './components/Orders';
import Header from './components/Header';
import Footer from './components/Footer';
import AppStateProvider from './providers/AppStateProvider';

function App() {
  return (
    <AppStateProvider>

       <Header />
       <div className="container">
         <Books />
         <Orders />
       </div>
       <Footer/>
    </AppStateProvider>
  );
}

export default App;
