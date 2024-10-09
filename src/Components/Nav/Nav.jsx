//Import Nav.css.........
import './Nav.css'

//Import Router Link........
 import {Link, NavLink} from 'react-router-dom'

 //Import Logo..........
import Logo from '../../assets/logo.png'

 //Import NavData.............
import {navLinks} from '../../Data/Data'

//import Menu-icons...........
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

//import use State..........
import {useState} from 'react';

export default function Nav(){

    //use State For NavLinks Show and Hide..........
    const[isNavLinksShowing, setIsNavLinkShowing] = useState(false);

        //..........Window Scroll Nav-Link Effects..........
    if(innerWidth < 1024){
        window.addEventListener('scroll',()=>{
            document.querySelector('.nav-Links').classList.add('navLinksHide');
            setIsNavLinkShowing(false);
        
        })
    };
    window.addEventListener('scroll',()=>{
        document.querySelector('nav ').classList.toggle('navShadow', window.scrollY > 0);
    
    })
       
    return (
        <nav>
            <div className='container nav-container'>
                {/*............logo..........*/}
               <Link to={'/'} className="logo flex">
                <img src={Logo} alt="" style={{ width : '90%'}} />
                <h1 className='font-bold mt-[2%]' style={{fontSize:'9px'}}>ALL A HANDYMAN & CONSTRUCTOR <br /></h1>
               </Link> 

               {/*....Nav-Links.......*/}
               <ul className={`nav-Links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide' }`}>
                {
                    navLinks.map(({ name, path }, index) => {
                    return (
                        <li key={index}>
                        <NavLink to={path} className={navLinks.isActive ? 'active' : ''}>
                            {name}
                            
                        </NavLink>
                        
                        </li>
                        
                    );
                    })
                    
                }
                  {/* <Link to={'/'} className="logo hidden md:flex">
                <img src={Logo} alt="" style={{height : '50px', width : '100%'}} />
                <h1 className='font-bold mt-3' style={{fontSize:'12px'}}>HandyMan LLC</h1>
               </Link>  */}
                </ul>
               {/*....Nav-Right.......*/}
               <div className="nav-right">

             


                {/* {
                    navRight.managements.map((item, index)=>{
                       return(
                        <Link key={index}
                        //target='_blank' 
                        className='management-icons'to={item.link}>
                            <item.icon/>
                        </Link>
                       ) 
                    })
                } */}

               
                    <button className='menu-button btn' onClick={()=>
                         setIsNavLinkShowing(!isNavLinksShowing)} >
                        {
                            !isNavLinksShowing ? <VscMenu /> : <GrClose />
                          
                            
                        }
                    </button>
               </div>
            </div>
        </nav>
    )
}