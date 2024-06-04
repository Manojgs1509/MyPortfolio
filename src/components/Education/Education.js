import React from 'react'
import styled from 'styled-components'
import {education} from '../../data/Data'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from '../Card/EducationCard';
 

const Container = styled.div`

   display:flex;
   align-items:center;
   justify-content:center;
   position:relative;
   flex-direction:column;
   z-index:1;
   margin-bottom:20px;
   margin-top:50px;
`;

const Wrapper = styled.div`
    
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   align-items:center;
   width:100%;
   max-width:1100px;
   gap:12px;
   position:relative;
  
`;

const Title = styled.div`
    
  font-size:42px;
  font-weight:600;
  margin-top:20px;
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
     color:${({ theme }) => theme.text_secondary};
     @media screen and (max-width :768px){
      font-size:16px;
            
      }
 `;

 const TimeLineSection=styled.div`
    
     width:100%;
     display:flex;
     align-items:center;
     justify-content:center;
     flex-direction:column;
     max-width:1000px;
     gap:12px;
     margin-top:10px;
 `;

const Education = () => {
  return (
     <Container id="education">
         <Wrapper>
             <Title>Education</Title>
             <Desc>My education </Desc>
             <TimeLineSection>
                  <Timeline>
                        {
                          education.map((education,index)=>(
                              
                              <TimelineItem>
                                   <TimelineSeparator>
                                       <TimelineDot variant='outlined' color='secondary'/>
                                         {index !== education.length -1 &&  (<TimelineConnector style={{background:"#854CE6"}}/>)}
                                   </TimelineSeparator>
                                    <TimelineContent sx={{py:'12px' , px :2}}>
                                         <EducationCard education={education}/>
                                    </TimelineContent>
                              </TimelineItem>
                          ))
                        }
                  </Timeline>
             </TimeLineSection>
         </Wrapper>
     </Container>
  )
}

export default Education