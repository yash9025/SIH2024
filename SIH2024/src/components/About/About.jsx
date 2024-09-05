import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://wallpapercave.com/wp/wp8084830.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Where the Sun Meets Innovation: Tech Miners
                        </h2>
                        <p className="mt-6 text-gray-900">
                        Are you looking to maximize your solar investment? 
                        We've got you covered! Our website features a 
                        comprehensive database of cities with exceptional
                        solar energy potential. We leverage UV index data
                        to identify locations where solar panels can deliver 
                        outstanding performance. Join us in the transition to 
                        clean energy and explore the possibilities of solar power today! 
                        Our mission is to empower individuals and organizations to harness the power of the sun. We specialize in identifying and showcasing regions with optimal solar energy potential. By analyzing UV index data, we pinpoint cities where solar panels can generate substantial returns. Our user-friendly platform provides valuable information to support informed investment choices and drive sustainable energy adoption.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}