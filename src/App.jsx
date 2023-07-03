import logo from "./images/y18.svg";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="wrapper">
        <div class="container">
          <div class="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div class="home">
            <p className="black">Hacker News</p>
          </div>
          <div class="navbar">
            <Navbar />
          </div>
          <div class="login"></div>
          <div class="content"></div>
          <div class="footer"></div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
