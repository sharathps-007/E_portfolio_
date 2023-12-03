import './App.css';
import './styles.css';
import Navigation from './components/Navigation';
// import Navigation2 from './components/Navigation2';
// import Navigation3 from './components/Navigation3';
// import Navigation4 from './components/Navigation4';
// import ParticleBg from './components/ParticleBg';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About';
import Fun from './components/Fun';
import Cv from './components/Cv';
import Feed from './components/Feed';
import Footer from './components/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import ParticleBg2 from './components/ParticleBg2';

function App() {
  return (
      <div className='background container-fluid' id='bg'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
        <Footer />
        <ParticleBg2 />
      </div> 
  );
}

export default App;
