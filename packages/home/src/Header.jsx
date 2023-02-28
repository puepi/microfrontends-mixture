import React from 'react'

import MiniCart from 'cart/MiniCart'
import Login from 'cart/Login'

export default function Header(){
    return(
        <div className='bg-green-800 p-5 text-white text-3xl font-bold text-center'>
            SYSTEME INFORMATIQUE  DE GESTION DES ENTITES FORESTIERES - LOGOS (contenu statique)
            <div>Barre d'authentification - Utilisateur connecté - Login/Logout(contenu dynamique)</div>
            <div className='flex'>
                <div className='flex-grow '>Fidget Spinner World</div>
                <div className='flex-end'>
                    <MiniCart />
                    <Login />
                </div>
            </div>
        </div>
        
    )
}