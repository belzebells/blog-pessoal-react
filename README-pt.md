**Português** | [English](README.md)

# Link do deploy: https://blog-pessoal-react-vert.vercel.app/

# **Blog Pessoal**

Um aplicativo de blog full-stack desenvolvido durante o Bootcamp de Desenvolvedor Java Full Stack da Generation Brasil. Este projeto permite que os usuários criem, leiam, atualizem e excluam postagens de blog, gerenciem temas e se autentiquem via tokens JWT.

## **Funcionalidades**
- **Autenticação de Usuário**: Login e registro seguros usando tokens JWT.
- **Operações CRUD**: Criar, ler, atualizar e excluir postagens de blog.
- **Gerenciamento de Temas**: Adicionar, editar e excluir temas para postagens de blog.
- **Design Responsivo**: Funciona perfeitamente em dispositivos desktop e móveis.

## **Tecnologias Utilizadas**
- **Front-end**: HTML, CSS, JavaScript, React.js
- **Back-end**: Java 17, Spring Boot, Spring Data JPA, Spring Security
- **Banco de Dados**: MySQL
- **Autenticação**: JWT (JSON Web Tokens)
- **Documentação da API**: Swagger

## **Demonstração Online**
- **Front-end Deployment**: [Blog Pessoal](https://blog-pessoal-react-vert.vercel.app/)
- **Documentação Swagger**: Disponível localmente em `http://localhost:8080/swagger-ui.html` (veja o GitHub para instruções de configuração).

## **Estrutura do Projeto**
Este projeto está dividido em três repositórios principais:
1. **Front-end**: [blog-pessoal-react](https://github.com/belzebells/blog-pessoal-react)  
2. **Back-end**: [blogpessoal](https://github.com/belzebells/blogpessoal)  
3. **Esquema do Banco de Dados**: [MySQL-DER-blog-pessoal](https://github.com/belzebells/MySQL-DER-blog-pessoal)  

## **Instruções de Configuração**
1. **Clone o Repositório do Front-end**:
   ```bash
   git clone https://github.com/belzebells/blog-pessoal-react.git
   cd blog-pessoal-react

2. **Instale as dependências**:
   ```bash
   npm install
   
3. **Inicie o Front-end**:
   ```bash
   npm start
   ```
   O front-end será iniciado em http://localhost:3000.

4. **Configure o Back-end**:
  - Clone o repositório do back-end:
     ```bash
     git clone https://github.com/belzebells/blogpessoal.git
     cd blogpessoal
   - Configure o banco de dados MySQL e atualize o arquivo application.properties com suas credenciais.
     
   - Execute o back-end:
     ```bash
     ./mvnw spring-boot:run
     ```
     O back-end será iniciado em http://localhost:8080.
     
5. **Configure o banco de dados**:
  - Clone o repositório do banco de dados:
    
      ```bash
     git clone https://github.com/belzebells/MySQL-DER-blog-pessoal.git
     cd MySQL-DER-blog-pessoal
      ```
   - Importe o arquivo SQL para o seu banco de dados MySQL.



   





   

   
