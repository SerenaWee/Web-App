"use strict";
const airtableApiKey = 'YOUR_API_KEY';
const baseId = 'YOUR_BASE_ID';
const tableName = 'SFO Flights';

const url = `https://api.airtable.com/v0/app0agWsi4kCVfxTA/SFO%20Flights`;

function fetchAirtableData() {
  fetch(url, {
    headers: {
           Authorization: `Bearer patPVR6BguRc8cMPT.2825622f81a361063d4fec9d118c49bea33ed0a4195d3aac587fcaba4e0bfc92`
    }

  })
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('airtable-data');
    container.innerHTML = ''; // Clear previous content

    data.records.forEach(record => {
      const fields = record.fields;
      const name = fields.Name || 'No Name';
      const departure = fields.Departure || 'No Departure';
      const flightNumber = fields.Flight || 'No Flight Number';

      // Create flip card element
      
      const flipCard = document.createElement('div');
      flipCard.className = 'flip-card';

      flipCard.innerHTML = `
        <div class="flip-card-inner">
          <!-- Front -->
          <div class="flip-card-front">
            Flight: ${flightNumber}
          </div>
          <!-- Back -->
          <div class="flip-card-back">
            <strong>${name}</strong><br/>
            Departure: ${departure}
          </div>
        </div>
      `;
flipCard.addEventListener('click', () => {
  flipCard.querySelector('.flip-card-inner').classList.toggle('flipped');
});
      // Append to container
      container.appendChild(flipCard);
    });
  })

  .catch(error => {
    console.error('Error fetching Airtable data:', error);
  });
}

// Call the function on page load
window.addEventListener('DOMContentLoaded', fetchAirtableData);
