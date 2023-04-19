import React from 'react'
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div id='defaultLayout'>
      <aside>
      <h1 className='dash-title'>DASHBOARD</h1>
        <Link to="/user">File d'attente</Link>
        <Link to="/users">Utilisateurs</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/reset">Rénitialisation</Link>
      </aside>
      <div className="content">
        <header>
          <div className='headTitle'>
            REDAL
          </div>
        </header>
        <main>
          <h1>
          Ceci est le tableau de bord administrateur.
          </h1>
          <h2 className='condition'>
          
          </h2>
        </main>
      </div>
    </div>
  )
}