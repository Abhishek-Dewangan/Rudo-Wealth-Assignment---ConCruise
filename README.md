# Rudo-Wealth-Assignment---ConCruise

This is a server API for ConCruise application where you can register yourself as a cruiser and add your customer.

### To register yourself as a cruiser

URL : https://concruisers.herokuapp.com/addCruiser
METHOD : POST
INPUT : {
"name": "Gyan",
"number": 956789865,
"email": "gyan@gmail.com"
}
OUTPUT : {
message: "Gyan has been register successfully",
id: "636e78c0fb8b7426f569623b"
}

when you register then you will get your id as output please copy it because it will be needed when you add you customer.

### To add customer

Here in url you will use your cruiser id what you suppose to get while registering yourself.

URL : https://concruisers.herokuapp.com/636e78c0fb8b7426f569623b/addCustomer
METHOD : POST
INPUT : {
"name": "Mohit",
"currentLocation": "Point A",
"numberOfRides": 4,
"averageRating": 5
}
OUTPUT : {
"message": "Mohit has been added successfully",
"id": "636e7b76fb8b7426f569623d"
}

### To see all customers

URL : https://concruisers.herokuapp.com/allCustomers
METHOD : GET
OUTPUT : [
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
]

here in output you will be able to see all customer who is added by any cruiser

### To see all cruisers

URL : https://concruisers.herokuapp.com/allCruisers
METHOD : GET
OUPUT : [
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

To update the customer infomation you need cruiserid and customer id alse you have to save your customer id when you are regitering then you will get that 

URL : 
