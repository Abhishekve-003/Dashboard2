
import styles from '../src/styles/Layout.module.css';
export default function Layout({ children}){
    return (
        
           <div className=" min=h-[100vh] w-[100vw] flex">
           <div className='bg-black  flex items-center justify-center w-[40%]' >
            <h1 className='text-white text-7xl font-bold ' >Board</h1>

           </div>
           <div className=" flex bg-[#F5F5F5] items-center justify-center w-[60%] py-10">
            {children}
            </div>


           </div> 
          
       
    )
}