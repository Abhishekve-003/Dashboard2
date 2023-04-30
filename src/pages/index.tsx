import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useState} from 'react'
import { getSession,useSession, signOut } from "next-auth/react"
import Link from 'next/link'
import { ResponsiveContainer, LineChart , Line, XAxis, YAxis , Tooltip, CartesianGrid} from 'recharts'
import Piechart from './piechart'

import {RiCalendarEventLine} from 'react-icons/ri'
import   {BsTags} from 'react-icons/bs'  
import {AiOutlineLike} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'

const Array = [
  {
    name: ' ',
    student: 200,
    fees: 100
  },
  {
    name: 'Week 1',
    student: 380,
    fees: 418
  },
  {
    name: 'Week 2',
    student: 200,
    fees: 140
  },
  {
    name: 'Week 3',
    student: 300,
    fees: 440
  },
  {
    name: 'Week 4',
    student: 220,
    fees: 180
  },
  {
    name: '',
    student: 440,
    fees: 250
  },
];

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {data:session} = useSession()
   function handleSignOut(){
       signOut()
   }

  return (
    <>
      <Head>
        <title>Home Page</title>
        
      </Head>
     {session ? User(session,handleSignOut): Guest()}
    </>
  )
}

// Guest 
function Guest(){
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Guest Homepage</h3>
      <div  className='flex justify-center' >
        <Link className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray' href={'/login'} > Sign In </Link>
        </div>
    </main>
  )
}
//Authorize User
 
function User(session, handleSignOut){
  return(
    <div className='poora'>
    <main >
      <div className='dashb'>
        
      <div className="boardname">
        <h1>Dashboard</h1>
      </div>
      <div className="search_box">
        
      </div>
      <form action="">
        <input type="text" name="" className='search_box'placeholder='Search...' id="" />
      </form>
      <div className="image">
        <img src={session.user.image} alt="vv" />
      </div>
      <div className='reven '>
        <RiCalendarEventLine className='relative1 iconss' />
        <h4>Total Revenues</h4>
        <h1>2,129,430</h1>
       
      </div>
      <div className="transc">
        <BsTags className='relative iconss' />
         total Transactions
          <h1>1,520</h1>
        </div>
      
      <div className="likes">
        <AiOutlineLike className='relative iconss'  />
       <h4>Total Likes</h4> 
       <h1>9,721</h1>
      </div>

      <div className="users">
        <FiUsers className='relative iconss'/>
        <h4>Total Users</h4>
        <h1>892</h1>
      </div>
      
<div className="activity">
  <h1 >  Activities</h1>
  <p>May to June 2021 </p>
  <ol className='user1'>
  <li> <span className="dot3"></span> Guest</li>
  <li> <span className="dot1"></span> User</li>
  </ol>
  <div className="chart">
    <h4>
      <ResponsiveContainer width="100%"   aspect={3}>
        <LineChart data={Array} 
        // width={500} 
        // height={300}
        
        >
          <XAxis dataKey="name"/>
          
          <YAxis  />
          <CartesianGrid strokeDasharray="3 " />
          <Tooltip/>
          <Line type="monotone" dataKey="student" stroke='red' />
          <Line type="monotone" dataKey="fees" stroke='green' />
        </LineChart>
      </ResponsiveContainer>
    </h4>
  </div>
</div>
  <div className="products ">
    <h1>Top Products</h1>
    <p>May  to June 2021 </p>
    <div className="circle">
       
       
        
      <ol>
        <li> <span className="dot1"></span> Basic Tees</li>
        <p>55</p>
        <li><span className="dot2"></span> Custom Short Pants</li>
        <p>31</p>
        <li><span className="dot3"></span> Super Hoodies</li>
        <p>14</p>
      </ol>
    </div>
    <div className='pie_chart'>

     <Piechart/>
    </div>
  </div>
  <div className="today ">
    <h1>Today schedule</h1>
    <div className="see">
      See All 
    </div>
       <div className="line1">
        
       </div>
      <h2>Meeting with suppliers from Kuta Bali</h2>
    <p>14 to 15</p>
    <p>at Sunset Road, Kuta, Bali</p>
    <div className="line2">
        
       </div>
    <h2>Check operation at Giga Factory</h2>
    <p>18 to 20</p>
    <p>at Central Jakarta</p>
  </div>
     <div className='dashbox'>
      <h1>Board </h1>
      <h2>Dashboard</h2>
      <h3>Transaction</h3>
      <h3>Schedules</h3>
      <h3>   Users</h3>
      <h3>Settings</h3>
      <h4>Help</h4>
      <h5>Contact Us</h5>
     </div>
      </div>

     
  </main> 
  </div>
  )
}






export async function getServerSideProps({req}){
  const session = await getSession ({ req })

 if(!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
 }

  return {
    props: {session}
  }
}