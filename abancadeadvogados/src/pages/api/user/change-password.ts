import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../lib/prismadb";
import Cors from 'cors'
import { hash } from 'bcryptjs';

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
        
        if (!data.userId) {
            return res.status(500).json({ message: 'Usuário não informado'})
        }

        const user = await prisma.user.findUnique({
            where: {
                id: data.userId
            },
        })

        if (!user) {
            return res.status(500).json({ message: 'Usuário não encontrado'})
        }
        const hashedPassword = await hash(data.newpassword, 10);

        const result = await prisma.user.update({
            where: { id: data.userId },
            data: { password: hashedPassword },
        });

        res.status(200).json({post: result.id})

    }
    catch(e) {
        console.log(e.message)
        res.status(500).json({ message: e.message})
    }
  
}
