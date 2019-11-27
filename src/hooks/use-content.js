import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
    const data = useStaticQuery(graphql`
        query{
            allMdx{
            nodes {
                frontmatter {
                title
                slug
                author
                }
                excerpt
            }
            }
        }
    `)

    return data.allMdx.nodes.map(content => ({
        title: content.frontmatter.title,
        author: content.frontmatter.author,
        slug: content.frontmatter.slug,
        excerpt: content.excerpt,
    }));
};

export default usePosts;