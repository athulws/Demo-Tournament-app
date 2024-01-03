import React, { useState } from 'react'
import '../Styles/Tournament.css'
import { MdCloudUpload } from "react-icons/md";
import { FaFileImage } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Tournament = () => {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    return (
        <div>
            <div className="tournamnet-wrap">
                <div className="fixture-title">
                    <main>
                        <form action=""
                            onClick={() => document.querySelector(".input-field").click()}
                        >
                            <input type="file" accept='image/*' className='input-field' hidden
                                onChange={({ target: { files } }) => {
                                    files[0] && setFileName(files[0].name)
                                    if (files) {
                                        setImage(URL.createObjectURL(files[0]))
                                    }
                                }}
                            />

                            {image ?
                                <img src={image} width={60} height={60} alt={fileName} />
                                :
                                <>
                                    <MdCloudUpload color='#1475cf' size={60} />
                                    <p>Upload your file</p>
                                </>

                            }
                        </form>

                        <section className='file-name'>
                            <div className='upload-row'>
                                <FaFileImage color='#1475cf'/>
                                <span className='upload-content'>
                                    {fileName} -
                                    <MdDelete 
                                    onClick={()=>{
                                        setFileName("No selected file")
                                        setImage(null)
                                    }}
                                    />
                                </span>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Tournament