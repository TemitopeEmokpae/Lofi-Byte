import {Howl} from "howler";
import { renderMatches } from "react-router-dom";
import JASONDATA from './database/lofidb_song.json'
import JASONDATA1 from './database/lofidb_artist.json'
import { useRef, useState, useEffect } from 'react';
import "../css/Song.css"
// import Player from "./Player";

export default function Songs(){
   
   const [isplaying, setisplaying] = useState(false);
   const bool = useRef(false);

   const soundPlay = (src) => {
      var count = 0;
      const sound = new Howl ({
         src,
         html5: true,
      })
         sound.play();
   }

    const RenderButtonSound = () => {
      return JASONDATA.map((soundObj, index) => {
         return JASONDATA1.map((artist, key) =>{
            if(artist.artistID == soundObj.artistID){
               return (
                  <div>
                     <div className="post">
                        <div className="eachSong">
                        <h2 className="title">{soundObj.songTitle}
                        <h6> by {artist.firstName}</h6>
                        </h2>
                        <button key={index} onClick= {() => soundPlay(soundObj.url)}>
                        Play
                        </button>
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