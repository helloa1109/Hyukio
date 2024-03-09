import logo from './logo.svg';
import './App.css';
import LayoutPage from './Page/LayoutPage';
import FirstSection from './Component/FirstSection';
import SecondSection from "./Component/SecondSection";
import ThirdSection from './Component/ThirdSection';
import FourSection from './Component/FourSection';
import FiveSection from './Component/FiveSection';
import { Container } from './style/Layout';
import Navbar from './Component/Navbar';

function App() {

  return (
    <Container>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
    </Container>
  );
}

export default App;
