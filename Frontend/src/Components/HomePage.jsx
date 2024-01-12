import React, { useState } from 'react'
import '../Styles/HomePage.css'
import Navbar from './Navbar'

import { nanoid } from 'nanoid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

  const [id, setId] = useState('')
  const [participants, setParticipants] = useState('');
  const [format, setFormat] = useState('');

  const [selectError, setSelectError] = useState('');

  const location = useNavigate()

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  const handleCreateTournament = async (e) => {
    // prevent refresh of page
    e.preventDefault()


    const id = nanoid(5);

    const body = {
      id,
      participants,
      format
    }
    console.log(body);

    const result = await axios.post('http://localhost:8005/create-tournament', body)
    alert(result.data.message);

    location('/overview/'+id)
  }


  return (
    <div>
      <div>
        <Navbar />
        <div className='container'>
          <div className="Home-banner">
            <div className="banner-wrap">
              <div>
                <h1>Football Tournament</h1>
                <h4>Create your tournament now! It's free and no sign-up required.</h4>
              </div>

              <div className="card flex justify-content-center">
                <select name="" id="" onChange={(e) => setParticipants(e.target.value)}>
                  <option value="" disabled hidden selected>Select your participents</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

              </div>

              <div className="format-section">
                <h4>Format</h4>
                <form>
                  <div className='choosing'>
                    <div className='knockout'>
                      <input type="radio" name="format" value="Knockout" id='knockout' onChange={handleFormatChange} checked={format === 'Knockout'} />
                      <label htmlFor="knockout">Knockout Bracket</label>
                    </div>

                    <div className='elimination'>
                      <input type="radio" name="format" value="Double-Elimination" id='doubleElimination' onChange={handleFormatChange} checked={format === 'Double-Elimination'} />
                      <label htmlFor="doubleElimination">Double-Elimination Bracket</label>
                    </div>

                    <div className='league'>
                      <input type="radio" name="format" value="Round-Robin" id='roundRobin' onChange={handleFormatChange} checked={format === 'Round-Robin'} />
                      <label htmlFor="roundRobin">Round-robin League</label>
                    </div>

                    <div className='multistage'>
                      <input type="radio" name="format" value="Multistage" id='multistage' onChange={handleFormatChange} checked={format === 'Multistage'} />
                      <label htmlFor="multistage">Multistage: Round-robin Groups + Knockout Bracket</label>
                    </div>
                  </div>
                </form>
                {selectError && <p className='text-danger'>{selectError}</p>}

              </div>

              <div className="accept">
                <p>Don't worry, you can customize more settings later!</p>
                <button onClick={(e) => handleCreateTournament(e)}>CREATE TOURNAMENT</button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage

