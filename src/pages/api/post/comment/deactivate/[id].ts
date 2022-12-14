import type { NextApiRequest, NextApiResponse } from 'next'
import { deactivateComment } from '~/controllers/comment-controller'
import connectDB from '~/middleware/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'PATCH':
      deactivateComment(req, res)
      break
  }
}

export default connectDB(handler)
