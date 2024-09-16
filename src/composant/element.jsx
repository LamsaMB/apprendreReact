import React from 'react'

export default function Element({data, Liker, effacer }) {
  return (
    <>
    <div className={data.liker ? "post active": "post"}>
        <h2>{data.titre}</h2>
        <p>{data.description}</p>
    </div>
    <div className='boutons'>
        <button className='like' onClick={()=>{Liker(data)}}>
            {data.liker? <p>Deja aime</p>: <p>jaime</p>}
        </button>
        <button className='delete' onClick={()=> effacer(data.id)}>
            supprimer
        </button>
    </div>
    </>
  )
  
}
