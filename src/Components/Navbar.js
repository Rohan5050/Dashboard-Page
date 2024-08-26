import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <a href='#' className="nav-link active" aria-current="page">Home</a>
           </li>
           <li>
             <span className='nav-link active'>&gt;</span>
           </li>
           <li className="nav-item">
              <a href='#' className="nav-link">Dashboard</a>
            </li>
        </ul>
         <form className='aln-bar-2' id='aln-bar'>
           <input id='style-bar' className="form-control me-2" type="search" placeholder="Search Anything" aria-label="Search"/>
         </form>
      </div>
    </div>
  </nav>
</div>
  )
}

export default Navbar