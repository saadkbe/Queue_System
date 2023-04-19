import React from 'react'

export default function Reset() {



  return (
    <div className='container_reset animated fadeInDown'>
      <div className='reset'>
        <h1 className='reset_title'>
          rénitialisation
        </h1>
        <br />
        <p className='reset_manual'>
        Veuillez noter que le fait de cliquer sur le bouton de réinitialisation effacera définitivement toutes les données de la base de données. Cette action est irréversible et toutes les informations, y compris les données des utilisateurs, les paramètres et les configurations, seront supprimées de manière permanente. Il est primordial de faire preuve de la plus grande prudence avant de procéder à cette action, car elle entraînera la suppression complète de toutes les données associées à la base de données. Nous vous recommandons vivement de sauvegarder votre base de données avant de continuer avec la réinitialisation. Cette action ne doit être réalisée que par un administrateur autorisé qui comprend pleinement les implications et les conséquences de cette action. Veuillez vous assurer d'avoir examiné attentivement et sauvegardé toutes les données essentielles avant de continuer. En cliquant sur le bouton de réinitialisation, vous reconnaissez et acceptez le caractère irréversible de cette action et vous dégagez le site web ainsi que ses administrateurs de toute responsabilité pour la perte de données.
        </p>
        <br />
        <br />
        <button className='btn btn_reset'>Rénitialiser</button>
      </div>
    </div>
  )
}
