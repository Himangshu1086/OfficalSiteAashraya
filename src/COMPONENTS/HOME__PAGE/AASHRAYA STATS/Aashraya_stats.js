import React from 'react'
import books from '../../../ASSETS/statistics/books.png'
import library from '../../../ASSETS/statistics/library.png'
import volunteers from '../../../ASSETS/statistics/volunteers.png'
import '../../../styles/Aashraya_stats.css'
function Aashraya_stats() {
  return (
    <div style={{textAlign:"center", paddingTop:"240px",color:"black"}}>
      <h1>Aashraya Stats</h1>
    <div style={{height:"500px"  , display:"flex" , justifyContent:"center" }}>
      <div className="icon-stats">
          <img src={volunteers} alt='icon'/>
          <div style={{margin:"30px 10px"}}>
            <h3><strong>Total Volunteers</strong></h3>
            <h3>3000+ </h3>
          </div>
      </div>

      <div className="icon-stats">
        <img src={library} alt='icon'/>
          <div style={{margin:"30px 10px"}}>
            <h3><strong>Total Libraries</strong></h3>
            <h3>10+</h3>
          </div>
      </div>

      <div className='icon-stats'>
          <img src={books} alt='icon'/>
          <div style={{margin:"30px 10px"}}>
            <h3><strong>Total Books</strong></h3>
            <h3>100k+ </h3>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Aashraya_stats