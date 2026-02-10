"use client";
import React, { useState } from 'react';

const RecentProjects = () => {
    // Define the project categories and the respective projects
    const categories = [
        {
            title: "All Projects",
            projects: [
                {
                    name: "QA Manual Testing",
                    image: "/2.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/1.png",
                },
                {
                    name: "QA Automation",
                    image: "/7.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "4.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/8.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/3.png",
                },
                {
                    name: "QA Automation",
                    image: "/6.png",
                },
                {
                    name: "QA Automation",
                    image: "/5.png",
                },
            ],
        },
        {
            title: "Mobile Development ",
            projects: [
                {
                    name: "QA Manual Testing",
                    image: "/1.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/2.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/3.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/4.png",
                },
            ],
        },
        {
            title: "QA Automation",
            projects: [
                {
                    name: "QA Manual Testing",
                    image: "/5.png",
                },
                {
                    name: "QA Automation",
                    image: "/6.png",
                },
                {
                    name: "QA Automation",
                    image: "/7.png",
                },
                {
                    name: "QA Automation",
                    image: "/8.png",
                },
            ],
        },
    ];

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); // Set default category as All Projects
    const [currentPage, setCurrentPage] = useState(1); // Pagination state
    const itemsPerPage = 4; // Items per page

    // Calculate the number of pages for the current category
    const totalPages = Math.ceil(categories[activeCategoryIndex].projects.length / itemsPerPage);

    // Get the projects for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProjects = categories[activeCategoryIndex].projects.slice(startIndex, startIndex + itemsPerPage);

    // Handle Previous button click
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Handle Next button click
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div id='services' className="flex overflow-hidden flex-col items-center p-16 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center w-full max-w-[1312px] max-md:max-w-full">
                <div className="text-6xl font-semibold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
                    <span className="font-medium">My </span>
                    <span className="font-semibold text-[#00A5B6]">Recent Projects</span>
                </div>
                {/* Tabs for Categories */}
                <div className="flex overflow-hidden flex-wrap gap-2.5 justify-center items-center px-1.5 py-2 mt-8 text-xl bg-gray-500 bg-opacity-10 min-h-[67px] rounded-[50px] text-neutral-900 max-md:max-w-full">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setActiveCategoryIndex(index);
                                setCurrentPage(1); // Reset to first page when switching category
                            }}
                            className={`cursor-pointer overflow-hidden px-8 py-3.5 my-auto font-medium tracking-tight rounded-[60px] min-h-[54px] ${activeCategoryIndex === index
                                    ? 'bg-[#00A5B6] text-white' // Active tab styles
                                    : 'bg-transparent text-black' // Inactive tab styles
                                }`}
                        >
                            {category.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Display projects based on the active category with pagination */}
            <div className="flex flex-col mt-16 max-w-full text-xl leading-tight text-white w-[1168px] max-md:mt-10">
                <div className="flex flex-wrap gap-7 items-start w-full">
                    {paginatedProjects.map((project, idx) => (
                        <div key={idx} className="flex flex-col w-[40%] shrink rounded-sm justify-center items-center mx-auto min-w-[200px] max-md:w-full">
                            <div className="flex overflow-hidden flex-col w-full max-md:max-w-full">
                                <div className="flex relative flex-col w-full max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src={project.image}
                                        className="object-cover rounded-3xl  h-[370px] w-full"
                                        alt={project.name}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-between items-center mt-6">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 text-sm md:text-lg rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-[#00A5B6] text-white'}`}
                        >
                            Previous
                        </button>

                        {/* Pagination Dots */}
                        <div className="flex justify-center items-center gap-2">
                            {[...Array(totalPages)].map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-3 h-3 rounded-full ${currentPage - 1 === idx ? 'bg-[#00A5B6]' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 text-sm md:text-lg rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-[#00A5B6] text-white'}`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecentProjects;
