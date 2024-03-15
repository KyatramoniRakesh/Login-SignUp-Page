# User Login and Registration System
![image](https://github.com/KyatramoniRakesh/Login-SignUp-Page/assets/93992093/dd26da9d-2bf7-4242-a0df-19c38e033c3f)


Welcome to the User Login and Registration System Readme! This system provides a secure and user-friendly interface for users to register their details, log in, and view their personal information.


## Features

1. **User Registration:** Users can sign up by providing necessary details such as username, email address, and password.
2. ![image](https://github.com/KyatramoniRakesh/Login-SignUp-Page/assets/93992093/5bf72690-acd7-4d06-8de9-1322094b5ce3)
3. **Secure Login:** Registered users can securely log in using their username/email and password combination.
4. **User Profile:** Upon logging in, users can view their personal information.
5. ![image](https://github.com/KyatramoniRakesh/Login-SignUp-Page/assets/93992093/f6b278e3-c084-4e3d-88e5-3fdb169bb46b)

6. **Password Encryption:** Passwords are securely hashed before being stored in the database to ensure user security.
7. **Validation:** Input data is validated to ensure accuracy and prevent malicious attacks.
8. ![image](https://github.com/KyatramoniRakesh/Login-SignUp-Page/assets/93992093/1633c709-0398-4ddf-b84c-70f9e7dbb50a)


## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** python with Django framework 
- **Database:** MySQL for storing user information


## Setup Instructions

1. **Clone the Repository:**
   ```
   git clone https://github.com/your_username/login-registration.git
   ```


2. **Set up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

3. **Start the Server:**
   ```
   py manage.py runserver   
   ```

4. **Access the Application:**
   Open your web browser and navigate to `http://localhost:3000` to access the login and registration page.

## Usage

1. **Registration:**
   - Click on the "Register" link on the login page.
   - Enter your details: username, email, and password.
   - Click the "Register" button to create your account.

2. **Login:**
   - Enter your registered username/email and password on the login page.
   - Click the "Login" button.

3. **View Profile:**
   - After logging in, you'll be redirected to your profile page.
   - Here, you can view your registered details.

4. **Logout:**
   - Click on the "Logout" link to securely log out of your account.

## Contribution

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make appropriate changes and commit them.
4. Push to the feature branch (`git push origin feature/improvement`).
5. Create a pull request.



Thank you for using the User Login and Registration System! If you have any questions or encounter any issues, please feel free to contact us.

