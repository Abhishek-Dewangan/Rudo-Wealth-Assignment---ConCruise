# Rudo-Wealth-Assignment---ConCruise

This is a server API for ConCruise application where you can register yourself as a cruiser and add your customer.

### To register yourself as a cruiser

- URL : https://concruisers.herokuapp.com/addCruiser <br>
- METHOD : POST <br>
- INPUT : {
  "name": "Gyan",
  "number": 956789865,
  "email": "gyan@gmail.com"
  } <br>
- OUTPUT : {
  message: "Gyan has been register successfully",
  id: "636e78c0fb8b7426f569623b"
  }<br>

when you register then you will get your id as output please copy it because it will be needed when you add you customer.

### To add customer

Here in url you will use your cruiser id what you suppose to get while registering yourself. but if you have dont know your cruiser id then you can by this operation :-

- To find your cruiser id :-

  - url : https://concruisers.herokuapp.com/getCruiserId
  - method : post
  - input : {
    "email" :"gyan@gmail.com"
    }
  - output : [
    {
    "_id": "636e78c0fb8b7426f569623b",
    "name": "Gyan",
    "number": 956789865,
    "email": "gyan@gmail.com",
    "__v": 0
    }
    ]

- URL : https://concruisers.herokuapp.com/cruiserId/addCustomer <br>
  instead o cruiserid you have to write value of your cruiser id like : 636e78c0fb8b7426f569623b
- METHOD : POST <br>
- INPUT : {
  "name": "Mohit",
  "currentLocation": "Point A",
  "numberOfRides": 4,
  "averageRating": 5
  } <br>
- OUTPUT : {
  "message": "Mohit has been added successfully",
  "id": "636e7b76fb8b7426f569623d"
  }

### To see all customers

- URL : https://concruisers.herokuapp.com/allCustomers <br>
- METHOD : GET <br>
- OUTPUT : [
  {
  "_id": "636e7b76fb8b7426f569623d",
  "name": "Mohit",
  "numberOfRides": 4,
  "cruiserName": "Gyan"
  },
  {
  "_id": "636e800768fc5b0668de7785",
  "name": "Ramanuj",
  "numberOfRides": 4,
  "cruiserName": "Gyan"
  },
  {
  "_id": "636e820a67c0c3f24368dec3",
  "name": "Honey",
  "numberOfRides": 4,
  "cruiserName": "Gyan"
  }
  ] <br>

here in output you will be able to see all customer who is added by any cruiser

### To see all cruisers

- URL : https://concruisers.herokuapp.com/allCruisers <br>
- METHOD : GET <br>
- OUPUT : [
  {
  "name": "Ram",
  "number": 9879879870
  },
  {
  "name": "Harish",
  "number": 8768768769
  },
  {
  "name": "Anuj",
  "number": 9876987609
  }
  ]

### To update customer information

To update the customer infomation you need cruiserid and customer id. <br>

- To find your cruiser id :-
  - url : https://concruisers.herokuapp.com/getCruiserId
  - method : post
  - input : {
    "email" :"gyan@gmail.com"
    }
  - output : [
    {
    "_id": "636e78c0fb8b7426f569623b",
    "name": "Gyan",
    "number": 956789865,
    "email": "gyan@gmail.com",
    "__v": 0
    }
    ]

To find customer id you can use same url what we are using above for see all customers

- URL : https://concruisers.herokuapp.com/criserId/customerId/updateCustomer <br>
  Insted of custmerId or cruiserId you have to write id's value <br>
- METHOD : update <br>
- INPUT : {
  "averageRating":4,
  "name":"Jonny"
  } <br>
  The input is idealy you can change anything whatever input you have give at time od adding customer. <br>
- OUTPUT : {
  "message": "Customer updated",
  "updatedCusomer": {
  "id": "636e7b76fb8b7426f569623d",
  "name": "Jonny",
  "numberOfRides": 4,
  "cruiserName": "Gyan"
  }
  }

### To delete one or many customers

To update the customer infomation you need cruiserid and customer id's. <br>

- URL : https://concruisers.herokuapp.com/cruiserId/deleteCustomer <br>
  Insted of custmerId's or cruiserId you have to write id's value <br>
- METHOD : DELETE <br>
- INPUT : {"customers":["customerId2","customerId2"]} <br>
  you can give multiple customers id at the same time or you can give single id also.<br>
- UTPUT : Deleted Successfully<br>
