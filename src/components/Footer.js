
import {Container} from 'react-bootstrap'

const Footer = ()=>{
  return(
    <div className="text-center mt-5"
    style={{backgroundColor:'#69AB3D' , minHeight:'100%'}}>
        <Container>
           <h3 className="py-5">Contact</h3>
           <ul style={{listStyle:'none'}}>
              <li  className="list-hov "><a href="">
              <img src="./face.jpg" style={{width:'20px',height:'20px', backgroundSize:'cover'}}/>
              <p style={{backgroundColor:'green'}}>facebook</p>
              </a></li>
              <li><a href="#" className="" >
              <img src="./snap.jpg" style={{width:'20px',height:'20px', backgroundSize:'cover'}}/>
              <p style={{backgroundColor:'green'}}>snap</p>
              </a></li>
              <li><a href="#" >
              <img src="./tel.jpg"  style={{width:'20px',height:'20px', backgroundSize:'cover'}}/>
              <p style={{backgroundColor:'green'}}>telegram</p>
              </a></li>
              <li><a href="#" className="">
              <img src="./tik.jpg"style={{width:'20px',height:'20px', backgroundSize:'cover'}} />
              <p style={{backgroundColor:'green'}}>tiktok</p>
              </a></li>
              <li><a href="#" className="">
              <img src="./watsap.jpg" style={{width:'20px',height:'20px', backgroundSize:'cover'}}/>
              <p style={{backgroundColor:'green'}}>watsapp</p>
              </a></li>


           </ul>
        </Container>
    </div>
  )
}
export default Footer
