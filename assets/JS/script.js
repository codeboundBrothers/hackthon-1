let gotoLogIn_btn = document.querySelector('.log-in-btn');
let form = document.getElementById('signup');
let login_form = document.querySelector('#login');
let todos = document.querySelector('.flex');

// For Registration 

// fetch('https://reqres.in/api/users')
// .then(res => {return res.json()})
// .then(data => {return data})
// .catch(err => {console.log(err)})


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        let obj = {
            name : form.name.value,
            username : form.username.value,
            email : form.email.value,
            password : form.password.value,
        }

        let fetched_data = await fetch('https://reqres.in/api/users', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj)
        });

        let data = await fetched_data.json();
        alert('Registration Successful');

    } catch (error) {
        console.log(error);
    }
})

gotoLogIn_btn.addEventListener('click', () => {
    form.style.display = 'none';
    login_form.style.display = 'block';
})

// For LogIn

login_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        let obj = {
            username : login_form.username2.value,
            password : login_form.password2.value
        }

        let fetched_data = await fetch('https://reqres.in/api/users', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj)
        });

        let data = await fetched_data.json();

        if(data.accessToken){
            alert('Login Successfull!!');
            todos.style.display = 'block';
        }
        else{
            alert('Wrong Credentials!!');
        }


    } catch (error) {
        console.log(error);
    }
    
   
    
    
    
    
})