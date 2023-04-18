import React, { useState } from 'react';
import axios from 'axios';
import veolia from '../assets/veolia.png';

const QueueTicketMenu = () => {
  // State for selected agency and service type
  const [selectedAgency, setSelectedAgency] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState('');

  // Handler for agency select change
  const handleAgencyChange = (event) => {
    setSelectedAgency(event.target.value);
  }

  // Handler for service type select change
  const handleServiceTypeChange = (event) => {
    setSelectedServiceType(event.target.value);
  }

  // Handler for ticket button click
  const handleTicketButtonClick = () => {
    // Prepare data to be sent to the API
    const ticketData = {
      agency: selectedAgency,
      serviceType: selectedServiceType
    };

    // Send POST request to Laravel API endpoint
    axios.post('http://localhost:8000/api/tickets', ticketData)
      .then(response => {
        // Handle success response
        console.log(response.data.message);
      })
      .catch(error => {
        // Handle error response
        console.error(error);
      });


  }

  return (
    <div className="queue-ticket-menu fadeInDown animated">
      <form className="form-container">
        <img className='veolia_logo' src={veolia}/><br/><br/>
        <label htmlFor="agency-select">Selectioner une agence:</label>
        <select id="agency-select" value={selectedAgency} onChange={handleAgencyChange}>
          <option value="">--veulliez choisir--</option>
          <option value="Redal TEMARA">Redal TEMARA</option>
          <option value="Redal MAHAJ RIAD">Redal MAHAJ RIAD</option>
          <option value="Redal SALE">Redal SALE</option>
        </select>
        <label htmlFor="service-type-select">Type de service:</label>
        <select id="service-type-select" value={selectedServiceType} onChange={handleServiceTypeChange}>
          <option value="">-- Select Service Type --</option>
          <option value="Paiement">Paiement</option>
          <option value="Réclamation">Réclamation</option>
          <option value="Autre">Autre</option>
        </select>
        <button className='btn' type="button" onClick={handleTicketButtonClick}>Take Ticket</button>
      </form>
    </div>
  );
}

export default QueueTicketMenu;
