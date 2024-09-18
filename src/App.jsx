import { useState } from 'react'
import Element from './composant/element'
import Titre from './composant/titre'
import { Link } from 'react-router-dom'


export default function App() {
    const [posts,setpost] = useState([
        {
            id: 1,
            titre: "Bienvenue sur React",
            description: "Découvrez les bases de React et comment créer des composants.",
            liker: false
          },
          {
            id: 2,
            titre: "Introduction à JSX",
            description: "Apprenez à utiliser JSX pour écrire des composants React.",
            liker: false
          },
          {
            id: 3,
            titre: "Gestion des états",
            description: "Comprenez comment gérer l'état dans vos composants React.",
            liker: false
          },
          {
            id: 4,
            titre: "Les Hooks en React",
            description: "Explorez les Hooks et comment ils simplifient la gestion des états et des effets.",
            liker: false
          },
          {
            id: 5,
            titre: "Routage avec React Router",
            description: "Découvrez comment ajouter la navigation à votre application React avec React Router.",
            liker: false
          }
    ])
    const Liker = (data) => {
      const newposts = [...posts]
      const index = newposts.indexOf(data)
      newposts [index] = {...posts[index], liker : !posts[index].liker}
      setpost(newposts)
      console.log(newposts)
    }
    const supprimer = (id) =>{
      const newspost = posts.filter(p => p.id != id)
      setpost(newspost)
    }
    const postliker = posts.filter(p=> p.liker)
  return (
    
    <div>
        < Link to='apropos'>A propos</Link>
        < Link to='listearticle'>Les articles</Link>
        <Titre  number = {postliker.length}/>
        {
            posts.map(p => <Element data = {p} key ={p.id} Liker={Liker} effacer = {supprimer}/> )
        }
        
    </div>
  )
}

