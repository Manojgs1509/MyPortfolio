import React from 'react'
import styled from 'styled-components'
import {Bio} from '../../data/Data'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterContainer=styled.div`
  
   width:100%;
   padding:2rem 0;
   display:flex;
   justify:content:center;

`;

const FooterWrapper=styled.div`

    width:100%;
    display:flex;
    flex-direction:column;
    gap:14px;
    align-items:center;
    padding:1rem;
    color:${({ theme }) => theme.text_primary};
`;

const Logo=styled.h1`
    
   font-size:20px;
   font-weight:600;
   color:${({ theme }) => theme.text_primary};

`;

const Nav=styled.nav`
   
     width:100%;
     max-width:800px;
     display:flex;
     margin-top:0.5rem;
     align-items:center;
     flex-direction:row;
     justify-content:center;
     gap:2rem;


     @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
      }
`;

const NavLink=styled.a`

color:${({ theme }) => theme.text_primary};
text-decoration:none;
font-size:1rem;
transition:color 0.2s ease-in-out;
&:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }

     
`;

const SocialMediaIcons=styled.div`
  
    display:flex;
    margin-top:1rem;
`;

const SocialMediaIcon=styled.a`
  
    display:inline-block;
    margin:0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;



const Footer = () => {
  return (
      <FooterContainer>
          <FooterWrapper>
              <Logo>Manoj G S</Logo>

              <Nav>
              <NavLink href='#about'>About</NavLink>
                  <NavLink href='#skills'>Skills</NavLink>
                  <NavLink href='#education'>Education</NavLink>
                  <NavLink href='#project'>Project</NavLink>
              </Nav>
              <SocialMediaIcons>
                   <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon/></SocialMediaIcon>
                   <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon/></SocialMediaIcon>
                   <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon/></SocialMediaIcon>
                   <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon/></SocialMediaIcon>
              </SocialMediaIcons>
              <Copyright>
                   &copy; 2024 Manoj G S. All Rights reserved.
              </Copyright>
          </FooterWrapper>

      </FooterContainer>
  )
}

export default Footer