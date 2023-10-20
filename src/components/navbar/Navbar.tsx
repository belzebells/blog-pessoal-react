import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent  //variavel usada no conteúdo sobre renderização condicional
  
  return (
    <>
     <div className='w-full bg-teal-600 text-white flex center py-5'>
          <div className="container text-lg">
          <Link to='/home' className='text-2xl font-bold lowercase flex start'>.  blog pessoal</Link>

            <div className='flex gap-3' >
              
            <div className='hover:underline'>| postagens | </div>
            <Link to='/temas' className='hover:underline'>temas | </Link>
            <Link to='/cadastroTema' className='hover:underline'>cadastrar tema | </Link>
              <div className='hover:underline'>perfil | </div>
              <Link to='' onClick={logout} className='hover:underline'>sair </Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
