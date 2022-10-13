let url = "http://localhost:3005";
//utilize fetch and then function to retrieve data to output in the HTML



function showlist() {
    fetch(`${url}/api/`, {
       method: 'GET',
       mode: 'cors'   
    })

    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (i = 0; i <= data.length; i++) {
            var eContactList = document.createElement('div')
            eContactList.textContent = `Contact ID: ${data[i].customer_id} Contact Name: ${data[i].contactname} Phone Number: ${data[i].phone} Relationship: ${data[i].relationship}`
            document.body.appendChild(eContactList);
        }
    })
}

