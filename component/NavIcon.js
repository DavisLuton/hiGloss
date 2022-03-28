import {React,  useState } from "react";
import {  IconButton, Button } from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons";


const NavIcon = () => {
    const [isActive, setActive] = useState(false)
    return ( 
        <IconButton
            as='button'
            onClick={()=>setActive(!isActive)}
            icon={isActive ? <CloseIcon/> : <HamburgerIcon/>} 
            
        />
    )}
 
export default NavIcon;
