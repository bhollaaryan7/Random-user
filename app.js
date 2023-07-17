// gsap.to(".arrow", {
//     x: -100,
//     y: -100,
//     rotation: -45,
//     duration: 1,
//     ease: "power1.inOut",
//     onComplete: function() {
//       gsap.to(".arrow", {
//         x: 0,
//         y: 0,
//         rotation: 0,
//         duration: 1,
//         ease: "power1.inOut",
//         delay: 0.5
//       });
//     }
//   });
// Set up initial position and rotation of the spaceship
const spaceship = document.getElementById('spaceship');
let xPos = 0;
let yPos = 0;
let rotation = 0;

// Function to animate the spaceship's movement
function animateSpaceship() {
  // Update the spaceship's position and rotation
  TweenMax.to(spaceship, 2, {
    x: xPos,
    y: yPos,
    rotation: rotation,
    ease: Power1.easeInOut,
    onComplete: animateSpaceship
  });

  // Generate random values for the next movement
  xPos = Math.random() * window.innerWidth;
  yPos = Math.random() * window.innerHeight;
  rotation = Math.random() * 360;
}

// Start the animation
animateSpaceship();



let randomNumber = Math.floor((Math.random()*1000000))+1;
console.log(randomNumber);

document.getElementById("submit").addEventListener("click",function(){
    console.log("clicked");
    let code = document.getElementById("secret").value;
    console.log(parseInt(code)==randomNumber)
    console.log(randomNumber)
    console.log((code))

    if(code==randomNumber){
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
              console.log(data.results);
              console.log(data.results[0].id.name);
              const results = data.results;
              document.querySelector("#genderIMG").src=`./imgs/${data.results[0].gender}.jfif`;
              document.querySelector("#IdentityIMG").src="./imgs/name.jfif";
              document.querySelector("#emailIMG").src="./imgs/@.jfif";
              document.querySelector("#phoneIMG").src="./imgs/phone.jfif";
              document.querySelector("#nameText").innerHTML="Your new Identity:";
              document.querySelector("#genderText").innerHTML="Your gender:";
              document.querySelector("#emailText").innerHTML="Your email ID:";
              document.querySelector("#phoneText").innerHTML="Your phone number is:";
              document.querySelector("#genderReveal").innerHTML=data.results[0].gender;
              document.querySelector("#name").innerHTML=data.results[0].id.name;
              document.querySelector("#phone").innerHTML=data.results[0].phone;
              document.querySelector("#email").innerHTML=data.results[0].email;



                
            }
          });

    }

})

// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });