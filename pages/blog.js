import React from 'react';
import Layout from '../components/layout/layout.componet';
import PostLink from '../components/post-link/post-link.component';

export const Blog = () => {
    return (
        <Layout title='Blogs'>
            <ul>
                <PostLink slug='react-post' title='React post' content='Some content on react.' />
                <PostLink slug='angular-post' title='Angular post' content='Some content on react.' />
                <PostLink slug='vue-post' title='Vue post' content='Some content on react.' />
            </ul>
        </Layout>
    )
}

export default Blog;
