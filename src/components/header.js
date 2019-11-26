import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
    color: #222;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1;
    margin: 0 0.5rem 0 0;
    padding: 0.25rem;
    text-decoration: none;
`;

const Header = () => (
    <header
        css={css`
            background: #eee;
            border-bottom: 1px solid #ddd;
            display: flex;
        `}
    >
        <NavLink to="/">Gatsby Intro</NavLink>
        {/* navigation */}
    </header>
);

export default Header;