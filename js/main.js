let userArr=[];

let CumstomerArr=[];

class User{
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
}


class Cumstomer{
    constructor(name,address,salary,nic) {
        this.name=name;
        this.address=address;
        this.salary=salary;
        this.nic=nic;

    }
}

/*user Management*/
const createUser=()=>{
    const fullname=$('#full-name').val();
    const email=$('#register-email').val();
    const password=$('#register-password').val();
    /*const hash =  bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    console.log(hash);*/
    let createdUser=new User(fullname,email,password);
  let existsUserData=userArr.find(e=>e.email===email);
  if (existsUserData){
      alert('User Email Already Exist !  ');
      return
  }

    userArr.push(createdUser);
    console.log(userArr);
}
const login=()=>{
    const email=$('#email').val();
    const password=$('#password').val();
    let existsUserData=userArr.find(e=>e.email===email);
 if(existsUserData){
     if (existsUserData.password===password){
         /*login dash board*/
     }else{
         alert("password is Wrong")
     }
 }else {
     alert('Email Not Found!')
 }


}
/*customer*/
 const crateCustomer=()=>{}

const findCustomer=(id)=>{}

const updateCustomer=(id)=>{}

const deleteCustomer=(id)=>{}

const getAllCustomers=()=>{}















/**/

/*
const  clearAndLoad=(element)=>{
    let body = $('body').empty();
    let tempElement= $('#'+element);
    tempElement.appendTo(body);
}*/
