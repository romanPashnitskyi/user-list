import React from 'react';
import styled from 'styled-components';

const UlWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Link = styled.a`
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border: 1px solid #ddd;
    
    &:active {
        background-color: #5995ef;
        color: white;
        border: 1px solid #5995ef;
    }
    :hover:not(:active) {
        background-color: #ddd;
    }
`;

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <UlWrapper>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Link onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </Link>
                    </li>
                ))}
            </UlWrapper>
        </nav>
    )
};

export default Pagination