[Português](README-pt.md) | **English**

# **Blog Pessoal (Personal Blog)**

A full-stack blog application developed during the Generation Brazil Full Stack Java Bootcamp. This project allows users to create, read, update, and delete blog posts, manage themes, and authenticate via JWT tokens.

## **Features**
- **User Authentication**: Secure login and registration using JWT tokens.
- **CRUD Operations**: Create, read, update, and delete blog posts.
- **Theme Management**: Add, edit, and delete themes for blog posts.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## **Technologies Used**
- **Front-end**: HTML, CSS, JavaScript, React.js
- **Back-end**: Java 17, Spring Boot, Spring Data JPA, Spring Security
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger

## **Live Demo**
- **Front-end Deployment**: [Blog Pessoal](https://blog-pessoal-react-vert.vercel.app/)
- **Swagger Documentation**: Available locally at `http://localhost:8080/swagger-ui.html`.

## **Project Structure**
This project is divided into three main repositories:
1. **Front-end**: [blog-pessoal-react](https://github.com/belzebells/blog-pessoal-react)  
2. **Back-end**: [blogpessoal](https://github.com/belzebells/blogpessoal)  
3. **Database Schema**: [MySQL-DER-blog-pessoal](https://github.com/belzebells/MySQL-DER-blog-pessoal)  

## **Setup Instructions**
1. **Clone the Front-end Repository**:
   ```bash
   git clone https://github.com/belzebells/blog-pessoal-react.git
   cd blog-pessoal-react
   
2. Install Dependencies:
```bash
npm install
```

3. Start the Front-end:
```bash
npm start
```
The front-end will start at http://localhost:3000.

4. Set Up the Back-end:
Clone the back-end repository:
```
git clone https://github.com/belzebells/blogpessoal.git
cd blogpessoal
```
Set up the MySQL database and update the application.properties file with your database credentials.

Run the back-end:
```
./mvnw spring-boot:run
```
The back-end will start at http://localhost:8080.

5. Set Up the Database:
Clone the database repository:
```
git clone https://github.com/belzebells/MySQL-DER-blog-pessoal.git
cd MySQL-DER-blog-pessoal```
```
Import the SQL file into your MySQL database.
```



