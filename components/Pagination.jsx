
const Pagination = ({page, pageSize, totalItems, onPageChange}) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    const handlePageChange = (newPage) => {
        if(newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    }
    return (
        <section className="container mx-auto flex justify-center items-center my-8">
            {page > 1 ? (
                <button className="mr-2 px-2 py-1 border border-gray-300 rounded"
                onClick={() => handlePageChange(page - 1)}>
                    Previous
                </button>
                ) : null}

            <span className="mx-2">
                {' '}
                Page {page} of {totalPages}
            </span>

            {page < totalPages ? (
                <button className="ml-2 px-2 py-1 border border-gray-300 rounded"
                        onClick={() => handlePageChange(page + 1)}>
                    Next
                </button>
            ) : null}
        </section>
    )
};
export default Pagination;