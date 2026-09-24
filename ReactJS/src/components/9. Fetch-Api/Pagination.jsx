import React from 'react';

const Pagination = ({ totalPages, currentPage,onPageChange ,limit, onLimitChange}) => {

const pages = [];
for(let i=1;i<=totalPages;i++){
    pages.push(i);
}
return (
    <div>
        <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
            <p>Per Page:</p>
            <select value={limit} onChange={(e) => onLimitChange(Number(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </div>

        <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===1}>Previous</button>
            {pages.map((p)=>(
                <button key={p} style={{color:currentPage==p ? "red":'black'}} onClick={()=>onPageChange(p)}>
                    {p}
                </button>
            ))}
            <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage==totalPage }>Next</button> 
    </div>
  )
}

export default Pagination