
import React,{useEffect} from 'react'
import {Container , Card , Button} from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css';

  const Cardes = ({ id, name, price, text })=>{
    useEffect( ()=> { AOS.init({duration: 2000}); } ,[]);

    return(

       <Container bg="success" className="text-center p-2 bord-cont " data-aos="zoom-in"
       style={{border:'1px solid #000' ,width:'250px', borderRadius:'20px' }}>
              <h3>{text}</h3>
              <div className="product-buy text-center" >
              <p  >{name}</p>
              <p  >{name}</p>
              <p  >{name}</p>
              <p  >{name}</p>
              <p  >{name}</p>
              <p  >{name}</p>
              <p  >{name}</p>
              <p  >{name}</p>

              <Button style={{backgroundColor:"green" }}>Get Started</Button>
              </div>
       </Container>


      )
    }

  export default Cardes
