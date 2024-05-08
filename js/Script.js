//     const obj1 = {
//   firstName: "Abhishek",
//   lastName: "Raj",
// }

// const obj2 = {
//   firstName: "Abhishek",
//   lastName: "Raj",
// }


// console.log(obj1 === obj2);
// console.log(JSON.stringify(obj1) == JSON.stringify(obj2));

// let a=10;
// let b=20;
// let c=a+b;
//  let d=p+q;
// console.log(c);
// try{
//   console.log(d);
// }catch(err){
//   console.log("err");
// }
// function math(){
// const randIdx = Math.(Math.random() * 3);
// console.log(randIdx);
// }

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const caddress = document.getElementById('caddress').value;
    const paddress = document.getElementById('paddress').value;

    // Store form data in localStorage
    //localStorage.setItem() is use to store the data on localstorage
    localStorage.setItem('Name of candidate', fname+" "+lname);
    localStorage.setItem('Phone number of candidate', phone); 
    localStorage.setItem('Email id of candidate', email);
    localStorage.setItem('Current address of candidate', caddress);
    localStorage.setItem('Parmanent address of candidate', paddress);

  //alert message 
    alert('Form submitted successfully!');

    //data print section
    // document.write("your Fullname is:-" + fname +" "+lname+ "<br>");
    // document.write("your Phone is:-"+phone+ "<br>");
    // document.write("your Email id is:-"+email+ "<br>");
    // document.write("your Current address is:-"+caddress+ "<br>");
    // document.write("your Parmanent address is:-"+paddress+ "<br>");
   

    //print data on console
   console.log("Name of candidate:-" + fname +" "+lname);
   console.log("Phone number of candidate:-"+phone);
   console.log("Email id of candidate-"+email);
   console.log("Current address of candidate:-"+caddress);
   console.log("Parmanent address of candidate:-"+paddress);
    

    // Optionally, you can clear the form fields after submission
    document.getElementById('contactForm').reset();

}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', handleSubmit);