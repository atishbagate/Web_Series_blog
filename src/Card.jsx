import React from 'react';
import './card.css'

function Card(props){
    
    return(
      <>
         <div className="cards">
        <div className="card">
          <img
            src= {props.imgsrc}
            alt="thisPic"
            className="card_img"
          />
          <div className="card_info">
            <span className="card_catagory">{props.catagory}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button>WATCH trailer</button>
            </a>
          </div>
        </div>
      </div>
      </>
    )
  }
  export default Card;