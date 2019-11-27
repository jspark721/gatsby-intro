module.exports = {
    siteMetadata: {
        title: 'Gatsby Intro Workshop',
        description: 'A site built from scratch with Gatsby, React, and Netlify',
    },
    plugins: ['gatsby-plugin-emotion', 'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts: {
                default: require.resolve('./src/components/layout.js'),
            }
        }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'content',
            path: 'content',
        }
    }
],
}