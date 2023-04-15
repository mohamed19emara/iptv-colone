import React, { useState } from 'react';
import {Button ,Fade,Container } from 'react-bootstrap';


const Content = ()=>{
  const [open, setOpen] = useState(false);

  return(
     <div  style={{marginTop:'100px'}} className="d-flex text-center">
   <Container >
     <Button
     style={{backgroundColor:'green'}}
       onClick={() => setOpen(!open)}
       aria-controls="example-fade-text"
       aria-expanded={open}
     >
       Upgrade Your Vewing And Boost Your Life With IBTV
     </Button>
     <Fade in={open}>
       <div id="example-fade-teyt" className="my-5">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
         labore wes anderson cred nesciunt sapiente ea proident.
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
         labore wes anderson cred nesciunt sapiente ea proident.
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
         labore wes anderson cred nesciunt sapiente ea proident.
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
         labore wes anderson cred nesciunt sapiente ea proident.
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
         labore wes anderson cred nesciunt sapiente ea proident.
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
         labore wes anderson cred nesciunt sapiente ea proident.
       </div>


     </Fade>
   </Container>

     </div>
  )
}
export default Content;
