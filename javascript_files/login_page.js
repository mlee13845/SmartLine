const real_password = "0990";
const login_button = document.getElementById('login_butt');
login_button.addEventListener('click', ()=>{
    const user_input = document.getElementById('password').value;
   if(user_input == real_password){
        window.location.href = 'ilab_screen.html';
   }else{
        alert("Incorrect password try again.");
   }
});
