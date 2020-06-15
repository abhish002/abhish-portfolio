import React, { useState, useEffect, useMemo, Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Logo from './static/js-logo.svg';
import Layout from '../components/layout/layout.componet'
import ErrorPage from './_error';

export default class About extends Component {
    // const [user, setUser] = useState(null);

    // useEffect(() => {        
    //     fetch('https://api.github.com/users/abhish002')
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // }, []);
    static async getInitialProps() {
        const response = await fetch('https://api.github.com/users/abhish002');
        const error = response.status > 200 ? response.status : false;
        const user = await response.json();

        return { user, error }
    }

    render() {
        const { user, error } = this.props;

        if (error) {
            return (<ErrorPage error={error} showTabs={true} />)
        }

        return (
            <Layout title='About'>
                <p className='about'><Logo width='40px' height='40px' /> A JavaScript programmer</p>
                <a href={user.html_url} target='_blank'><img src={user.avatar_url} alt='user_avatar' /></a>
                <p>{user.name}</p>
                <p className='bio'>{user.bio}</p>
                <style jsx>{`
                    .about {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .bio {
                        text-align: center;
                    }
                `}</style>
            </Layout>
        )
    }
}
