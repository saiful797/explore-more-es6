const products =[
    {id: 1 , name: 'lenovo', price: 65000},
    {id: 2 , name: 'dell', price: 45000},
    {id: 3 , name: 'hp', price: 40000},
    {id: 4 , name: 'mac', price: 150000},
]

class Product{
    country = 'bangladesh';

    constructor(name){
        this.name = name;
    }

    speak(talk){
        console.log(`talk about ${talk}`);
    }
}

const lenovo = new Product('Le le Lenovo');

// console.log(lenovo);
// lenovo.speak('oba kita kau');





class Teacher{

    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }

    lecture(){
        console.log('sir is teaching Math');
    }
}

const ali = new Teacher('Ali Sir', 'Math');
console.log(ali);

const faruq = new Teacher('Faruq Sir', 'english');
console.log(faruq);