import React, { useState } from 'react';
import '../Styles/Fixtures.css'
import { FaCalendarAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GiWhistle } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Fixtures = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>

            <div className="fixture-wrap">
                <div className="result">
                    <h1>FIXTURES AND RESULTS</h1>
                </div>
                <div className='quarterFinel'>
                    <div className="quarter">
                        <h3>Quarterfinals</h3>
                        <div className='q-final'><MdModeEdit /></div>
                    </div>
                </div>
                <div className='first-schedule-set'>
                    <div className='first-schedule'>
                        <div className="first-one">
                            <h4>Match K1R1M1</h4>
                        </div>
                        <div className="first_match">
                            <h5>Match 1</h5>

                            <div className='editing-wrap'>
                                <div className=''>
                                    <div onClick={openModal} className='play-btn'>
                                        <FaCalendarAlt />
                                        <FaLocationDot />
                                        <GiWhistle />
                                    </div>
                                    {isModalOpen && (
                                        <div className="modal">
                                            <button className='close-button' onClick={closeModal}><IoClose /></button>
                                            <div onClick={closeModal} className="overlay"></div>

                                            <div className="modal-content">

                                                <div className="edit_content">
                                                    <h3>Edit Date, Location and Referee</h3>
                                                    <hr id='edit_line-boarder' />
                                                </div>

                                                <div className="time_Date">
                                                    <input type="date" />
                                                    <input type="time" />
                                                </div>
                                                <div className="edit-loaction">
                                                    <input type="text" placeholder='Location' />
                                                </div>
                                                <div className="edit-referee">
                                                    <input type="text" placeholder='Referee Name' />
                                                </div>
                                                <div className="confirm_button">
                                                    <button id='confirm-cancel'>Cancel</button>
                                                    <button id='confirm-save'>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="referee">
                                    <MdModeEdit />
                                </div>
                            </div>
                            <div className="team">
                                <h4>Team #1</h4>
                                <h4>Team #8</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fixtures
