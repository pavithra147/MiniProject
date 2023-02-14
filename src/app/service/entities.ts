export interface  register{
    "firstName":string,
    "lastName":string,
    "email":string,
    "password":string,
    "confirmPassword":string,
    "state":string,
    "city":string,
    "postalCode":string,
    "id":number
}

export interface products{
    "pid":number,
    "title":string,
    "price":number,
    "description":string,
    "category":string,
    "brand":string,
    "image":string,
    "rating":{
        "rate":number,
        "count":number
    },
    "Quantity":number
}

export interface addtocart{
    "pid":number,
    "title":string,
    "price":number,
    "description":string,
    "category":string,
    "brand":string,
    "image":string,
    "rating":{
        "rate":number,
        "count":number
    },
    "Quantity":number,
    "Total":number,
    "id":number
}