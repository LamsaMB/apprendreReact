import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Proteger( {connexion ,children} ) {
    
    if(!connexion) return < Navigate to ="/"/> ; return <>{children}</>
  
}
