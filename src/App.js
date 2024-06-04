
import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Project from './components/Project/Project';
import Card from './components/card'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import ProjectDetails from './components/ProjectDeatils/ProjectDetails'

const Body=styled.div`
    background-color : ${({theme}) => theme.bg};
    width:100%;
    overflow-x:hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
     <ThemeProvider theme={darkTheme}>
      <Router>
       <Navbar/>
         <Body>
            <About/>
            <Wrapper>
                <Skill/>
                <Education/>
                <Card/>
            </Wrapper>
            <Project openModal={openModal} setOpenModal={setOpenModal} />
            <Card/>
            <Wrapper>
                <Contact/>
            </Wrapper>
            <Footer/>
            {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
         </Body>
         </Router>
     </ThemeProvider>
  );
}

export default App;
