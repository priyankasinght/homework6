import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (

    <div class="laptop">
      <div class="laptop-screen">
        <div class="webpage">
          <Navbar />
          <Content />
          <Footer />
        </div>
      </div>
    </div>

  );
}

export default App;