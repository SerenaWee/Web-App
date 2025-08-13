"use strict";

// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("Flights");

  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer patPVR6BguRc8cMPT.2825622f81a361063d4fec9d118c49bea33ed0a4195d3aac587fcaba4e0bfc92",
    },
  };


  await fetch(
    "https://api.airtable.com/v0/app0agWsi4kCVfxTA/SFO%20Flights",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";
    
      for (let i = 0; i < data.records.length; i++) {
        let record = data.records[i];
        let make = data.records[i].fields["Photo"];
        let name = data.records[i].fields["Name"]; //here we are using the Field ID to fecth the name property
        let flight = data.records[i].fields["Flight"];
        let departure = data.records[i].fields["Departure"];
        let arrival = data.records[i].fields["Arrival"]; 
        let time = data.records[i].fields["Time"];
        let days = data.records[i].fields["Days"];
        let type = data.records[i].fields["Type"];
        
// let anchorId = name.replace(/\s+/g, "-").toLowerCase();

        // Add to dropdown
       
        newHtml += `
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
            
          ${
              make
                ? `<img class="card-img-top rounded" alt="${name}" src="${make[0].url}">`
                : ``
            }
            <div class="card-body d-flex flex-column">
            <h5 class="card-title">${name}</h5>
            <p> Aircraft type: ${type} </p>
            <p> Flight Number: ${flight} </p>
            <p>Departure Airport: ${departure} </p>
            <p>Arrival Airport: ${arrival}</p>
            <p> Arrival Time: ${time} </p>
            <p> Flight Days: ${days} </p>
            
             <div class="mt-auto d-flex justify-content-between">
            
           <a class="btn btn-primary w-auto col-3" href="./schedule.html?id=${record.id}""> View Detail </a>
          </div>
          </div>
        </div>
        </div>
    
        `;
      }

      getResultElement.innerHTML = newHtml;
    });

}

async function getOneRecord (id) {
  let getResultElement = document.getElementById("Flights")
 const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer patPVR6BguRc8cMPT.2825622f81a361063d4fec9d118c49bea33ed0a4195d3aac587fcaba4e0bfc92",
    },
  };

  const response = await fetch(
    `https://api.airtable.com/v0/app0agWsi4kCVfxTA/SFO%20Flights/${id}`,
    options
  );


  const data = await response.json();

  console.log(data)
  const fields = data.fields;
  let record = data.records
        let make = data.fields["Photo"];
        let name = data.fields["Name"]; //here we are using the Field ID to fecth the name property
        let flight = data.fields["Flight"];
        let departure = data.fields["Departure"];
        let arrival = data.fields["Arrival"]; 
        let time = data.fields["Time"];
        let days = data.fields["Days"];
        let type = data.fields["Type"];
  getResultElement.innerHTML = `
    <div class="card detail-card">
      <div class="card-body">
        <h5 class="card-title">${fields["Name"]}</h5>
        ${
              make
                ? `<img class="card-img-top rounded" alt="${name}" src="${make[0].url}">`
                : ``
            }
        
            <p> Flight Number: ${flight} </p>
            <p>Departure Airport: ${departure} </p>
            <h7>Arrival Airport: ${arrival}</h7>
            <p> Arrival Time: ${time} </p>
            <p> Flight Days: ${days} </p>
            <p> Aircraft type: ${type} </p>
        ${
          fields["Website"]
            ? `<a href="${fields["Website"]}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary mt-3 me-2">Visit Website</a>`
            : ""
        }
        <a href="schedule.html" class="btn btn-success mt-3">Back to Schedule</a>
      </div>
    </div>
  `;
}


//  getAllRecords(); // no id given, fetch summaries

let idParams = window.location.search.split("?id=");
if (idParams.length >= 2) {getOneRecord(idParams[1]);
} else {
  getAllRecords();
}











// "use strict";

// // function for our list view
// async function getAllRecords() {
//   let getResultElement = document.getElementById("Restaurants");

//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: "Bearer patfEJjmGd4egCkYT.ad361792ce913f19954a8150fbacdf0e717d16b069ff67e53b2a820af838b479",
//     },
//   };


//   await fetch(
//     "https://api.airtable.com/v0/app3ztynCnkXsjtRL/Data",
//     options
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data); // response is an object w/ .records array

//       getResultElement.innerHTML = ""; // clear brews

//       let newHtml = "";
    
