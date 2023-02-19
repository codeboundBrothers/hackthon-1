let gotoLogIn_btn = document.querySelector('.passive-btn');
let form = document.getElementById('signup');
let login_sect = document.querySelector('#login');
let login_form = document.querySelector('#login > form');
let todos = document.querySelector('#todos-btn');
let signupSec = document.querySelector('.form');

// For Registration 


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        let obj = {
            // name : form.name.value,
            // username : form.username.value,
            email : form.email.value,
            password : form.password.value,
        }

        let fetched_data = await fetch('https://reqres.in/api/register', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj)
        });

        let data = await fetched_data.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
})

gotoLogIn_btn.addEventListener('click', () => {
    signupSec.style.display = 'none';
    login_sect.style.display = 'block';
})

// For LogIn

login_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        let obj = {
            username : login_form.email.value,
            password : login_form.password2.value
        }

        let fetched_data = await fetch('https://reqres.in/api/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj)
        });

        let data = await fetched_data.json();
        console.log(data);

        if(data.token){
            alert('Login Successfull!!');
            todos.style.display = 'flex';
            login_sect.style.display = 'none';
        }
        else{
            alert('Wrong Credentials!!');
        }


    } catch (error) {
        console.log(error);
    }
    
})