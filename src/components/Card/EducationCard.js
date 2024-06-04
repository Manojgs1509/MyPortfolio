import React from 'react'
import styled from 'styled-components'



const Card=styled.div`
  
   width:650px;
   display:flex;
   justify-content:space-between;
   gap:12px;
   padding:12px 16px;
   transition:all 0.3s ease-in-out;
   border-radius:10px;
   flex-direction:column;
   position:relative;
   overflow:hidden;
   box-shadow:0 0 10px rgba(0 ,0,0,0.1);
   
   &:hover{
      
   box-shadow:0 0 10px rgba(0 ,0,0,0.2);
   transform:translateY(-5px);
      
   }

   @media screen and (max-width : 768px){
      
       padding:10px;
       gap:8px;
       width:300px;
   }

   border :1px solid #306ee8;
   box-shadow:rgba(23,92,230,0.15) 0px 4px 24px;

`;
 
const Top=styled.div`
  
    display:flex;
    gap:12px;
    width:100%;
`;

const Logo=styled.img`

    height:50px;
    background-color:#000;
    margin-top:4px;
    border-radius:10px;
   
    @media screen and (max-width : 768px){

        height:40px;
    }
`;

const Body=styled.div`
   
    display:flex;
    flex-direction:column;
    width:100%;
`;

const Name=styled.div`
   
font-size:18px;
font-weight:600;
color:${({theme})=> theme.text_primary+99};

@media screen and (max-width : 768px){
      
    font-size:14px;
}
`;

const Degree=styled.div`
    
    font-size:14px;
    font-weight:500;
    color:${({theme})=> theme.text_secondary+99};

    @media screen and (max-width : 768px){
      
        font-size:12px;
    }

`;

const Date=styled.div`
font-size:12px;
font-weight:400;
color:${({theme})=> theme.text_secondary+99};

@media screen and (max-width : 768px){
  
    font-size:10px;
}

   
`;

const Description=styled.div`
    
    width:100%;
    font-size:15px;
    font-weight:400;
    color:${({theme})=> theme.text_primary+99};
   margin-bottom:10px;

   @media screen and (max-width : 768px){
      
    font-size:12px;
}
 `;

 const Span=styled.span`
 
 overflow: hidden;
 display: -webkit-box;
 max-width: 100%;
 -webkit-line-clamp: 4;
 -webkit-box-orient: vertical;
 text-overflow: ellipsis;
 
 `;

 const Grade=styled.div`
     
    font-size:14px;
    font-weight:500;
    color:${({theme})=> theme.text_secondary+80};

    @media screen and (max-width : 768px){
      
        font-size:12px;
    }

 `;

const EducationCard = ({education}) => {
  return (
       
    <Card>
          <Top>
               <Logo src={education.img} alt="educion-img"/>
              <Body>
                   <Name>{education.school}</Name>
                   <Degree>{education.degree}</Degree>
                   <Date>{education.date}</Date>
              </Body>
          </Top>
          <Grade>{education.grade}</Grade>
          <Description>
              <Span>{education.desc}</Span>
          </Description>
    </Card>
  )
}

export default EducationCard