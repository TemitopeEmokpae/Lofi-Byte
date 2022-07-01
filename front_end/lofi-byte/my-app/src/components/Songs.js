import {Howl} from "howler";
import { renderMatches } from "react-router-dom";
import JASONDATA from '../test.json'
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
      if(bool.current == true){
         return;
      }else {
         bool.current = true;
         sound.play();}
   }

    const RenderButtonSound = () => {
      return JASONDATA.map((soundObj, index) => {
         return (
            <div>
               <div className="post">
                  <div className="eachSong">
                  <h2 className="title">{soundObj.title}</h2>
                  <button key={index} onClick= {() => soundPlay(soundObj.url)}>
                  Play
                  </button>
                  </div>
            </div>
         </div>
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
var count = 0
function PlayPause(audio){
   if(count == 0){
      count = count+ 1;
      audio.play();
      
   }else{
      count = 0;
      audio.stop();
   }

}