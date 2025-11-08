import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
      <img width={'40%'} src="https://shop.sesto.ir/wp-content/uploads/2022/10/funny-404-error-page-design.gif" alt="page not found" />
       <h2>404</h2>

      <h5>Page Not Found</h5>
      <Link className='btn btn-success mt-2' to={'/'}>Go to Home</Link>
    
    </div>
  )
}

export default Pnf