//       for (let i = 0; i < data.records.length; i++) {
//         let logo = data.records[i].fields["Images"];
//         let name = data.records[i].fields["Name"]; //here we are using the Field ID to fecth the name property
//         let neighborhood = data.records[i].fields["Neighborhood"];
//         let phone = data.records[i].fields["Phone"];
//         let location = data.records[i].fields["Location"];
//         let description = data.records[i].fields["Description"];
//         let hours = data.records[i].fields["Hours"];
//         let reviews = data.records[i].fields["Reviews"];
//         let eats = data.records[i].fields["Eats"]; 
//         let favmeal = data.records[i].fields["FavMeal"];
        

//         newHtml += `
//         <br></br> <br></br>
//         <div class="card" style="width: 18rem;">

//           <div class="card-body">
//             <h5 class="card-title">${name}</h5>
//             ${
//               logo
//                 ? `<img class="card-img-top rounded" alt="${name}" src="${logo[0].url}">`
//                 : ``
//             }
//             <h6>${phone}</h6>
//             <h6>${location}</h6>
//             <h7> Description: ${description}</h7><br></br>
//             <p> Hours: ${hours} 🕰️</p>
//             <p>Star Reviews: ${reviews} ⭐️</p>
//             <h7> ${eats}</h7>
//             <p> Favorite Meal: ${favmeal} 😁</p>
            
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//             <a href="index.html?id=${data.records[i].id}">

//             }"
//              class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
    
//         `;
//       }

//       getResultElement.innerHTML = newHtml;
//     });

// }

// async function getOneRecord (id) {

// }

//  getAllRecords(); // no id given, fetch summaries

// let idParams = window.location.search.split("?id=");
// if (idParams.length >= 2) {}
// "use strict";
// const airtableApiKey = 'YOUR_API_KEY';
// const baseId = 'YOUR_BASE_ID';
// const tableName = 'SFO Flights';

// const url = `https://api.airtable.com/v0/app0agWsi4kCVfxTA/SFO%20Flights`;

// function fetchAirtableData() {
//   fetch(url, {
//     headers: {
//            Authorization: `Bearer patPVR6BguRc8cMPT.2825622f81a361063d4fec9d118c49bea33ed0a4195d3aac587fcaba4e0bfc92`
//     }

//   })
  
//   .then(response => response.json())
//   .then(data => {
//     const container = document.getElementById('airtable-data');
//     container.innerHTML = ''; // Clear previous content

//     data.records.forEach(record => {
//       const fields = record.fields;
//       const name = fields.Name || 'Name';
//       const departure = fields.Departure || 'Departure';
//       const flightNumber = fields.Flight || 'Flight Number';
//       const flightTime = fields.Time || 'Flight Number';

//       // Create flip card element
      
//       const flipCard = document.createElement('div');
//       flipCard.className = 'flip-card';

//       flipCard.innerHTML = `
//         <div class="flip-card-inner">
//           <!--Front-->
//           <div class="flip-card-front">
//             Departure Airport: ${departure}
//           </div>
//           <!-- Back -->
//           <div class="flip-card-back">
//             <strong>${name}</strong><br/>
//             Flight Number: ${flightNumber}<br/>
//             Arrival Time: ${flightTime}
//             <a class="mt-1 btn btn-primary mt-2" href="schedule.html?id=${data.record.id}">View Detail</a>
//           </div>
//         </div>
//       `;
// flipCard.addEventListener('click', () => {
//   flipCard.querySelector('.flip-card-inner').classList.toggle('flipped');
// });
//       // Append to container
//       container.appendChild(flipCard);
//     });
//   })

//   .catch(error => {
//     console.error('Error fetching Airtable data:', error);
//   });
// }

// // Call the function on page load
// window.addEventListener('DOMContentLoaded', fetchAirtableData);

