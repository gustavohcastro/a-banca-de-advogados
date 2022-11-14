import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from './interface'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const posts: Post[] = [
    {
      id: 1,
      title: 'Contratos em 2022',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec.',
      author: 'Dr. Felipe André Dani',
      created: '1 semana atrás',
      timeToRead: '12 minutos de leitura.'
    },
    {
      id: 2,
      title: 'Assessoria Jurídica',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ligula, dapibus vitae vulputate nec.',
      author: 'Dr. Melkis Cardoso',
      created: 'Hoje',
      timeToRead: '20 minutos de leitura.'
    }
  ]
  res.status(200).json(posts)
}
