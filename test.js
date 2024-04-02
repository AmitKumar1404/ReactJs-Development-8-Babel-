class A{
    // 1. Properties
    name; // Declaration
    surname = ''; // Declaration and Initialization
    address = 'Gurgaon'; // Declaration & Initialization
    state;
    // 2. Constructor
    constructor()
    {
        // Role of constructor is to initialize the properties
        // this.member
        this.name='Lucky';
        this.surname='Singh';
        this.fatherName='Akhilesh Kumar Singh';
    }
    // 3. Methods
    showName()
    {
        console.log(this.name + this.surname + this.address + this.fatherName);     // 'this' is an internal object
    }
    setState(data)
    {
        this.state = data;
    }
    showState()
    {
        console.log(this.state)
    }
}

class B extends A{
    // 1. Properties
    friends1; // This is only declaration
    friends2=''; // This is declaration and initialization

    // 2. Constructor
    constructor(frnd3)  // frnd3 is formal argument
    {
        super();
        this.friends1='Ram';
        this.friends2 ='Shyam';
        this.friends3 =frnd3;
    }
    // 3. Methods
    listMyFriends()
    {
        console.log(this.friends1);
        console.log(this.friends2);
        console.log(this.friends3);
    }
}

let obj2 = new B('Ghanshyam');
obj2.listMyFriends();
obj2.showName();
obj2.setState({
    name:"Sachin",
    surname:"Tendulkar"
});
obj2.showState();

// Lets create the class object
// let object = new ClassName();

//let obj = new A();

// this obj is an external object
// object.member
//obj.showName()  // '.' is an member selection operator