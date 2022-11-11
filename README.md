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

### To see all cruisers

URL : https://concruisers.herokuapp.com/allCruisers
METHOD : GET
OUTPUT : [
{
"_id": "636e7b76fb8b7426f569623d",
"name": "Mohit",
"currentLocation": "String",
"numberOfRides": 4,
"averageRating": 2,
"driver": "636d4c89598a662670f06035",
"__v": 0
}
]

here in output you will be able to see all customer who is added by any cruiser

### To see all customers

URL : https://concruisers.herokuapp.com/allCustomers
