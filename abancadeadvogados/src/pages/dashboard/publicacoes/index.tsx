import Head from "next/head"
import React from "react"// import dynamic from 'next/dynamic'
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "../../../services/axios";

import moment from "moment";
import { FiEdit, FiStar, FiTrash } from "react-icons/fi";
import Router, { useRouter } from "next/router";
import DashboardMenu from "../../../components/DashboardMenu";
import prisma from "../../../lib/prismadb"
import api from "../../../services/api";
import Notiflix from "notiflix";

async function getAllPosts(){
    //ATTENTION: sempre trocar para 1 quando subir
    const posts = await prisma.post.findMany({
      where:{
        isActive : 1
      },
      include : {
          userId: {
              select: {
                  name: true
              }
          },
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    // console.log(posts)
    //ATTENTION: sempre trocar para 1 quando subir
    const data = posts.map(post => {
        return {
            id: post.id,
            title: post.title,
            body: post.body,
            cropped: post.cropped,
            image: post.image,
            timeToRead: post.timeToRead,
            user: post.userId,
            date: post.createdAt.toISOString()
        }
    })

    return data
}

const DashboardPublicacoes = ({allPosts}) => {

  const router = useRouter();

  const handleNewPost = () => {
    Router.push('nova-publicacao')
  }

  const handleDelete = async (id: string) => {
     try {
        
        
        api.post('api/posts/delete-post', {postId: id})
        .then(response => {
          
          if (response.data) {
            Notiflix.Notify.success('Publicação excluida com sucesso');
          }

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
      <title>Publicações</title>
    </Head>
      <div className="flex min-w-full h-full bg-white" >
        <DashboardMenu/>
        
          <div className="w-full  px-4 py-3 text-left sm:px-6">
            <button
              type="button"
              onClick={handleNewPost}
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none"
            >
              Nova Publicação
            </button>

            <div>
              <table className="min-w-full mt-6">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Código
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Título
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Autor
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Criado em
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allPosts.map((post, index) => (
                    <tr key={post.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {post.title}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {post.user.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {moment(post.date).format('DD/MM/YYYY') }
                      </td>
                      <td>
                        <button
                          onClick={() => Router.push(`editar-publicacao?post=${post.id}`)}
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none"
                        >
                          <FiEdit/>
                        </button>
                        <button
                          type="button"
                          className="inline-flex mx-3 justify-center rounded-md border border-transparent bg-yellow-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none"
                        >
                          <FiStar/>
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none"
                        >
                          <FiTrash/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> 


          
            
          
      </div>
    </>
  )
}

export default DashboardPublicacoes;

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

  const allPosts = await getAllPosts();

    return {
        props: {
            allPosts
        }
    }
}