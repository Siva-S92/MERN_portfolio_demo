import React, { useEffect } from 'react'
import Header from '../../components/Header'
import {Tabs} from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperience from './AdminExperience';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';
import { useNavigate } from 'react-router-dom';


const items = [
    {
      key: '1',
      label: 'Introduction',
      children: <AdminIntro/>,
    },
    {
      key: '2',
      label: 'About',
      children: <AdminAbout/>,
    },
    {
      key: '3',
      label: 'Experiences',
      children: <AdminExperience/>,
    },
    {
      key: '4',
      label: 'Projects',
      children: <AdminProjects/>,
    },
    {
      key: '5',
      label: 'Courses',
      children: <AdminCourses/>,
    },
    {
      key: '6',
      label: 'Contact',
      children: <AdminContact/>,
    },
    
  ];
function Admin() {
  const { portfolioData } = useSelector((state) => state.portfolio);

  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate("/admin-login")
    }
  }, [])
  return (
    <div>
        <Header/>
        <div className="flex justify-end px-5 pt-5"><button className="border rounded bg-red-500 px-3" type='button' onClick={()=>{
          localStorage.removeItem('token');
          navigate("/admin-login");
        }}>log out</button></div>
        <h1 className='text-3xl font-semibold px-32 pt-5'>Portfolio Admin</h1>
        { portfolioData && (
            <div>
            <Tabs defaultActiveKey="1" items={items} className='px-32 sm:px-5'/>
            </div>
        ) }
    </div>
  )
}

export default Admin