import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';


 const Container=styled.div`
    
    display:flex;
    flex-direaction:column;
    justify-content:center;
    position:relative;
    z-index:1;
    align-items:center;

    @media screen and (max-width : 960px){
      padding:0;
  }
`;

const Wrapper=styled.div`
    
   position:relative;
   display:flex;
   justify-content:space-betweem;
   padding:0px 0px 80px 0px;
   gap:12px;
   align-items:center;
   width:1005;
   max-width:1350px;
   flex-direction:column;


   @media screen and (max-width : 960px){
    
    flex-direction:column;
}
    
`;
const Title=styled.div`
    
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
 `;

 const Desc=styled.div`
 
 font-size: 18px;
 text-align: center;
 max-width: 600px;
 color: ${({ theme }) => theme.text_secondary};
 @media (max-width: 768px) {
     margin-top: 12px;
     font-size: 16px;
 }
 `;

 const ContactForm= styled.form`
    
    width:95%;
    display:flex;
    max-width:600px;
    flex-direction:column;
    padding:32px;
    gap:12px;
    border-radius:16px;
    background-color:${({theme}) => theme.card};
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    margin-top:28px;

 `;

 const ContactTitle=styled.div`
     
    font-size:24px;
    margin-bottom:6px;
    color:${({ theme }) => theme.text_primary};
    font-weight:600;
 `;

const ContactInput=styled.input`
    
     flex:1;
     background-color:transparent;
     border:1px solid ${({ theme }) => theme.text_secondary};
     outline:none;
     font-size:18px;
     color:${({ theme }) => theme.text_primary};
     border-radius:12px;
     padding:12px 16px;

     &:focus{
       
      border: 1px solid ${({ theme }) => theme.primary};
     }
`;

const ContactInputMessage=styled.textarea`
    
flex:1;
background-color:transparent;
border:1px solid ${({ theme }) => theme.text_secondary};
outline:none;
font-size:18px;
color:${({ theme }) => theme.text_primary};
border-radius:12px;
padding:12px 16px;

&:focus{
  
 border: 1px solid ${({ theme }) => theme.primary};
}
    
`;

const ContactButton=styled.input`

  width:100%;
  text-decoration:none;
  border:none;
  padding:12px 16px;
  margin-top:2px;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  border-radius:12px;
  font-size:18px;
  font-weight:600;
  color:${({ theme }) => theme.text_primary};
  text-align:center;
  cursor:pointer;

 `;

const Contact = () => {

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wz4ndb2', 'template_xnev1qz', form.current, 'gIypbLEHyQlhzI98e')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <Container>
    <Wrapper>
      <Title>Contact</Title>
      <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
      <ContactForm ref={form} onSubmit={handleSubmit}>
        <ContactTitle>Email Me 🚀</ContactTitle>
        <ContactInput placeholder="Your Email" name="from_email" />
        <ContactInput placeholder="Your Name" name="from_name" />
        <ContactInput placeholder="Subject" name="subject" />
        <ContactInputMessage placeholder="Message" rows="4" name="message" />
        <ContactButton type="submit" value="Send" />
      </ContactForm>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={()=>setOpen(false)}
        message="Email sent successfully!"
        severity="success"
      />
    </Wrapper>
  </Container>
  )
}

export default Contact