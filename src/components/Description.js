import React from 'react'
import { Button } from 'react-bootstrap';
import {useParams , useNavigate} from 'react-router-dom'
const Description = () => {
    const {description} = useParams();
    const navigate = useNavigate();
    const handleHome=()=>{
        navigate(`/`)
      }
  return (
    <div>
        <div  className='desc'>{description}</div>
        
         <Button onClick={handleHome}> Back to home</Button>

    </div>
  )
}

export default Description