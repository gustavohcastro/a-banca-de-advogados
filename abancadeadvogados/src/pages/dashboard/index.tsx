import Head from "next/head"
import React, { useEffect } from "react"// import dynamic from 'next/dynamic'
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "../../services/axios";
import DashboardMenu from "../../components/DashboardMenu";


export default function Dashboard() {

  return (
   <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <DashboardMenu/>
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

//   await apiClient.get('/users')

  return {
    props: {}
  }
}