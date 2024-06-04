import React, { useState } from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import {DiCssdeck} from 'react-icons/di'
import {FaBars} from 'react-icons/fa' 
import { Bio } from '../../data/Data';


const Nav = styled.div`
background-color: ${({theme}) => theme.card_light};
height: 80px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media (max-width: 960px) {
    trastion: 0.8s all ease;
}
`;
 const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;
`;

 const NavLogo = styled(LinkR)`
width: 80%;    
padding: 0 6px;
display: flex;
justify-content: start;
align-items: center;
text-decoration: none;
@media (max-width: 640px) {
  padding: 0 0px;
}
`;
 const Span = styled.div`
padding: 0 4px;
font-weight: bold;
font-size: 18px;
`;
 const NavItems = styled.ul`
width: 100%;
display: flex;
align-items: center;
justify-content:center;
gap: 32px;
padding: 0 6px;
list-style: none;

@media screen and (max-width: 768px) {
  display: none;
}
`;

 const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
  color: ${({ theme }) => theme.primary};
}

&.active {
  border-bottom: 2px solid ${({ theme }) => theme.primary};
}
`;


 const GithubButton = styled.a`
border: 1.8px solid ${({ theme }) => theme.primary};
justify-content: center;
display: flex;
align-items: center;
height: 70%;
border-radius: 20px;
color: ${({ theme }) => theme.primary};
cursor: pointer;
padding: 0 20px;
font-weight: 500;
text-decoration: none;
font-size: 16px;
transition: all 0.6s ease-in-out;
&:hover {
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};     
}
@media screen and (max-width: 768px) { 
font-size: 14px;
}
`;

 const ButtonContainer = styled.div`
width: 80%;  
height: 100%;
display: flex;
justify-content: end;
align-items: center;
padding: 0 6px;
@media screen and (max-width: 768px) {
display: none;
}
`;


 const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px) {
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.5rem;
cursor: pointer;
color: ${({ theme }) => theme.text_primary};
}
`;


const MobileMenu=styled.div`
   
     display:flex;
     flex-direction:column;
     justify-content:center;
     gap:16px;
     width:100%;
     top:80;
     right:0;
     box-shadow:0px 5px 10px rgba(0,0,0,0.3);
     padding:12px 40px 12px 40px;
     background:${({theme})=> theme.card_light+99};
     transition:all 0.3s ease-in-out;
     transform: ${({open}) => (open  ? "translateX(0)" : "translateX(100%")};
     opacity:${({open}) => (open  ? "1" : "0")};
     z-index:${({open}) => (open  ? "1" : "-1") };
     

`; 

const MobileMenuLinks=styled(LinkR)`
   
color:${({theme})=> theme.text_primary};
 font-weight:500;
 cursor:pointer;
 text-decoration:none;
 transition:all 0.2s ease-in-out;
 &:hover{
     
    color:${({theme})=> theme.primary}
 }
`;
  
const Navbar = () => {
   
    const [open,setOpen]=useState(false);

  return (
     <Nav>
         <NavContainer>
              <NavLogo to={'/'} >
                <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}><DiCssdeck size={"3rem"}/><Span>Portfolio</Span></a>
              </NavLogo>
              <MobileIcon>
                <FaBars onClick={()=> setOpen(!open)}/>
              </MobileIcon>
              <NavItems>
                  <NavLink href='#about'>About</NavLink>
                  <NavLink href='#skills'>Skills</NavLink>
                  <NavLink href='#education'>Education</NavLink>
                  <NavLink href='#project'>Project</NavLink>
              </NavItems>
              <ButtonContainer>
                  <GithubButton href={Bio.github} target="_blank">GitHub Profile</GithubButton>
              </ButtonContainer>
         </NavContainer>
         {
             open && (
                 <MobileMenu open={open}>
                      <MobileMenuLinks href="#about" onClick={()=> setOpen(!open)}>About</MobileMenuLinks> 
                      <MobileMenuLinks href="#skills" onClick={()=> setOpen(!open)}>Skills</MobileMenuLinks> 
                      <MobileMenuLinks href="#education" onClick={()=> setOpen(!open)}>Education</MobileMenuLinks> 
                      <MobileMenuLinks href="#project" onClick={()=> setOpen(!open)}>Project</MobileMenuLinks> 
                       <GithubButton
                          style={{
                              padding:"10px 10px",
                              background:`${({theme})=> theme.primary}`,
                              width:"max-content",
                              color:"white"
                          }}
                        >GitHub Profile</GithubButton>
                 </MobileMenu>
             )
         }
     </Nav>
  )
}

export default Navbar