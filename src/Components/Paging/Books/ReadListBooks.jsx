
import { Link } from "react-router";

const ReadListBooks = ({data , sortingType } ) => {



    const {
        bookId,
        author,
        bookName,
        category,
        image,
        publisher,
        rating,
        tags,
        totalPages,
        yearOfPublishing
    } = data;



    return (


        <div className=" mt-5 shadow-xl flex flex-col mx-auto lg:flex-row gap-6 p-6 border border-gray-200 rounded-2xl w-full max-w-4xl bg-white mb-6">
            
            {/* Image Section */}
            <div className="w-full lg:w-60 h-64 bg-[#F3F3F3] rounded-2xl flex items-center justify-center p-6 shrink-0">
                <img 
                    src={image} 
                    alt={bookName} 
                    className="h-full object-contain drop-shadow-md"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-center">
                
                {/* Title & Author */}
                <h2 className="text-2xl font-bold text-[#131313] font-serif mb-3">
                    {bookName}
                </h2>
                <p className="text-[#131313CC] font-medium mb-4">
                    By : {author}
                </p>

                {/* Tags & Year of Publishing */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-[#131313]">Tag</span>
                        {tags?.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-1.5 bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-sm font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center text-[#131313CC] text-sm gap-1.5 lg:ml-4">
                        {/* Location Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>Year of Publishing: {yearOfPublishing}</span>
                    </div>
                </div>

                {/* Publisher & Pages */}
                <div className="flex flex-wrap items-center gap-6 text-[#131313CC] text-sm mb-4">
                    <div className="flex items-center gap-1.5">
                        {/* Users Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <span>Publisher: {publisher}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        {/* Document Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        <span>Page {totalPages}</span>
                    </div>
                </div>

                {/* Divider Line */}
                <hr className="border-gray-200 mb-4" />

                {/* Footer Pills & Button */}
                <div className="flex flex-wrap items-center gap-4">
                    <span className="px-5 py-2.5 bg-[#328EFF26] text-[#328EFF] rounded-full text-sm font-medium">
                        Category: {category}
                    </span>
                    <span className="px-5 py-2.5 bg-[#FFAC3326] text-[#FFAC33] rounded-full text-sm font-medium">
                        Rating: {rating}
                    </span>
                    <Link
    to={`/BooksDetailsForEachCard/${bookId}`} 
    className="px-6 py-2.5 bg-[#23BE0A] hover:bg-[#1a8c08] transition-colors text-white rounded-full text-sm font-medium inline-block text-center"
>
    View Details
</Link>
                </div>

            </div>
        </div>
    );
};

export default ReadListBooks;