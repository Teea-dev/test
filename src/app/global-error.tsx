'use client'

// import RouteSegmentErrorBoundary, { RouteSegmentErrorType } from "./_global-components/RouteSegmentErrorBoundary"

export default function GlobalError() {
    return (
        <html>
            <body>
                <div style={{ height: '100%' }}>
                    <p>500 Server Error</p>
                    {/* <RouteSegmentErrorBoundary {...props} /> */}
                </div>
            </body>
        </html>
    )
}