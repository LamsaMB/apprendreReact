import React from 'react'

export default function Emploi() {
  return (
    <div>
        <form action="">
            <label htmlFor="nom">nom</label>
            <input type="text" name='nom' id='nom' />
            
            <label htmlFor="numero">Numero de telelphone</label>
            <input type="number" name='numero' id='numero'/>

            <label htmlFor="email">adress email</label>
            <input type="email" name='email' id='email'/>

            <button type='submit'>
                Envoyer
            </button>
        </form>
    </div>
  )
}
