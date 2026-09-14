import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import About from './About.jsx';

function App(){
  return (
      <section id="banner">
        <div>
          <p>Hey, it's nice to meet you! I'm</p>
          <h1>Henry Dinh</h1>
          <p>
            New graduate who's interested in crafting memorable UI/UX, <br></br>
            experimenting with web designs, <br></br>
            and developing convenient applications. 
          </p>
        </div>

        <div>
          <h2> Work Experience </h2>
          <p> 
            Araam Sae Consulting             Client Support & Administrative Consultant <br></br>
            Jan 2026 - Present
          </p>
          <ul>
            <li> Actively communicated with clients to establish and iterate processes while supporting administrative responsibilities</li>
          </ul>
          <p>
            Araam Sae Consulting             EA Support <br></br>
            June 2026 - Present
          </p>
          <ul>
            <li> Conducted fractional work with internal staff and assist founder with secretary tasks (reword this) </li>
          </ul>
          <p>
            RW&CO.                           Sales Associate <br></br>
            August 2022 - Jan 2026
          </p>
          <ul>
            <li> Managed product inventory, drove sales for the store, and provided exceptional customer service</li>
          </ul>
          <p>
            Truedan Bubble Tea               Back-of-House<br></br>
            May 2021 - June 2022
          </p>
          <ul>
            <li> Made all in-house toppings, prepared drinks, and tracked inventory and appliances</li>
          </ul>
        </div>

        <div>
          <h3> Education </h3>
          <p>
            Simon Fraser University         Bachelor's Degree in Computing Science <br></br>
            September 2021 - April 2026     Specialized in Visual and Interactive Computing
          </p>
        </div>
      </section>
  )
    
}

export default App
/*
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>
      */