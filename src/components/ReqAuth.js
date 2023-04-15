
import { navigate } from 'react-router-dom'
import {useAuth} from './Auth'

const ReqAuth = ({childern})=>{
  const auth = useAuth();
  if(!auth.user){
    return <navigate to="/" />
  }
    return childern;
};
export default ReqAuth
