import React from 'react';
function Resume() {
    return (
        <>
            <div id='resume'>
                <div className="container">
                    <div className="row">
                        <div className="resume col-md-12" id='resume'>
                            <h2>Resume</h2> 
                            <div className="education-header">
                                <div className="header">
                                    <div className="icon-box">
                                        <i class="bi bi-book"></i>
                                    </div>
                                    <div className="education">
                                        <h6 className='mark-on mt-2'>Eduction</h6>
                                        <br />
                                    </div>
                                </div>

                                <div className="educations">
                                    <h4>Manipal University Jaipur</h4>
                                    <span>2023 - On Going</span>
                                    <p className='red'>To secure a challenging position as IT professional to use my software and analytical skills for the progress of organisation and attain career targets.</p>
                                    <h4>Red & White Multimedia Education</h4>
                                    <span>2023 - 2024</span>
                                    <p className='red'>
                                        web development experience, content management knowledge, multimedia programming, time management, and creativity. Successful candidates usually hold at least and Associate's Degree in a relevant field, such as Bachelor of Computer Applications.
                                    </p>
                                    <h4>Civil Engineering</h4>
                                    <span>2019 - 2021</span>
                                    <p className='red'>
                                        Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
                                    </p>
                                </div>
                            </div>
                            <br />

                            <div className="skills mb-4 ">
                                <h3 id='imwhat'>My Skills</h3>
                                <br />
                                <div className="skill">
                                    <h5>Web Design</h5>
                                    <div className="progress" style={{height:"13px"}}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "95%", backgroundColor: '#ceb15a' }}
                                            aria-valuenow={95}
                                            aria-valuemin={0}
                                            aria-valuemax={100}>
                                            95%
                                        </div>
                                    </div>
                                    <br />
                                    <h5>Web Developing</h5>
                                    <div className="progress"  style={{height:"13px"}}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "90%", backgroundColor: '#ceb15a' }}
                                            aria-valuenow={80}
                                            aria-valuemin={0}
                                            aria-valuemax={100}>
                                            90%
                                        </div>
                                    </div>
                                    <br />
                                    <h5>GitHub</h5>
                                    <div className="progress"  style={{height:"13px"}}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "95%", backgroundColor: '#ceb15a' }}
                                            aria-valuenow={80}
                                            aria-valuemin={0}
                                            aria-valuemax={100}>
                                            95%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Resume;