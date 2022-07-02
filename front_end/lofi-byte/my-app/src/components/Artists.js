import JASONDATA from './database/lofidb_album.json'
import JASONDATA1 from './database/lofidb_artist.json'

export default function Artists(){
   const RenderButtonSound = () => {
      return JASONDATA.map((soundObj, index) => {
         return JASONDATA1.map((artist, key) =>{
            if(artist.artistID == soundObj.artistID){
               return (
                  <div>
                     <div className="post">
                        <div className="eachSong">
                        <h2 className="title">{artist.firstName}
                        <h6> released {soundObj.albumName}</h6>
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