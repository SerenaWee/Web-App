"use strict";
// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("FlightData");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patPVR6BguRc8cMPT.2825622f81a361063d4fec9d118c49bea33ed0a4195d3aac587fcaba4e0bfc92`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/app0agWsi4kCVfxTA/SFO%20Flights`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let name = data.records[i].fields["Name"]; 
        let flight = data.records[i].fields["Flight"]; 
        let departure = data.records[i].fields["Departure"];

        newHtml += `
        <div class="col-md-4 alley 
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}
// // look up window.location.search and split, so this would take
// // https://dmspr2021-airtable-app.glitch.me/index.html?id=receHhOzntTGZ44I5
// // and look at the ?id=receHhOzntTGZ44I5 part, then split that into an array
// // ["?id=", "receHhOzntTGZ44I5"] and then we only choose the second one
// let idParams = window.location.search.split("?id=");
// if (idParams.length >= 2) {
//   // call function to hide search bar
//   myFunction();
//   // has at least ["?id=", "OUR ID"]
//   // call function for the dropdown menu
//   //dropdown();
//   //getOneRecord(idParams[1]); // create detail view HTML w/ our id
// //} else {
//   // Call listener function to hide search bar for mobile devices
//  // myNeighborhood(x);
//   // call function for the dropdown menu
//   //dropdown();
//   getAllRecords(); // no id given, fetch summaries
// }
getAllRecords();

 