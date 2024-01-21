import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../libs/serverAuth";
import { NextResponse } from "next/server";



// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).end();
//   }

//   try {
//     const { currentUser } = await serverAuth(req, res);

//     return res.status(200).json(currentUser);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).end();
//   }
// }


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
         const { currentUser } = await serverAuth(req, res);
    
        return res.status(200).json(currentUser);
       } catch (error) {
         console.log(error);
        // return res.status(400).end();
      }
  return NextResponse.json({ message: "user" });
}