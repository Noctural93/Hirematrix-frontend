import React from 'react'

const ResumeBuilderPage = () => {
  return (
    <div className='resume-builder-page-main-container'>
      {/* ----------Hero Section ------------------ */}
      <header className = "resumeBHead">
        <h1 className = "resume-builder-h1">JobReady Toolkit</h1>
        <nav id= "resume-builder-navbar">
            <ul>
                <li className = "resume-builder-list"><a href="#" class="active">Resumes</a></li>
                {/* <li className = "resume-builder-list"><a href="#">Cover Letters</a></li> */}
            </ul>
        </nav>
    </header>
    {/* --------------- Main Section ------------------ */}
    <main>
        <div className="content">
            <img className = "resume-builder-MainIcon" src="/src/assets/resumeBuilderPage/resume-builder-icon1.png" alt="Resume Icon" class="icon"></img>
            <h2>Create your best resume to advance career</h2>
            <p>Build from scratch or pre-fill it with LinkedIn, or Apna profile</p>
            <button className="resume-builder-btn">+ Create new resume</button>
        </div>
    </main>
    <div className="cards-container">
    <div className="card">
        <img src="/src/assets/resumeBuilderPage/resume-builder-icon3.png" alt="Resume Icon"></img>
        <h3>Your Resumes</h3>
        <p>Where your skills and experiences truly shine through!</p>
        <button>Explore Resumes</button>
    </div>

    <div className="card">
        <img src="/src/assets/resumeBuilderPage/resume-builder-icon2.png" alt="Analysis Icon"></img>
        <h3>ATPC Score</h3>
        <p>Review your resume for errors and unlock expert insights to elevate your application!</p>
        <button>Check your resume score</button>
    </div>

    <div className="card">
        <img src="/src/assets/resumeBuilderPage/resume-builder-icon4.png" alt="Share Icon"></img>
        <h3>Job-Specific Resume</h3>
        <p>Explore customized resumes that align with your career path!</p>
        <button>Find Your Fit</button>
    </div>
</div>


    </div>
    
  )
}

export default ResumeBuilderPage
