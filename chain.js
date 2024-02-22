// data access
const data = [{id: 1, name: 'saiful', address: 'Kochu Khet'}];

//console.log(data);
//console.log(data[0]);
//console.log(data[0].address);



//data access from Object
const products ={
    count: 5000,
    data: [
        {id: 1, name:"Lenovo Laptop", price: 65000},
        {id: 2, name: "Mac Book", price: 165000},
    ]
};

//console.log(products);
// console.log(products.data);
// console.log(products.data[0]);
//console.log(products.data[0].price);
//console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'Sariful Raj',
    address: {
        street: {
            first: '54/1 Uttor Side',
            second: 'Poribag Er Goli',
            third: 'no dorai',
        },
        city: 'Dhaka',
    }
};


const user2 = {
    id: 5002,
    name: 'Pori Bibir mazar',
    address: {
        city: 'Chattogram',
        country: 'Bangladesh',
    }

}

//const addressAccess = user.address.street.second;
//console.log(addressAccess);

console.log(user.address.street?.second);
console.log(user2.address.street?.second);