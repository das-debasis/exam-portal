import React from 'react';
export const Landing = () => {
    return(
<div className="bdy">
    <div className="landingpage">
      <div className="landtext">
        <span className="good"> GOOD LUCK </span>
        <br />
        <span className="good2"> ON YOUR EXAMS </span>
        <div className="rect"></div>
        <br />
        <span className="body">
          An example of an informal test is a reading test administered by a
          parent to a child. A test may be developed and administered by an
          instructor, a clinician, a governing body, or a test provider. In some
          instances, the developer of the test may not be directly responsible
          for its administration.
        </span>
        <div className="getstarted">
          <a href="Login.js">GET STARTED</a>
        </div>
      </div>
      <img className="landimage" src="main.png" alt="" />
    </div>
    <div className='abt'>
      <h2 style={{color: "black", fontSize: "45px", padding: "30px 0px"}}>
        <u>About e-Exam Portal</u>
      </h2>
      <div style={{padding: "0px 40px 40px"}}>
        <table style={{textAlign: "left", fontSize: "20px"}}>
          <tr>
            <th>
            </th>
            <th>
              <table style={{marginLeft: "50px"}}>
                <tr>
                  <th>
                    <div>
                      <h4>
                        <i className="fa-solid fa-child-reaching"></i> Coaching
                        ClassNamees
                      </h4>
                      <p style={{padding: "0px 30px"}}>
                        Coaching classNamees conducting weekly tests for students
                        preparing for competetive exams like JEE, NEET, CET
                        etc.,
                      </p>
                    </div>
                  </th>
                  <th>
                    <div>
                      <h4><i className="fa-solid fa-school"></i> School</h4>
                      <p style={{padding: "0px 30px"}}>
                        Coaching classNamees conducting weekly tests for students
                        preparing for competetive exams like JEE, NEET, CET
                        etc.,
                      </p>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div>
                      <h4>
                        <i className="fa-sharp fa-solid fa-building"></i>
                        Corporates
                      </h4>
                      <p style={{padding: "0px 30px"}}>
                        Corporates conducting screening exams for job
                        applications can easily conduct online exams and
                        immediately receive results & analytics
                      </p>
                    </div>
                  </th>
                  <th>
                    <div>
                      <h4>
                        <i className="fa-solid fa-graduation-cap"></i> Colleges
                      </h4>
                      <p style={{padding: "0px 30px"}}>
                        Colleges & Universities conducting MCQ or Numeric
                        evaluations with an optional proctored exam environment
                      </p>
                    </div>
                  </th>
                </tr>
              </table>
            </th>
          </tr>
        </table>
      </div>
    </div>
    <footer className='ftrr'>
      <center>
        <table>
          <tr>
            <th style={{padding: "20px"}}><a href="#">Help</a></th>
            <th style={{padding: "20px"}}><a href="#">About Us</a></th>
          </tr>
        </table>
        <p><a href="mailto:hege@example.com">eexamportal@education.in</a></p>
      </center>
    </footer>
  </div>
    );
}