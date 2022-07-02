import JASONDATA from './database/lofidb_album.json'
import JASONDATA1 from './database/lofidb_artist.json'
import { useRef, useState, useEffect } from 'react';
import "../css/Song.css"
import { renderMatches } from 'react-router-dom';

export default function Albums(){
  const RenderButtonSound = () => {
      return JASONDATA.map((soundObj, index) => {
         return JASONDATA1.map((artist, key) =>{
            if(artist.artistID == soundObj.artistID){
               return (
                  <div>
                     <div className="post">
                        <div className="eachSong">
                        <h2 className="title">{soundObj.albumName}
                        <h6> by {artist.firstName}</h6>
                        </h2>
                        </div>
                  </div>
               </div>
               )
            }
            
         }
         )
         
      })
   }

      return (
         <div>
         <div className="song">
         {RenderButtonSound()}
         </div>
         </div>
     )
    
         
}