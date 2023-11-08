import axios from 'axios'
import { NextResponse } from 'next/server'


export async function POST(request:Request) {
    const body = await request.json()
    try {
        const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}document/validate`, body)
        if(data.errorcode!==0){throw new Error(data.content)}
        return new Response(JSON.stringify(data))
    } catch (error:any) {
        return NextResponse.json({error:error.message}, { status:422 })
    }
}