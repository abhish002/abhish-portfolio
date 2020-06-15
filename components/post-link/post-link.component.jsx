import React from 'react'
import Link from 'next/link'

export const PostLink = ({ title, content, slug }) => {
    return (
        <li>
            <Link as={`${slug}`} href={`/post?title=${title}&content=${content}`}>
                <a>{title}</a>
            </Link>
        </li>
    )
}

export default PostLink;
