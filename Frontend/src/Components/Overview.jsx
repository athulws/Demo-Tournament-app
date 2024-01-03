import React from 'react'

import '../Styles/Overview.css'
import { MdOutlineEdit } from "react-icons/md";
import { FaPalette } from "react-icons/fa";
import { MdQrCode } from "react-icons/md";

const Overview = () => {
    return (
        <div className='overview-wrapper'>
            <div className="settings-container">
                <div className="settings-header">
                    <div className='sheading'><h6>Knockout Settings</h6></div>
                    <button><MdOutlineEdit /></button>
                </div>

                <div className="settings-body">
                    <ul>
                        <li>
                            <div className='round-info'>
                                <span>First Round</span>
                            </div>
                            <div className='round-data'>
                                <span>Seeded</span>
                            </div>
                        </li>
                        <li>
                            <div className='final-place-info'>
                                <span>Third place final</span>
                            </div>
                            <div className='final-place-data'>
                                <span>no</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="details-container">
                <div className='details-wrapper'>
                    <div className="details-header">
                        <div className='dheading'>
                            <h6>Details</h6>
                        </div>
                        <button><FaPalette /></button>
                        <button><MdOutlineEdit /></button>
                    </div>
    
                    <div className="details-body">
                        <ul>
                            <li>
                                <div className='sport-info'>
                                    <span>Name</span>
                                </div>
                                <div className='sport-name'>
                                    <span>Knockout Tournament of Football</span>
                                </div>
                            </li>
                            <li>
                                <div className='sport-type-info'>
                                    <span>Sport</span>
                                </div>
                                <div className='sport-type-name'>
                                    <span>Football</span>
                                </div>
                            </li>
                            <li>
                                <div className='sport-url-info'>
                                    <span>URL</span>
                                </div>
                                <div className='sport-url-name'>
                                    <a href='#'>fdshfkjhkrgufdfdkj</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className='qr-btn'>
                    <span><MdQrCode /></span>
                    <p>Print QR Code to Share Your Tournament</p>
                </button>
            </div>

            <div className="teams-container">
                <div className="teams-header">
                    <div className='theading'>
                        <h6>Teams</h6>
                    </div>
                    <button><MdOutlineEdit /></button>
                </div>

                <div className="teams-body">
                    <ul>
                        <li>
                            <div className='team-name'>
                                <span>Team#1</span>
                            </div>
                        </li>
                        <li>
                            <div className='team-name'>
                                <span>Team#2</span>
                            </div>
                        </li>
                        <li>
                            <div className='team-name'>
                                <span>Team#3</span>
                            </div>
                        </li>
                        <li>
                            <div className='team-name'>
                                <span>Team#4</span>
                            </div>
                        </li>
                        <li>
                            <div className='team-name'>
                                <span>Team#4</span>
                            </div>
                        </li>
                        <li>
                            <div className='team-name'>
                                <span>Team#5</span>
                            </div>
                        </li>
                        <li>
                            <div className='team-name'>
                                <span>Team#6</span>
                            </div>
                        </li>
                        <li>
                            <div className='team-name'>
                                <span>Team#7</span>
                            </div>
                        </li>
                        <li>
                            <div className='team-name'>
                                <span>Team#8</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>            
        </div>
    )
}

export default Overview
