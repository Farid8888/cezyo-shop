import {createPortal} from 'react-dom'
import classes from './Modal.module.css'



const Back =()=>{
return <div className={classes.back}></div>
}

const Overlay =()=>{
return(
    <div>

    </div>
)
}




export const Modal = ()=>{
return (
    <>
    {createPortal(<Back/>,document.getElementById('modal')!)}
    {createPortal(<Overlay></Overlay>,document.getElementById('modal')!)}
    </>
)
}