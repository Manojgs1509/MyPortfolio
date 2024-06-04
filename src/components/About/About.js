import React from 'react'
import styled from 'styled-components'
import {Bio} from '../../data/Data'
import TypeWritter from 'typewriter-effect'
import Img from '../Images/Manoj G S.jpg'



const  HeroContainer =styled.div`
      
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:1;
  background:${({theme})=> theme.card_light};
  position:relative;
  padding:80px 30px;

  @media screen and (max-width : 640px){
     
    padding:66px 16px;
  }

  @media screen and (max-width : 640px){
     
    padding:33px 16px;
  }

  clip-path:polygon(0 0,100% 0,100% 100%,70% 95%,0 100%);
`;

const Herobg=styled.div`
     
display:flex;
align-items:center;
position:absolute;
justify-content:end
top:50%;
right:0;
left:50%;
bottom:0;
width:100%;
height:100%;
padding:0 30px;
overflow:hidden;
-webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width : 960px){
     justify-content:center;
     padding:0px 0px;
  }

 `;

  const HeroInnerContainer=styled.div`
     
  display :flex;
  justify-content:space-between;
  align-items:center;
   width:100%;
   max-width:1200px;

   @media screen and (max-width : 960px){
     
       flex-direction:column;
  }
  `;

  const HeroLeftContainer=styled.div`
      width:100%;
      order:1;
      @media screen and (max-width :960px){
          
        order:2;
        display:flex;
        align-items:center;
        margin-bottom:32px;
        flex-direction:column;
          
      }

      @media screen and (max-width :640px){
          
        order:2;
        display:flex;
        align-items:center;
        margin-bottom:32px;
        flex-direction:column;
          
      }
  `;
   
  const HeroRightContainer =styled.div`
     
     width:100%;
     order:2;
     display:flex;
     justify-content:end;
     gap:12px;     
     @media screen and (max-width :960px){
          
        order:1;
        align-items:center;
        margin-bottom:82px;
        justify-content:center
          
      }
      @media screen and (max-width :640px){
          
        order:1;
        align-items:center;
        margin-bottom:32px;
        justify-content:center
          
      }
  `;

   const Title=styled.div`
        
      font-size:50px;
      line-height:68px;
      font-weight:700;
      color:${({theme}) => theme.text_primary};

      @media screen and (max-width :960px){
          
        text-align:center;
          
      }

      @media screen and (max-width :640px){
              
      font-size:40px;
      line-height:48px;
      margin-bottom:8px
       
          
      }
   `;

   
   const TitleLoop=styled.div`
        
   font-size:40px;
   line-height:68px;
   font-weight:600;
   display:flex;
   gap:12px;
   color:${({theme}) => theme.text_secondary};

   @media screen and (max-width :960px){
       
     text-align:center;
       
   }

   @media screen and (max-width :640px){
           
   font-size:30px;
   line-height:48px;
   margin-bottom:16px
    
       
   }
      
   `;

   const Span=styled.div`
      
   cursor:pointer;
   color:${({theme}) => theme.primary};

   `;

   const SubTitle=styled.div`
       
   font-size:20px;
   line-height:32px;
   margin-bottom:42px;
   color:${({theme}) => theme.text_secondary+95};

   @media screen and (max-width :960px){
      text-align:center;
      
  }

  @media screen and (max-width :960px){
    
    font-size:16px;
    line-height:22px
      
  }

      
   `;


   const ResumeButton=styled.a`
      
   -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
   
   `;

   const Image = styled.img`
   position: relative;
   width: 100%;
   height: 100%;
   max-width: 400px;
   max-height: 400px;
   border-radius: 50%;
   border: 2px solid ${({ theme }) => theme.primary};
 
   @media (max-width: 768px) {
     max-width: 400px;
     max-height: 400px;
   }
 
   @media (max-width: 640px) {
     max-width: 280px;
     max-height: 280px;
   }
 `;




const About = () => {
  return (
    <div id='about'>
         <HeroContainer>
            <Herobg>
            </Herobg>
            <HeroInnerContainer>
         
                  <HeroLeftContainer>
                       <Title>
                          Hi , I am <br />{Bio.name}
                       </Title>
                       <TitleLoop>
                            I am a 
                             <Span>
                                  <TypeWritter options={{
                                     strings:Bio.roles,
                                     loop:true,
                                     autoStart:true,
                                  }}/>
                             </Span>
                       </TitleLoop>
                       <SubTitle>{Bio.description}</SubTitle>
                       <ResumeButton href={Bio.resume} target='display' >Check Resume</ResumeButton>
                  </HeroLeftContainer>
                  <HeroRightContainer>
                       <Image src={Img} alt=""/>
                  </HeroRightContainer>
            </HeroInnerContainer>
        </HeroContainer> 
    </div>
  )
}

export default About