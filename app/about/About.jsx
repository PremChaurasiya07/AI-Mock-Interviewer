import React from 'react'
import './About.css'
const About = () => {
  return (
    <div>
    <div class="about-section">
    <h1>About Us</h1>
    <p>We are a team of passionate developers working on innovative web projects.</p>
</div>

<div class="team-section">
    <h2>Our Team</h2>
    <div class="team-member">
        <h3>Prem Chaurasiya</h3>
        {/* <p>Project Manager</p> */}
 <a href="https://github.com/PremChaurasiya07"><img width="26" height="26" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" style={{position:'relative',paddingLeft:'80px'}}/></a>
    </div>
    <div class="team-member">
   
        <h3>Vikas Chauhan</h3>
        {/* <p>Lead Developer</p> */}
        <a href=""><img width="26" height="26" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" style={{position:'relative',paddingLeft:'80px'}}/></a>
    </div>
    <div class="team-member">
  
        <h3>Mohit Dhage</h3>
        {/* <p>UI/UX Designer</p> */}
        <a href=""><img width="26" height="26" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" style={{position:'relative',paddingLeft:'80px'}}/></a>
    </div>
    <div class="team-member">
 
        <h3>Raj Chorge</h3>
        {/* <p>UI/UX Designer</p> */}
        <a href=""><img width="26" height="26" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" style={{position:'relative',paddingLeft:'80px'}}/></a>
    </div>
</div>

<div class="project-section">
    <h2>Our Project</h2>
    <div class="project">
        <a href=""><h3>AI Mock Interviewer</h3></a>
    </div>
 
</div>
</div>
  )
}

export default About
