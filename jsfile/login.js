let lgoinbtn=document.getElementById('hadlesubmit')


 async function login () {
        // e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
         console.log("Email",email);
         console.log("password",password);
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
    
        try {
            const response = await fetch('https://sapthapadhimatrimony.in/backend/auth/userLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phone:email, password })
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
    
            // Save token and user data to sessionStorage
            localStorage.setItem('authInfo', JSON.stringify(data.userDetails));
    
         
            successMessage.style.display = 'block';
            successMessage.textContent = 'Login successful!';
            window.location.href = '/user-dashboard.html'; // Redirect to the desired page
        } catch (error) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = `Error: ${error.message}`;
        }
    }
    
