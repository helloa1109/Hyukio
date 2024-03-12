import logo from './logo.svg';
import './App.css';
import LayoutPage from './Page/LayoutPage';
import FirstSection from './Component/FirstSection';
import SecondSection from "./Component/SecondSection";
import ThirdSection from './Component/ThirdSection';
import { Container } from './style/Layout';
import Navbar from './Component/Navbar';

function App() {

  return (
    <Container>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Container>
  );
}

export default App;