// async function getOneRecord() {
//   let getResultElement = document.getElementById("Flight");
//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer patPVR6BguRc8cMPT.2825622f81a361063d4fec9d118c49bea33ed0a4195d3aac587fcaba4e0bfc92`,
//     },
//   };
// }
// let idParams = window.location.search.split("?id=");
// if (idParams.length >= 2) {
//   getOneRecord(idParams[1]);
// } else {
//   getAllRecord();
// }
/*{ <a class="mt-1 btn btn-primary mt-2" href="schedule.html?id=${date.record[i].id}">View Detail</a>//change index.html to something else

const Plane_URL =
  "https://api.airtable.com/v0/app0agWsi4kCVfxTA/SFO%20Flights";

// function for our list view
async function fetchAlleys() {
  let getResultElement = document.getElementById("alley-container");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patPVR6BguRc8cMPT.2825622f81a361063d4fec9d118c49bea33ed0a4195d3aac587fcaba4e0bfc92`,
    },
  };

  await fetch(
    `${Plane_URL}`,
    options
  )
    .then((response) => response.json())

    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear alleys

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let alleyPic = data.records[i].fields["image"];
        let alleyName = data.records[i].fields["name"];
        let alleyAddress = data.records[i].fields["address"];
        let alleyHours = data.records[i].fields["hours"];
        let alleyURL = data.records[i].fields["url"];
        let alleyPhone = formatPhoneNumber(data.records[i].fields["phone"]);
        let alleyLanes = data.records[i].fields["lanes"];
        let alleyCost = data.records[i].fields["cost"];

        newHtml += `
        
          <div class="col-md-4 alley-card">
            <div class="card">
              ${alleyPic ? `<img src="${alleyPic[0].url}" alt="Photo of ${alleyName}">` : ``}
              <div class="card-body">
                <h5 class="card-title">
                   ${alleyName}
                </h5>
                <p>${alleyAddress}</p>
                <a class="mt-1 btn btn-primary mt-2" href="index.html?id=${
                  data.records[i].id
                }">View Details</a>
              </div>
            </div>
          </div>
    
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

function formatPhoneNumber(phoneNumberString) {
  let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    let intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
}

function fetchSingleAlley(alleyId) {
  let alleyResultElement = document.getElementById("alley-container");
  
    const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patuwPLWf5SBeDkyT.45118f887bbc6a79e8bb6c9d327b8c8105866bb0d6a0cdc2290006ddec22a74d`,
    },
  };

    fetch(`${BOWLING_URL}/${alleyId}`,
        options
       )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is a single object

      let alleyPic = data.fields["image"];
      let alleyName = data.fields["name"];
      let alleyDescription = data.fields["description"];
      let alleyAddress = data.fields["address"];
      let alleyHours = data.fields["hours"];
      let alleyURL = data.fields["url"];
      let alleyPhone = formatPhoneNumber(data.fields["phone"]);
      let alleyLanes = data.fields["lanes"];
      let alleyCost = data.fields["cost"];
      let alleyLeagues = data.fields["league"];

      let hoursHtml = "";
      if ("hours" in data.fields) {
        hoursHtml += "<ul>";
        let hours = data.fields["hours"].split("\n\n");
        for (let i = 0; i < hours.length; i++) {
          hoursHtml += `<li>${hours[i]}</li>`;
        }
        hoursHtml += "</ul>";
      }

      let newHtml = `
        <div class="row">
          <a class="back-button btn w-auto col-3" href="./index.html">Back to Alleys List</a>
        </div>
        <div class="row">
          <div class="col">
            ${
              alleyPic
                ? `<img class="details-image" src="${alleyPic[0].url}" alt="Photo of ${alleyName}">`
                : ``
            }
            <h4>Official Website</h4>
             <a href="${alleyURL}" target="_blank">${alleyName}</a>
            <hr>
            <h4>Contact</h4>
            <p>${alleyPhone}</p>
          </div>
          <div class="col-lg-7">
              <h2 id="details-title">${alleyName} - ${alleyLanes} Lanes</h2>
              <hr>
              <h4>Description</h4>
              <p>${alleyDescription}</p>
              <hr>
              <h4>Address</h4>
              <p class="addresses">${alleyAddress}</p>
              <hr>
              <h4>Hours</h4>
              <p>${hoursHtml}</p>
              <hr>
              <h4>Pricing</h4>
              <p>${alleyCost}</p>
              <hr>
              <h4>League</h4>
              <p>${alleyLeagues ? `${alleyName} has Leagues!` : `${alleyName} doesn't have Leagues.`}</p>
          </div>
        </row>
      `;

      alleyResultElement.innerHTML = newHtml;
    });
}

// function searchFunction() {
//   var input, filter, cardimagetext, i, x;
//   input = document.getElementById("myinput");
//   filter = input.value.toUpperCase();
//   cardimagetext = document.getElementsByClassName("alley-card");

//   for (x = 0; x < cardimagetext.length; x++) {
//     i = cardimagetext[x].getElementsByClassName("addresses")[0];
//     if (i.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       cardimagetext[x].style.display = "";
//     } else {
//       cardimagetext[x].style.display = "none";
//     }
//   }
// }

// look up window.location.search and split, so this would take
// https://dmspr2021-airtable-app.glitch.me/index.html?id=receHhOzntTGZ44I5
// and look at the ?id=receHhOzntTGZ44I5 part, then split that into am array
// ["id?=", "receHhOzntTGZ44I5"] and then we only choose the second one

let idParams = window.location.search.split("?id=");
if (idParams.length >= 2) {
  // has at least ["id?", "OUR ID"]
  fetchSingleAlley(idParams[1]); // create detail view HTML w/ our id
} else {
  fetchAlleys(); // no id given, fetch summaries }*/