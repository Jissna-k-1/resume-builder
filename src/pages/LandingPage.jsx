import React from 'react'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{width:'100%', height:'100vh', backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className='d-flex justify-content-center align-items-center'>
      <div className="shadow border py-5 rounded mt-5 text-center w-25" style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
        <h3 className='fs-5'>Designed to get hired. Your skills, your story, your next job - all in one.</h3>
        <Link to={'/resume'} className='btn text-white' style={{backgroundColor:'purple'}}>Make your resume</Link>
        </div>

      </section>
      {/* tolls */}
      <section>
      <div className='m-5'>
            <h1 className='text-center'>Tools</h1>

        <div className="container row align-items-center">
         <div className="col-md-6">
          <div className="my-3">
       <h4>Resume</h4>
          <p>Create unlimited new resumes and easily edit them afterwards.</p>
          </div>

           <div className="my-3">
       <h4>Cover Letters</h4>
          <p>Easily write professional cover letters.
</p>
          </div>

           <div className="my-3">
       <h4>Jobs</h4>
          <p>Automatically receive new and relevant job postings.</p>
          </div>

           <div className="my-3">
       <h4>Applications</h4>
          <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
       
         </div>
         <div className="col-md-6">
          <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
         </div>
        </div>

      </div>
      </section>
      {/* image */}
      <section style={{width:'100%',height:'500px', backgroundImage:"url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')", backgroundAttachment:'fixed', backgroundPosition:'top',backgroundSize:'cover'}}>

      </section>
      {/* testimony */}
      <section className='m-5'>
        <h2 className="my-5 text-center">Testimonials</h2>
        <div className="container row">
          <div className="col-md-5 col-12">
           <h3 className="my-5">Trusted by professionals worldwide.</h3>
           <p className='fs-6 my-1' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p className='fs-6' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
             <p className='fs-6' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://community.thriveglobal.com/wp-content/uploads/2018/08/businesswomen.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://media.licdn.com/dms/image/v2/C5612AQEypdfdinHLLw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520130073562?e=2147483647&v=beta&t=Kq3oI6KlmLbQ0yZKSWh_MFth5_ii01TtQE2BmRE0e1o" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://ethames.ac.in/img/ypp.jpg" alt="" />
              </div>
              <div className="col-3 mt-4">
                <img className='w-100' src="https://img.freepik.com/free-photo/people-working-as-team-company_23-2149136890.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
               <div className="col-3 mt-4">
                <img className='w-100' src="https://media.istockphoto.com/id/1473165453/photo/young-smiling-indian-programmer-close-up-smiling-and-looking-at-camera-portrait-of-man-with.jpg?s=612x612&w=0&k=20&c=j_T5LmND3w7QuSH4w1U7SLroAW79tMREBp90BTIDFIE=" alt="" />
              </div>
               <div className="col-3 mt-4">
                <img className='w-100' src="https://media.istockphoto.com/id/2093526842/photo/happy-businesswoman-working-on-digital-tablet-in-the-office-and-looking-at-camera.jpg?s=170667a&w=0&k=20&c=afk3YxGbiu2BL3F0olYi7sB2fvu5qiCeOtsFonhVyl4=" alt="" />
              </div>
               <div className="col-3 mt-4">
                <img className='w-100' src="https://media.istockphoto.com/id/641176608/photo/portrait-of-confident-businesswoman-at-desk.jpg?s=170667a&w=0&k=20&c=q9I1BWsF9wCBcQKfM_XJOlefCzR211lmL9BKqtEKYws=" alt="" />
              </div>
               <div className="col-3 mt-4">
                <img className='w-100' src="https://img.freepik.com/premium-photo/business-accountant-young-asian-female-working-laptop-doing-calculator-planning-analyzing-financial-report-business-plan-investment-finance-analysis-concept_1298691-15102.jpg" alt="" />
              </div>
               <div className="col-3 mt-4">
                <img className='w-100' src="https://img.freepik.com/free-photo/account-executive-multitasking-her-desk-working-business-goals_482257-123842.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
               <div className="col-3 mt-4">
                <img className='w-100' src="https://img.freepik.com/free-photo/smiling-businesswoman-office_1098-21068.jpg" alt="" />
              </div>
               <div className="col-3 mt-4">
                <img className='w-100' src="https://img.freepik.com/free-photo/successful-manager_1098-12702.jpg" alt="" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default LandingPage
