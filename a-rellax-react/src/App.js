import './App.css';
import Parallax from 'react-rellax';
import Button from '@material-ui/core/Button';

//components
import ButtonAppBar from './components/appbar/appbar';
//illustrations
import Icon from './components/illustration/Illutration';


function App() {
  return (
    <>
    <ButtonAppBar />
    <div className="app">
      <div className = 'left-side'>
        <Parallax speed = { 7 } >
        <h1>kaos</h1>
        </Parallax>
        <Parallax speed = {5}><p className = "paragraphs">Find yourself someone who can calm your chaos</p></Parallax>
        <Parallax speed = {3}><p className = "paragraphs">Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel dolores corrupti eligendi iure quam sint labore vitae animi error.</p></Parallax>
        <Parallax speed = {1}><p className = "paragraphs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quasi esse libero voluptates odit dolor unde quas recusandae maxime incidunt!</p></Parallax>
        <Button style = {{marginTop: '50px'}} variant="contained" color ="primary">
        Unleash
        </Button>
      </div>

      <div className="right-side">
        <Parallax speed={-10}><Icon /></Parallax> 
        </div> 
      </div>
      <div className="lower-section">
        <h2 style= {{position: 'relative', top: '60vh', left: '45vh'}}>It's a cruel and random world, but the chaos is all so beautiful.</h2>
      </div>    
    </>
  );
}

export default App;
