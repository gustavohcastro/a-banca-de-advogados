import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from './interface'
import prisma from "../../../lib/prismadb"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        const data = req.body;
        
        if (!data.user) {
            return res.status(500).json({ message: 'Usuário não informado'})
        }

        if (!data.title) {
            return res.status(500).json({ message: 'Título não informado'})
        }

        if (!data.slug) {
            return res.status(500).json({ message: 'Slug não informado'})
        }
        
        if (!data.body) {
            return res.status(500).json({ message: 'Texto não informado'})
        }

        const payload = {
            title: data.title,
            body: data.body,
            cropped: data.body.substring(0, 90),
            image: '',
            timeToRead: data.timeToRead,
            authorId: data.user,
            slug: data.slug
        }

        const result = await prisma.post.create({data: payload})
        res.status(200).json({post: result.id})

    }
    catch(e) {
        console.log(e.message)
        res.status(500).json({ message: e.message})
    }
  
}
