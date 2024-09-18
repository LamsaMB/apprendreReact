import React from 'react'
import {useRouteError} from "react-router-dom"

export default function PageErreur() {
    const erreur = useRouteError()
  return (
    <>
    <div>page Erreur</div>
    <p>
        <i>{erreur.statusText || erreur.message}</i>
    </p>
    </>
  )
}
