import React from 'react'

const NotFound = () => {
  return (
  <>
  <div className="container p-5 mb-5">
        <div className="row">
          <div className="container d-flex flex-column  align-items-center">
          <div class="alert alert-danger" role="alert">
          <h1>404 not Found</h1>
         
</div>
            
<p style={{ color: "red" }}>
  Sorry, the page you are looking for does not exist!
</p>
          </div>
        </div>
      </div>
  
  </>
  )
}

export default NotFound;
