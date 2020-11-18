import Head from 'next/head'
import Link from 'next/link'

const Layout = ( { title, children } ) => {



    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <Link href="/"><a>I'm a header</a></Link>
            </header>
            <main>
                { children }
            </main>
            <footer>
                I'm a footer
            </footer>
        </>
    )
}

export default Layout