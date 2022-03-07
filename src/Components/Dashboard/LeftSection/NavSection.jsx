import React, { useState } from 'react'
import './NavSection.css'
import NavModel from './NavModel';
import cover from '../../../Assets/Image/cover.jpg';
import profile from '../../../Assets/Image/g2.jpeg';
// import {XCircleIcon} from '@heroicons/react/outline'
// import { Mdclear } from "react-icons/md";
const NavSection = () => {
    const [curimage,setimage] = useState(false);
    const [curprof,setprof] = useState(false);
    return (
        <>
            <div className='Nav-container'>

                <div className='backgroung-cover'>
                    <img src={cover} className='bg-img' onClick={()=>setimage(!curimage)}/>
                    {curimage && <NavModel change={curimage} area={"background"}/>}
                </div>

                <div className='Profile'>
                    <img src={profile} className='profile-pic' onClick={()=>setprof(!curprof)} />
                    {curprof && <NavModel change={curprof} area={"profile"}/>}
                </div>

                <div className='info'>
                    <div className='leftsection'>
                        <p className='username'>The Error</p>
                        <p style={{ margin: '6px 0px 13px 0px ', 'font-size':'14px' }}>PRE-FINAL YEAR STUDENT | MERN STACK DEVELOPER | AERONAUTICA SOCIETY DESIGNING HEAD | ACM MEMBER</p>
                        <h5>Uttar Pradesh, India <a href="#">✔Contact info</a></h5>
                        <br />
                        <p className='connections'><h4>500+  connections</h4> <h4>100+  posts</h4></p>
                        <br />
                        <div className='options'>
                            <button className='open'>Open to</button>
                            <button>Add profile Section</button>
                            <button>More</button>
                        </div>

                        <div className='toasting'>
                            <div className='hirirng'>
                                <div className='hiring_leftsection'>
                                    <p><span>Share that you're hiring</span> and
                                        attract qualified candidates.</p>
                                    <a href="#">Get Started</a>
                                </div>
                                <div className='hiring_rightsection'>
                                    <i class="fa fa-remove"></i>
                                </div>
                            </div>
                            <div className='hirirng'>
                                <div className='hiring_leftsection'>
                                    <p><span>Share that you're hiring</span> and
                                        attract qualified candidates.</p>
                                    <a href="#">Get Started</a>
                                </div>
                                <div className='hiring_rightsection'>
                                    <i class="fa fa-remove"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='rightsection'>
                        <div className='sec1'>
                            <p><i class='fas fa-building'></i>Organisation_1</p>
                            <p><i class='fas fa-building'></i>Organisation_2</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default NavSection