import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/layout/layout.componet';

export const Post = ({ router }) => {
    const { title, content } = router.query;
    return (
        <Layout title={title}>
            <p style={{ width: '80vw' }}>{content}</p>
        </Layout>
    )
}

export default withRouter(Post);
