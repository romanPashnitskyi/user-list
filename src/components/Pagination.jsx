import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 15px;
`;

const Link = styled.a`
    color: black;
    float: left;
    margin: 0 4px;
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

const Pagination = ({ perPage, total, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationWrapper>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <Link onClick={() => paginate(number, perPage)} className='page-link'>
                        {number}
                    </Link>
                </li>
            ))}
        </PaginationWrapper>
    )
};

export default Pagination