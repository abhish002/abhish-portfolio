import React from 'react'
import Layout from '../components/layout/layout.componet'

export const HireMe = () => {
    return (
        <Layout title='Hire Me'>
            <p>You can reach me at <a href='mailto:abhish002@gmail.com'>abhish002@gmail.com</a></p>
            <style jsx>{`
                p {
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                }
            `}</style>
        </Layout>
    )
}

export default HireMe;
