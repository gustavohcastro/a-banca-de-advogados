import Head from "next/head"
import React, { useContext } from "react"// import dynamic from 'next/dynamic'
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "../../../services/axios";
import { useForm } from "react-hook-form";
import DashboardMenu from "../../../components/DashboardMenu";
import api from "../../../services/api";
import { useSession, getSession } from "next-auth/react"
import { AuthContext } from "../../../contexts/AuthContext";
import Notiflix from "notiflix";


const DashboardNovaPublicacao = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useContext(AuthContext)
    
    const handleForm = async (data) => {
      try {
        data.user = user.id;
        
        api.post('api/posts/new-post', data)
        .then(response => {
          
          if (response.data) {
            Notiflix.Notify.success('Publicação criada com sucesso');
          }
          reset()
          

        })
        .catch(e => {
          Notiflix.Notify.failure(e.message);
        }) 

      }
      catch(e){
        Notiflix.Notify.failure(e.message);
      }
    }

  return (
   <>
      <Head>
        <title>Nova Publicação</title>
      </Head>
      <div className="flex min-w-full h-full bg-white" >
        <DashboardMenu/>
        {/* Form Area/ */}
         <div className="w-full h-full overflow-y-scroll px-4 py-3">

          <h3 className="text-xl text-gray-900 font-bold py-2">
            Nova Publicação
          </h3>

          <form onSubmit={handleSubmit(handleForm)}>
            
            <div className="flex flex-row">

              <div className="mb-6 flex-1">
                  <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                  <input {...register('title')} type="text" id="title" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Contratos em 2022" required/>
              </div>

              <div className="mb-6 flex-1  ml-2">
                  <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
                  <input {...register('slug')} type="text" id="slug" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="contratos-em-2022" required/>
              </div>

              <div className="mb-6 flex-1  ml-2">
                  <label htmlFor="timeToRead" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempo de leitura</label>
                  <input {...register('timeToRead')} type="number" id="timeToRead" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: 12" required/>
              </div>
                
            </div>
                   
            <div className="mb-6 max-w-none">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Anexar imagem</label>
                <input {...register('file')} className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
            </div>    

            <div className="mb-6 max-w-none">
                <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Texto</label>
                <textarea {...register('body')} id="body" rows={20} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Conteúdo da publicação"></textarea>
            </div>


            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input {...register('post')} id="post" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                </div>
                <label htmlFor="post" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Publicar diretamente?</label>
            </div>

            <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Salvar</button>
            
          </form>
        </div>
      </div>
    </>
  )
}

export default DashboardNovaPublicacao;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ['abancadeadvogados.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props : {

    }
  }
}