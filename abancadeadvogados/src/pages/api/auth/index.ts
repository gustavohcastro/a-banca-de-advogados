import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../lib/prismadb"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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


export default async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        await runMiddleware(req, res, cors);
        
        const {email, password} = req.body;
        const KEY = process.env.JWT_KEY;

        if (!email) {
            return res.status(500).json({message : 'Usuário não informado'});
        }

        if (!password) {
            return res.status(500).json({message : 'Senha não informada'});
        }

        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

       await bcrypt.compare(password, user.password, function(err, res) {
            if (!res) {
              return res.status(500).json({message: 'Usuário ou senha não conferem'})
            }
        });

        if (!user) {
          return res.status(500).json({message: 'Usuário ou senha não conferem'})
        }

        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            createdAt: user.createdAt,
        };

        jwt.sign(payload,KEY, {
                expiresIn: 31556926, // 1 year in seconds
            },
            (err, token) => {
                
                return res.status(200).json({
                    success: true,
                    token: 'Bearer ' + token,
                });
            },
        );
    }
    catch (err: any) {
        return res.status(500).json({message: err.message});
    }
}
