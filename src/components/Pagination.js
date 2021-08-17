import React from 'react'

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers =[];

    for(let i =1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);

    }
    
    return (
        <nav>
            {pageNumbers.map(number=>(
                <a href='#!' onClick={()=> paginate(number)}>
                    {number}
                </a>
            ))}

        </nav>
    )
}
