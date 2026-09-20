import React from 'react';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleprevious = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNext = () => {
        if(currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }
const getPageNumbers = () => {
    let pages =[]
    for(let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return pages;

}


return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",marginTop:"20px"}}>

    <button onClick={handleprevious} disabled={currentPage === 1}>Previous</button>

    <div style={{display:"flex",gap:"5px"}}>
        {getPageNumbers().map((page) => (
            <button key={page} onClick={() => onPageChange(page)} style={{
                fontWeight: currentPage === page ? 'bold' : 'normal',
                backgroundColor: currentPage === page ? 'lightblue' : 'white',
            }}>
                {page}
            </button>
        ))}
    </div>

    <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>



    </div>
)}

export default Pagination;