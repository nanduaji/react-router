import Header from "./components/Header";
import {BrowserRouter as Router,Routes, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
          </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
