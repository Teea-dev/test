import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

/* 
Revalidate a Tag and refetch server side cached Data.
Check Docs : https://nextjs.org/docs/app/building-your-application/data-fetching 
Check Docs : https://nextjs.org/docs/app/building-your-application/caching 
*/
export async function GET(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag')



    if (!tag) {
        return NextResponse.json({ message: 'Missing tag param' }, { status: 400 })
    }

    revalidateTag(tag);

    return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        tag: tag
    })
}