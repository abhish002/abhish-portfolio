import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

export const Layout = ({ title, children }) => {
    Router.onRouteChangeStart = url => {
        console.log(url);
        NProgress.start();
    }

    Router.onRouteChangeComplete = () => {
        NProgress.done();
    }

    Router.onRouteChangeError = () => {
        NProgress.done();
    }

    return (
        <div className='layout'>
            <Head>
                <title>Abhish Portfolio</title>
            </Head>
            <header>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/hireme'><a>Hire Me</a></Link>
                <Link href='/blog'><a>Blog</a></Link>
            </header>
            <main>
                <h1>{title}</h1>
                {children}
            </main>
            <footer>
                &copy; Abhish Abraham {new Date().getFullYear()}
            </footer>
            <style jsx>{`
                .layout {
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                h1 {
                    text-transform: capitalize;
                }

                header {
                    width: 100vw;
                    display: flex;
                    justify-content: space-around;
                    padding: 1em;
                    font-size: 1.2rem;
                    background: indigo;
                }

                header a {
                    color: darkgrey;
                    text-decoration: none;
                    text-transform: uppercase;                    
                }
                
                header a:hover {
                    font-weight: bold;
                    color: lightgrey;
                }

                main {
                    display: flex;
                    width: 80vw;
                    margin: auto;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                footer {
                    padding: 1em;
                    position: absolute;
                    bottom: 0;
                }
            `}</style>
            <style global jsx>{`
                body {
                    box-sizing: border-box;
                    font-size: 110%;
                    background: #f0f0f0;
                    margin-top: 0px;
                }
            `}</style>
        </div>
    )
}

export default Layout;
