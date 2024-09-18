import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./assets/main.css";
import { createBrowserRouter , RouterProvider , Link , Outlet} from "react-router-dom";
import Article from "./composant/article";
import PageErreur from "./composant/pageErreur";
import Emploi from "./composant/emploi";
import Job from "./composant/job";
import Erreur404 from "./composant/erreur404";
import Proteger from "./composant/proteger";


const route = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : <PageErreur/> 
    }, 
    {
        path: "apropos",
        element : (<>
                    <h1>A propos</h1>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae praesentium minus maiores fuga debitis dolorum ipsam eligendi reiciendis commodi, quas a laborum unde nostrum sed, temporibus inventore porro nulla!</h2>
                    <Link to="/">Retour</Link>
                    <div style={{
                        display : "flex",
                        gap: "1rem",
                        marginTop: "5px"
                    }}>
                            <Link to="/apropos/emploi">Formulaire</Link>
                            
                            <Link to="/apropos/job">Concernat le job</Link>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </>), 
        children : [
            {
                path : "/apropos/emploi",
                element : <Emploi/>
            },
            {
                path : "/apropos/job",
                element: <Proteger connexion={false}>
                    <Job/>
                </Proteger>
            }
        ]
    },
    {
        path : "listearticle",
        element : <>
        <h1>Voici les element :</h1>
        <Link to ="200">Article 1</Link>
        </>
    },
    {
        path : "listearticle/:id",
        element : <Article/>,
        
    },
    {
        path : "*",
        element : <Erreur404/>
    }

])  

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router = {route}/>
)