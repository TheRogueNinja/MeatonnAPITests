const userID = document.getElementById('userID').value;

// const apiTestButton = document.getElementById('apiTest');
// apiTestButton.addEventListener('click', fetchApiResults(userID));

function fetchApiResults(userID){
    var clearTable = document.getElementById('displayUI');
    clearTable.innerHTML = '';
    var uri = new URL('https://meatonn.in/testing/webservices/order-history.php?user_id=11');
    uri.searchParams.set('user_id',userID)
    // fetch('https://meatonn.in/testing/webservices/order-history.php?user_id=')
    fetch(uri)
        .then(response => response.json())
        .then(data => displayUI(data))
        .catch(() => alert('some error occured'))
}

function displayUI(jsonData){
    console.log('Inside Display Function');
    let results = jsonData.response;
    var table = document.getElementById('displayUI');

    var header = document.createElement('thead');

    var thd1 = document.createElement('td');
    var thd2 = document.createElement('td');
    var thd3 = document.createElement('td');
    var thd4 = document.createElement('td');
    var thd5 = document.createElement('td');
    var thd6 = document.createElement('td');
    var thd7 = document.createElement('td');
    var thd8 = document.createElement('td');
    var thd9 = document.createElement('td');
    var thd10 = document.createElement('td');
    var thd11 = document.createElement('td');
    var thd12 = document.createElement('td');
    var thd13 = document.createElement('td');

    thd1.innerHTML = "Order Id";
    thd2.innerHTML = "Status";
    thd3.innerHTML = "Date";
    thd4.innerHTML = "rating";
    thd5.innerHTML = "total_amount [INR]";
    thd6.innerHTML = "Customer Name";
    thd7.innerHTML = "Building Name";
    thd8.innerHTML = "Street";
    thd9.innerHTML = "City";
    thd10.innerHTML = "Location";
    thd11.innerHTML = "Landmark";
    thd12.innerHTML = "Email";
    thd13.innerHTML = "Mobile";

    header.appendChild(thd1);
    header.appendChild(thd2);
    header.appendChild(thd3);
    header.appendChild(thd4);
    header.appendChild(thd5);
    header.appendChild(thd6);
    header.appendChild(thd7);
    header.appendChild(thd8);
    header.appendChild(thd9);
    header.appendChild(thd10);
    header.appendChild(thd11);
    header.appendChild(thd12);
    header.appendChild(thd13);

    table.appendChild(header);


    for(i in results){
        console.log('Order id: '+results[i].order_id);
        console.log('Order Status: '+results[i].status);
        console.log('Order Date: '+results[i].date);
        console.log('Rating: '+results[i].rating);
        console.log('Total Amount: '+results[i].total_amount);
        console.log('Customer Name: '+results[i].cartResults.address_title);
        console.log('Building Name: '+results[i].cartResults.building_name);
        console.log('Street Name: '+results[i].cartResults.street);
        console.log('City: '+results[i].cartResults.city);
        console.log('Location: '+results[i].cartResults.location);
        console.log('Landmark: '+results[i].cartResults.landmark);
        console.log('Email: '+results[i].cartResults.email);
        console.log('Mobile Num: '+results[i].cartResults.mobile);

        var tr = document.createElement('tr');
        
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
        var td9 = document.createElement('td');
        var td10 = document.createElement('td');
        var td11 = document.createElement('td');
        var td12 = document.createElement('td');
        var td13 = document.createElement('td');

        td1.innerHTML=results[i].order_id;
        td2.innerHTML=results[i].status;
        td3.innerHTML=results[i].date;
        td4.innerHTML=results[i].rating;
        td5.innerHTML=results[i].total_amount;
        td6.innerHTML=results[i].cartResults.address_title;
        td7.innerHTML=results[i].cartResults.building_name;
        td8.innerHTML=results[i].cartResults.street;
        td9.innerHTML=results[i].cartResults.city;
        td10.innerHTML=results[i].cartResults.location;
        td11.innerHTML=results[i].cartResults.landmark;
        td12.innerHTML=results[i].cartResults.email;
        td13.innerHTML=results[i].cartResults.mobile;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        tr.appendChild(td10);
        tr.appendChild(td11);
        tr.appendChild(td12);
        tr.appendChild(td13);

        table.appendChild(tr);

    }
    // const template = `
    // <div>
    // <h1 id="head">${obj.status}</h1>
    // <p id="content"> The order was delivered on ${obj.date}. 
    // And it costed ${obj.total_amount}.</p>
    // <p>PFB Rest of the Details ${cartDetails.address_title}</p>
    // </div>
    // // `
    // // did this so I would avoid the process of having a refresh/update button
}