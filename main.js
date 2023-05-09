$('#signup-form').on('submit', function(event) {

    event.preventDefault();

    $('.error-message').remove();

    let name = $('#name').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let confirm_password = $('#confirm_password').val();

    if (password !== confirm_password) {
        $('#confirm_password').after('Las contraseñas no coinciden');
        return;
    }
    $.ajax({
        url: 'http://localhost:4000/user',
        method: 'POST',
        data: {
            name: name,
            email: email,
            password: password
        },
        success: function(response) {
            console.log(response);

        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        }
    })
});
const loginForm = document.getElementById("login-form");
const errorDiv = document.getElementById("error-message");

// Define los usuarios y sus credenciales
const users = fetch('http://localhost:4000/user')
    .then(response => response.json())
    .then(users => {
      console.log(users);
      
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let email = document.getElementById("email2").value;
        let password = document.getElementById("password2").value;
        let isAuthenticated = false;
        
        // Itera sobre los usuarios y verifica las credenciales
        for (let i = 0; i < users.length; i++) {if (users.email === email && (users.password) === password) {
            isAuthenticated = true;
            // Si la autenticación fue exitosa, redirige al usuario a la página correspondiente
            window.location.href = "./pag_inicio/index.html";
            break;
          }
        }
      
        // Si la autenticación fracasó, muestra un mensaje de error
        if (!isAuthenticated) {
          errorDiv.innerHTML = "El usuario o contraseña son incorrectos. Por favor, inténtalo de nuevo.";
          console.log(password);
        console.log(users.password);
        window.location.href = "./pag_inicio/index.html"
        }
      });
    });
  
;

