import React, { useEffect } from "react"
import { FiMenu, FiBox, FiX } from "react-icons/fi"
import Router from 'next/router';
import Link from "next/link";

const DashboardMenu = () => {


  const handleNavigation = (target: string) => {
    Router.push(target);
  }

  const dropDown = () => {
    // document.querySelector('#submenu').classList.toggle('hidden')
    // document.querySelector('#arrow').classList.toggle('rotate-0')
  }

  const Openbar = () => {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
  }

  const handleLogout = async () => {
    Router.push('/')
  }

  useEffect(() => {
    dropDown()
  }, [])

  return (
    <>
      <span className="fixed text-white text-4xl top-5 left-4 z-10 cursor-pointer rounded-md bg-gray-900 p-2" onClick={Openbar}>
        <FiMenu />
        {/* <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i> */}
      </span>

      <div className="sidebar fixed xl:relative top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
      p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen z-10">

        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between rounded-md ">
            <div className="flex items-center">
              <FiBox className="bi bi-app-indicator" />
              <h1 className="text-[15px]  ml-3 text-xl text-gray-200 font-bold">Dashboard</h1>
            </div>
            <FiX className="bi bi-x ml-20 cursor-pointer lg:hidden" onClick={Openbar} />
            {/* <i ></i> */}
          </div>

          <hr className="my-2 text-gray-600"></hr>

          <div>

            <div onClick={() => handleNavigation('/dashboard')} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200">Início</span>
            </div>

            <div onClick={() => handleNavigation('/dashboard/publicacoes')} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200">Publicações</span>
            </div>

            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-envelope-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200">Serviços</span>
            </div>

            <hr className="my-4 text-gray-600"></hr>

            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="text-[15px] ml-4 text-gray-200">Alterar Senha</span>
            </div>

            <div onClick={() => handleLogout()} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="text-[15px] ml-4 text-gray-200">Sair</span>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default DashboardMenu