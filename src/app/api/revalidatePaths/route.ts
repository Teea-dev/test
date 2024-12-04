import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

/* 
Revalidate a path and refetch server side cached Data.
Check Docs : https://nextjs.org/docs/app/building-your-application/data-fetching 
Check Docs : https://nextjs.org/docs/app/building-your-application/caching 
*/
export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get('path')


    if (!path) {
        return NextResponse.json({ message: 'Missing path param' }, { status: 400 })
    }

    revalidatePath(path);

    return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        path: path
    })
}