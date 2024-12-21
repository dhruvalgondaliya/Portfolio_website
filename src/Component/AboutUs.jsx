import React from 'react';

function AboutUs() {
    return (
        <>
        {/* This is  a About Page */}
            <div id="AboutUS">
                <div className="container" id="aboutUs">
                    <div className="row">
                        <div className="col-md-12" >
                            <h2 className="">About Me</h2>
                            <p className='web'> I'm Web Developer from Ahemdabad. Motivated and detail-oriented Computer Science graduate with a strong background in full-stack web development. Proficient in modern technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. Completed Skill base Course  at [Red & White Multimedia Eduction ] and  where I developed and maintained web applications, ensuring optimal performance and user experience. Proven ability to work in collaborative environments and tackle complex technical challenges through academic projects and hackathons. Eager to contribute my skills and enthusiasm to a dynamic development team in a full-stack developer role. </p>
                            <p className='web' id="job"> My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. </p>   
                        </div>
                    </div>
                    <div className="row">
                        <div className="hello col-md-12">
                            <span className='mt-2 ms-2' id='imwhat'>What I'm Doing</span>
                            <br />
                            <div id="model">
                                <div className="model-one">
                                    <i class="bi bi-window-split" ></i>
                                    <div className="tex">
                                        <h4>Web Design</h4>
                                        <p className='aboutptag'>The most modern and high-quality design made at a professional level.</p>
                                    </div>
                                </div>

                                <div className="model-one">
                                    <i class="bi bi-code-slash"></i>
                                    <div className="tex">
                                        <h4>Web Devlopment</h4>
                                        <p className='aboutptag'>
                                            High-quality development of sites at the professional level.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs;
