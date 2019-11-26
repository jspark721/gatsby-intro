import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default() => (
    <Layout>
        <h1>About Page</h1>
        <p>This is the about page for the personal website</p>
        <Link to="/">&larr; back to home</Link>
    </Layout>
);