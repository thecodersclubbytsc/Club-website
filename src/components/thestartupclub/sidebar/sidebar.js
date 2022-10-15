import React from 'react'
import { sidebarContent } from './sidebarContent'
import '../css/sidebar.css'

function sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-social">
                {sidebarContent.map((val,key)=>{
                    return(
                        <li key={key} className="social-list"><a href={val.path} target="_blank" rel="noreferrer"><div className="social-icon"> {val.icon} </div></a> </li>
                    )
                })}

            
            </ul>
        </div>
    )
}

export default sidebar
