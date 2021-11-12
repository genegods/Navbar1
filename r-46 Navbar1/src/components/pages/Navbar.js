import React, {useState} from 'react'
import {MdAttachMoney} from 'react-icons/md'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState(false)


    // function for display menu
    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
       <React.Fragment>
           <section>
               <div className='bg-red-300 w-full h-14'>
                   <div className='mx-5 flex justify-between items-center md:mx-10 lg:mx-20'>
                       {/* logo */}
                       <div className='text-2xl h-14 flex items-center'>
                           <MdAttachMoney/>
                           <p>Money</p>
                       </div>

                       {/* menu */}
                       <div className='text-2xl md:hidden'>
                           {
                               (menu === false)?<AiOutlineMenu onClick={handleMenu}/> : <AiOutlineClose onClick={handleMenu}/> 

                           }
                       </div>

                          {/* nav-items large screen*/}
                   <div className='hidden md:block'>  
                       <ul className="text-2xl w-full h-14 bg-red-300 flex space-x-8 items-center">
                         <Link to='/'><li className='text-center border-b-4 border-blue-600'>Home</li></Link>
                         <Link to='/services'> <li className='text-center border-b'>Services</li></Link>
                         <Link to='/products' > <li className='text-center border-b'>Products</li></Link>
                         <Link to='/about'><li className='text-center border-b'>About Us</li></Link>
                         <Link to='/contact'><li className='text-center border-b'>Contact Us</li></Link>
                       </ul>
                       
                   
                   </div>
                   </div>


                   {/* nav-items mobile*/}
                   <div>
                       {
                           (menu===false)? null:
                           <ul className="text-2xl w-full h-44 bg-red-300">

                         <Link to='/'><li className='text-center border-t'>Home</li></Link>
                         <Link to='/services'> <li className='text-center border-t'>Services</li></Link>
                         <Link to='/products' > <li className='text-center border-t'>Products</li></Link>
                         <Link to='/about'><li className='text-center border-t'>About Us</li></Link>
                         <Link to='/contact'><li className='text-center border-t'>Contact Us</li></Link>
                       </ul>
                       }
                   
                   </div>
                   
               </div>
           </section>
       </React.Fragment>
    )
}

export default Navbar
