import Head from "next/head";
import FooterComponent from "../../../components/Footer";
import HeaderComponent from "../../../components/Header";
import { BackgroundImage, BannerArea, PostArea } from "../../../styles/pages/PublicacaoDetalhe";
import React from 'react';
import { GetServerSideProps } from "next";
import moment from "moment";

export interface PostFilterProps {
    slug?: string;
}
async function getPost(filter: PostFilterProps){
    try {
        
        const {slug} = filter;
        const posts = await prisma.post.findMany({
            where: {
                slug : {
                    equals: slug,  
                },
            },
            include : {
                userId: {
                    select: {
                        name: true
                    }
                }

            }
            ,take: 1
        });

        if (posts.length < 1) {
            return null;
        }

        const post = posts[0];
        
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
    }
    catch(e){
        return  null
    }  
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const urlParams = (context.query)
    
    const post = await getPost(urlParams);

    if (post === null) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            post
        }
    }
}


const Post: React.FC = ({post}:any) => {
    
    return (
        <>
            <Head>
                <title>{post?.title}</title>
                <link rel="icon" type="image/x-icon" href={"./assets/images/favicon.png"}/>
            </Head>
            <main>
                <BackgroundImage style={{height: '70vh'}}>
                    <HeaderComponent/>
                    <BannerArea>
                        <h2>{post?.title}</h2>
                    </BannerArea>
                </BackgroundImage>
                <PostArea>
                    <h1>Autor: Dr. {post?.user.name}</h1>
                    <h3>Data: {moment(post?.date).format('DD/MM/YYYY')}</h3>
                    <p>{post?.body}</p>
                </PostArea>
                <FooterComponent/>
                </main>
        </>
    )
}

export default Post;