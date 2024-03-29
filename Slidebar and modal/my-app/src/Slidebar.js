import React from 'react';
import {social, links} from './Data'
import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './Context'


const Slidebar = () => {
    const {isSidebarOpen,closeSidebar}=useGlobalContext()
    return (
        <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'} sidebar `}>
            <div className="sidebar-header">
                <img src="" className="logo" alt=""/>
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes/>
                </button>
            </div>
            <ul className="links">
                {
                    links.map((link)=>{
                        const {id,url,text,icon}=link;
                        return(
                            <li key={id} >
                                <a href={url}>
                                    {icon} 
                                    {text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="social-icons">
                {
                    social.map((link)=>{
                        const {id,url,icon}=link
                        return(
                            <li key={id} >
                                <a href={url}>{icon} </a>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    );
}



export default Slidebar;