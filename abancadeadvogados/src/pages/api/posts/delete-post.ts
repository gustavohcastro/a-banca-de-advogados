import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from './interface'
import prisma from "../../../lib/prismadb";
import Cors from 'cors'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})


function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await runMiddleware(req, res, cors);
        const data = req.body;
        
        if (!data.postId) {
            return res.status(500).json({ message: 'Publicação não informada'})
        }

        const result = await prisma.post.update({
            where: {
                id: data.postId,
            },
            data: {
                isActive: 0,
            },
        })

        res.status(200).json({post: result.id})

    }
    catch(e) {
        console.log(e.message)
        res.status(500).json({ message: e.message})
    }
  
}
