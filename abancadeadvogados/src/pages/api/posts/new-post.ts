import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from "../../../lib/prismadb"
import app from '../../../services/firebase';
import storage from '../../../services/firebase';
import {getDownloadURL, ref, uploadBytesResumable, getStorage} from "firebase/storage"
import formidable from 'formidable';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {  
        
        const result = await prisma.post.create({data: req.body})
        res.status(200).json({post: result.id})
    }
    catch(e) {
        
        res.status(500).json({ message: e.message})
    }
  
}
