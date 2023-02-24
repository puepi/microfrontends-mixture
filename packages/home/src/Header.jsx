import React from 'react'

export default function Header({app}){
    return(
        <div className='bg-green-800 p-5 text-white text-3xl font-bold text-center'>
            SYSTEME INFORMATIQUE  DE GESTION DES ENTITES FORESTIERES - LOGOS (contenu statique)
            <div>Barre d'authentification - Utilisateur connecté - Login/Logout(contenu dynamique)</div>
            {app.name}
        </div>
        
    )
}