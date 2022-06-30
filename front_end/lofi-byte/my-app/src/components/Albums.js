import React from 'react'

const Albums=(props)=>{

    const showList=({albums})=>{
        if(albums){
            return albums.map((item,index)=>{
                return(
                    <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }

    return(
        <div className="albums">
            {showList(props)}
        </div>
    )

}

export default AlbumList;