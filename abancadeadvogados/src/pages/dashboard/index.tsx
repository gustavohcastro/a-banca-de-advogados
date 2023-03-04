import Head from "next/head"
import React, { useEffect } from "react"// import dynamic from 'next/dynamic'
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "../../services/axios";
import DashboardMenu from "../../components/DashboardMenu";
import { FiEye, FiFile, FiUser } from "react-icons/fi"
import moment from "moment";
import Link from "next/link";

async function getPostsPerUsers() {
  try {
    const query = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        Post: {
          select: {
            id: true,
          },
        },
      },
    });

    const data = query.map(user => {
      return {
        id: user.id,
        name: user.name,
        totalPosts: user.Post.length,
      }
    })
    return data
  }
  catch (e) {
    return []
  }

}

async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        userId: {
          select: {
            name: true
          }
        },
      },
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
      take: 20
    });

    const data = posts.map(post => {
      return {
        id: post.id,
        title: post.title,
        body: post.body,
        cropped: post.cropped,
        image: post.image,
        timeToRead: post.timeToRead,
        slug: post.slug,
        user: post.userId,
        date: post.createdAt.toISOString()
      }
    })

    return data
  }
  catch (e) {
    return []
  }
}


export default function Dashboard({ postsPerUsers, posts }) {
  const totalPostsCount = postsPerUsers.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPosts,
    0
  );
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex min-w-full h-full bg-white" >
        <DashboardMenu />
        <div className="grid mb-4 pb-10 px-2 w-full h-full">
          <div className="py-3 px-2 w-full">
            <p className="ml-2 mt-3 font-bold text-2xl text-gray-900 text-center xl:text-left">Dashboard</p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
              <div className="col-span-12">
                <div className="grid grid-cols-12 gap-6 mt-5 p-6">
                  <a className="transform hover:scale-105 transition duration-300 shadow-md rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                    <div className="p-5">
                      <div className="flex justify-between">
                        <FiFile color="#111827" style={{ width: 24, height: 24 }} />
                        <div
                          className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                          <span className="flex items-center">100%</span>
                        </div>
                      </div>
                      <div className="ml-2 w-full flex-1">
                        <div>
                          <div className="mt-3 text-3xl font-bold py-2 leading-8">{totalPostsCount}</div>

                          <div className="mt-1 text-base text-gray-600">Total de posts</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  {postsPerUsers.map(item => (
                    <a key={item.id} className="transform  hover:scale-105 transition duration-300 shadow-md rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#">
                      <div className="p-5">
                        <div className="flex justify-between">
                          <FiUser color="#111827" style={{ width: 24, height: 24 }} />
                          <div
                            className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span className="flex items-center">{(totalPostsCount * item.totalPosts).toFixed(2)}%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-3xl font-bold py-2  leading-8">{item.totalPosts}</div>

                            <div className="mt-1 text-base text-gray-600">{item.name}</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}

                </div>
              </div>
              <div className="col-span-12 mt-5">
                <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                  <div className="bg-white p-4 shadow-lg rounded-lg">
                    <div className="flex flex-row items-baseline">
                      <h1 className="font-bold text-gray-900 text-xl">Resumo de publicações</h1>
                      <Link href='/dashboard/publicacoes' className="font-bold text-gray-900 text-base">
                        <p className="text-gray-700 underline cursor-pointer ml-2 textsm">Ver todas</p>
                      </Link>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-col max-h-80 p-4">
                        <div className="-my-2 overflow-x-auto">
                          <div className="py-2 align-middle inline-block min-w-full">
                            <div
                              className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                  <tr>
                                    <th
                                      className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                      <div className="flex cursor-pointer">
                                        <span className="mr-2">Título</span>
                                      </div>
                                    </th>
                                    <th
                                      className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                      <div className="flex cursor-pointer">
                                        <span className="mr-2">Autor</span>
                                      </div>
                                    </th>
                                    <th
                                      className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                      <div className="flex cursor-pointer">
                                        <span className="mr-2">Data</span>
                                      </div>
                                    </th>
                                    <th
                                      className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                      <div className="flex cursor-pointer">
                                        <span className="mr-2">Ações</span>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {posts.map((item) => (
                                    <tr key={item.id}>
                                      <td
                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <p>{item.title}</p>
                                        <p className="text-xs text-gray-400">{item.slug}</p>
                                      </td>
                                      <td
                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <p>{item.user.name}</p>
                                      </td>
                                      <td
                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <div className="flex text-gray-400">
                                          <p>{moment(item.date).format('DD/MM/YYYY')}</p>
                                        </div>
                                      </td>
                                      <td
                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <div className="flex space-x-4">
                                          <Link href={`/dashboard/editar-publicacao?post=${item.id}`} className="text-blue-500 hover:text-blue-600 justify-center">
                                            <div className="flex flex-row cursor-pointer items-center">
                                              <FiEye color="#3b82f6" />
                                              <p className="text-blue-500 mx-2 hover:text-blue-600 justify-center">Editar</p>
                                            </div>
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


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

  const postsPerUsers = await getPostsPerUsers();
  const posts = await getPosts();

  return {
    props: {
      postsPerUsers,
      posts
    }
  }
}