import Head from "next/head"
import React, { useContext, useState } from "react"// import dynamic from 'next/dynamic'
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
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";


const DashboardChangePassword = ({ allPosts }) => {

    const router = useRouter();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext)


    const handleChangePassword = async (data: any) => {
        try {

            const { confirmpassword, newpassword, password } = data;

            if (confirmpassword === '' || newpassword === '' || password === '') {
                Notiflix.Notify.failure('Existem campos não preenchindos, por favor, tente novamente!');
                return;
            }

            if (confirmpassword !== newpassword) {
                Notiflix.Notify.failure('Senhas não coincidem, por favor, tente novamente!');
                return;
            }

            const payload = { userId: user.id, password, newpassword }

            api.post('api/user/change-password', payload)
                .then(response => {

                    if (response.data) {
                        Notiflix.Notify.success('Senha alterada com sucesso.');

                    }

                })
                .catch(e => {
                    Notiflix.Notify.failure(e.message);
                })

        }
        catch (e) {
            Notiflix.Notify.failure(e.message);
        }
    }

    return (
        <>
            <Head>
                <title>Publicações</title>
            </Head>
            <div className="flex min-w-full h-full bg-white" >
                <DashboardMenu />

                <div className="w-full  px-4 py-3 text-left sm:px-6">

                    <div className="w-full justify-center max-w-md m-auto">
                        <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleChangePassword)}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Senha atual
                                </label>
                                <input {...register('password')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Nova senha
                                </label>
                                <input {...register('newpassword')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Confirmar nova senha
                                </label>
                                <input {...register('confirmpassword')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className=" bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Alterar senha
                                </button>
                            </div>
                        </form>

                    </div>
                </div>





            </div>
        </>
    )
}

export default DashboardChangePassword;

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
        props: {

        }
    }
}