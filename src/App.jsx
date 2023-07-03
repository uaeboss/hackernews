import logo from "./images/y18.svg";
import Navbar from "./components/Navbar";
import Content from './components/Content'
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="home">
            <p className="black">Hacker News</p>
          </div>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="login"></div>
          <div className="content">
            <Content />
          </div>
          <div className="orange"></div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
