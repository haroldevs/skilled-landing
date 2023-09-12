// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Title } from "./components/Title";

function App() {
  return (
    <>
      <Hero />
      <div className="main">
        <Header />
        <main>
          <Title />
          <Cards />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
