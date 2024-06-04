import React from 'react'
import styled from 'styled-components'
import { projects } from '../../data/Data';
import { useState } from 'react';


const Container = styled.div`

   display:flex;
   align-items:center;
   justify-content:center;
   position:relative;
   flex-direction:column;
   z-index:1;
   margin-top:20px;
   background:linear-gradient(343.07 deg,rgba(132,59,206,0.06) 5.71% ,rgba(132,59,206,0.06) 64.3%);
   clip-path:ploygon(0 0,100% 0,100% 100% ,100% 98% ,0 100%);
`;

const Wrapper = styled.div`
    max-width:1330px;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   align-items:center;
   width:100%;
   max-width:1100px;
   gap:12px;
   position:relative;
   padding:10px 0px 10px 0;
  
`;

const Title = styled.div`
    
  font-size:42px;
  font-weight:600;
  text-align:center;
  color:${({ theme }) => theme.text_primary};

  
  @media screen and (max-width :768px){
    margin-top:12px;
    font-size:32px;   
  }

`;

const Desc = styled.div`
   
     font-size:18px;
     max-width:600px;
     text-align:center;
     margin-bottom:10px;
     color:${({ theme }) => theme.text_secondary};
     @media screen and (max-width :768px){
      font-size:16px;
            
      }
 `;

 const CardContainer=styled.div`
      
    display:flex;
    align-items:center;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
  `;
  const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
      filter: brightness(1.1);
  }
 
`

  const Image=styled.img`
      
       width:100%;
       height:180px;
       background:${({theme})=> theme.white};
       border-radius:10px;
       object-fit:cover;
       box-shadow:0 0 16px 2px rgba(0,0,0,0.3);

  `;

  const Tags=styled.div`
  
     width:100%;
     display:flex;
     flex-wrap;wrap;
     gap:8px;
     margin-top:4px;
     align-items:center;

  `;

  const Tag=styled.span`
      
  font-size:14px;
  font-weight:400;
  color:${({theme})=> theme.primary};
  background-color:${({theme})=> theme.primary+13};
  padding:2px 8px;
  border-radius:10px;
 
  `;

  const Details=styled.div`
     
  display:flex;
   width:100%;
   padding:0px 2px;
   gap:0px;
   flex-direction:column;
  
  `;

   
  const ProTitle=styled.div`
     font-size:20px;
     font-weight:600;
      color:${({theme})=> theme.text_secondary};
      overflow:hidden;
     white-space:nowrap;
     max-width:100%;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     overflow: hidden;
     text-overflow: ellipsis;


  `;

  const Date=styled.div`
    font-size:12px;
    font-weight:400;
    color:${({theme})=> theme.text_secondary+88};

    @media screen and (max-width:768px){
         
        font-size:10px;
    }

  `;
  const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 20px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const Project = ({openModal,setOpenModal}) => {
    return (
        <Container id='project'>
            <Wrapper>
                <Title>
                    Projects
                </Title>

                <Desc>Here some of my projects </Desc>

                <CardContainer >
                       {
                         projects.map((project) => (
                             
                            <Card onClick={() =>setOpenModal({state: true, project: project})}>
                                 <Image src={project.image}/>
                                 <Tags>
                                      {
                                        project.tags.map((tag)=>(
                                             
                                             <Tag key={tag}>{tag}</Tag>
                                        ))
                                      }
                                 </Tags>
                                 <Details>
                                      <ProTitle>{project.title}</ProTitle>
                                      <Date>{project.date}</Date>
                                      <Description>{project.description}</Description>
                                 </Details>
                                 
                            </Card>
                         ))
                       }
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Project