import React from 'react';
import homeLogo from '../../assets/home.png';


import './Home.css';

function Home() {
  return (
    <>
      <div className="bg-teal-800	 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>olá, seja bem vinde!</h2>
            <p className='text-xl'>senta. pega um cafezinho!</p>

            <div className="flex justify-around gap-4">

              <button className='rounded bg-teal-950 text-cyan-50 py-2 px-4'>ver postagens</button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;