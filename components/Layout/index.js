import Head from 'next/head'

export default function Layout({children}) {
    return (<div>
        <Head>
            <link rel="stylesheet" href="https://overpass-30e2.kxcdn.com/overpass.css" />
        </Head>
        <style jsx global>{`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0
            }
            html {
                background-color: #555;
            }
            h1, h2, h3, h4, h5, strong {
                font-family: overpass;
                font-weight: 600;
                line-height: 1em;
            }
            p {
                font-family: overpass;
                font-weight: 400;
                line-height: 1em;
            }
            ::-webkit-scrollbar { 
                display: none; 
            }            
        `}</style>
        {children}
    </div>)
}