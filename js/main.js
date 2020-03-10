
function validation() {
     let fn = document.getElementById("fname").value;
     let em = document.getElementById("email").value;
     let msg = document.getElementById("message").value;
     let btn = document.getElementById("button");
    let form = document.getElementById("form");
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
       
    
        let feedback = {
            fn: "",
            em: "",
            msg: ""
        };

        let error = [];

        //Check for fullname
        if (fn !== ""){
         feedback.fname = fn;

            } else {
                error.push("Please enter your full name");
            }

        //Check for email

if (em !== "") {
        if (mailformat.test(em)) {
            feedback.email = em;
        } else {
            error.push("Invalid email!");
        }
       } else {
            error.push("Please enter your email.");
        }

        //Check for message

        if (msg !== ""){
                feedback.message = msg;
            } else {
                error.push("Please type your message here");
            }

         if (error.length > 0) {
        console.log("Error:")
        console.log(error);
    } else {
        console.log("Feedback:");
        console.log(feedback);
        form.reset();
    }
}
       
btn.addEventListener("click", validation);


// asdfghjmmhgrfeweg



