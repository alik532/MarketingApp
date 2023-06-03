import './App.css';
import Header from './components/Header'
import heroImg from './images/hero.png'
import heroDecor1 from './images/heroDecor1.png'
import heroDecor2 from './images/heroDecor.png'
import Clients from './components/Clients'
import Container from './components/Container';
import Solutions from './components/Solutions';
import Statistics from './components/Statistics';
import HappyClients from './components/HappyClients';
import Subscribe from './components/Subscribe'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='hero' style={{backgroundImage: `url(${heroImg})`}}>
        <h1 className='heroContent'>
          <div className='heroTitle'>
            Tell a better <br/> brand story
          </div>
          <div className='heroDescription'>
            Automate the way you search through hashtags and suggested <br/>
            profiles to find results 100x faster.
          </div>
          <button className='heroButton'>Request Demo</button>
        </h1>
        <div className='heroDecor'>
          <img src={heroDecor1} alt=''/>
          <img src={heroDecor2} alt=''/>
        </div>
      </div>
      <Container>
        <Clients/>
        <Solutions/>
      </Container>
      <Statistics/>
      <Container>
        <HappyClients/>
        <Subscribe/>  
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
