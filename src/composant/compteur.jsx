
import React , {useState}  from 'react'

export default function Compteur(props) {
    const [ age , setage ] = useState(0)
    const incrementer = () => {
        setage(age +1)
    }
    const decrementer = () => {
        setage(age - 1)
        
    }
  return (
    <>
      {props.piw > 20 ? <p>Vous avez {props.piw} ans</p> : null}
      <div className='compteur'>
          <button onClick={incrementer}>+</button>
          <p className={age<0 && "erreur"}>{age}</p>
          <button onClick={decrementer}>-</button> 
          
      </div>
    </>
  ) 
  
}
