import React from 'react'

export default function Pagination({pagination}) {
    const totalPage = pagination.totalPage;
    const page = Number(pagination.page);
    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <butt className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                        </butt>
                    </li>

                    {pageNumbers.map(num =>
                        <li className={`page-item ${page === num ? "active" : ""}`}><button className="page-link">{num}</button></li>
                    )}

                    <li className="page-item">
                        <button className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                </ul>
            </nav>

        </>
    )
}
