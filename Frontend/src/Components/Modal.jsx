// import React, { useState } from 'react';
// import { BsPlayCircle } from "react-icons/bs";
// import { IoClose } from "react-icons/io5";
// import '../Styles/Modal.css'
// const Modal = () => {
//     const [isModalOpen, setModalOpen] = useState(false);

//     // Function to open the modal
//     const openModal = () => {
//         setModalOpen(true);
//     };

//     // Function to close the modal
//     const closeModal = () => {
//         setModalOpen(false);
//     };
//     return (
//         <div>
//             <div className="video-container">
//                 <img src={''} alt="" />
//                 <button onClick={openModal} className='play-btn'><BsPlayCircle /></button>

//                 {isModalOpen && (
//                     <div className="modal">
//                         <button className='close-button' onClick={closeModal}><IoClose /></button>
//                         <div onClick={closeModal} className="overlay"></div>
//                         <div className="modal-content">
//                             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/01y-SPjNOH8?si=wtxiNKqAuW3HplQ5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

//                         </div>
//                     </div>
//                 )}

//             </div>
//         </div>
//     )
// }

// export default Modal
