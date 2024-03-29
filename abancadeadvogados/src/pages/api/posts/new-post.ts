import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../lib/prismadb"
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
        const result = await prisma.post.create({data: req.body})
        res.status(200).json({post: result.id})
    }
    catch(e) {
        
        res.status(500).json({ message: e.message})
    }
  
}
