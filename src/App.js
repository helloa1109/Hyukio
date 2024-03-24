import logo from './logo.svg';
import './App.css';
import FirstSection from './Component/FirstSection';
import SecondSection from "./Component/SecondSection";
import ThirdSection from './Component/ThirdSection';
import Footer from './Component/FiveSection';
import FourSection from './Component/FourSection';
import { styled } from 'styled-components';

function App() {

  return (
    <Page>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {/* <FourSection/> */}
      <Footer/>
    </Page>
  );
}

const Page = styled.div`
  width:100%;
  overflow-x:hidden;
`;

export default App;
