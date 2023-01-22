import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from './interface'
import prisma from "../../../lib/prismadb"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        const data = req.body;
        
        if (!data.id) {
            return res.status(500).json({ message: 'Publicação não informada'})
        }

        const result = await prisma.post.update({
            where: {
                id: data.id,
            },
            data: {
                title: data.title,
                slug: data.slug,
                timeToRead: data.timeToRead,
                body: data.body
            },
        })

        res.status(200).json({post: result.id})

    }
    catch(e) {
        console.log(e.message)
        res.status(500).json({ message: e.message})
    }
  
}