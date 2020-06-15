import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/layout.componet'

export const Error = ({ error = null, showTabs = false }) => {
    const [message, setMessage] = useState('Oops..')

    useEffect(() => {
        if (error) {
            error.message && setMessage(error.message)
        }
    }, [error])

    return (
        <div className='error'>
            {!showTabs && <h1>Error Page</h1>}
            {
                showTabs ?
                    error ? (
                        <Layout title='Error Page'>
                            {JSON.stringify(error)}
                            &nbsp;
                            {message}
                        </Layout>
                    ) : <Layout title='Error Page'>{message}</Layout> :
                    error ?
                        <div>
                            {JSON.stringify(error)}
                            <p>{message}</p>

                        </div> :
                        <div>
                            <p>{message}</p>
                        </div>
            }
            <style jsx>{`
                .error {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 80vw;
                    margin: auto;
                    font-weight: bold;
                    font-size: 1.8rem;
                    flex-direction: column;
                }
            `}</style>
        </div>
    )
}

export default Error;
