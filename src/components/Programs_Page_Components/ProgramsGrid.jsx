import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Home, Heart, Users, Shield, GraduationCap } from 'lucide-react';

const ProgramsGrid = () => {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        hover: {
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            }
        }
    };

    // Icons mapping for program categories
    const getProgramIcon = (index) => {
        const icons = [
            <BookOpen className="w-5 h-5" />,
            <Home className="w-5 h-5" />,
            <Heart className="w-5 h-5" />,
            <Users className="w-5 h-5" />,
            <Shield className="w-5 h-5" />,
            <GraduationCap className="w-5 h-5" />
        ];
        return icons[index % icons.length];
    };

    // Fetch programs from API
    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/programs?populate=*');
                if (!response.ok) {
                    throw new Error('Failed to fetch programs');
                }
                const data = await response.json();
                setPrograms(data.data || []);
            } catch (err) {
                console.error('Error fetching programs:', err);
                setError('Failed to load programs. Please try again later.');
                // Fallback data in case API fails
                setPrograms([
                    {
                        id: 1,
                        attributes: {
                            title: 'Child Education Program',
                            slug: 'child-education',
                            shortDescription: 'Providing quality education to underprivileged children in the Tamasha community.',
                            highlights: [
                                '100+ children enrolled',
                                'Daily classes and tutoring',
                                'School supplies provided'
                            ],
                            cover: {
                                data: {
                                    attributes: {
                                        url: '/images/programs/education.jpg'
                                    }
                                }
                            }
                        }
                    },
                    {
                        id: 2,
                        attributes: {
                            title: 'Healthcare Initiative',
                            slug: 'healthcare',
                            shortDescription: 'Ensuring access to basic healthcare and nutrition for children and families.',
                            highlights: [
                                'Monthly health camps',
                                'Nutrition programs',
                                'Vaccination drives'
                            ],
                            cover: {
                                data: {
                                    attributes: {
                                        url: '/images/programs/healthcare.jpg'
                                    }
                                }
                            }
                        }
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    // Format API response data
    const formatProgramData = (program) => {
        if (!program) return program;

        // Handle the image URL based on the actual API response structure
        let imageUrl = '';
        const cover = program.cover;

        // If cover exists and has a direct url property
        if (cover?.url) {
            imageUrl = `http://localhost:1337${cover.url}`;
            console.log("image url : " , imageUrl)
        }
        // Fallback to default image if no cover or url found
        else {
            imageUrl = '/images/programs/default.jpg';
        }

        return {
            id: program.id,
            title: program.title || 'Untitled Program',
            slug: program.slug || 'untitled-program',
            description: program.shortDescription || 'Learn more about this program and how you can help.',
            highlights: program.highlights || [
                'Making a difference',
                'Community impact',
                'Your support matters'
            ],
            imageUrl: imageUrl
        };
    };

    if (loading) {
        return (
            <div className="py-20 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading programs...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-20 text-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <section className="py-16 md:py-24 bg-[#F7F9FB] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
                        Our Programs & Initiatives
                    </h2>
                    <p className="text-lg text-[#444444] max-w-3xl mx-auto">
                        Explore our ongoing community work and initiatives that are transforming lives.
                    </p>
                </motion.div>

                {/* Programs Grid */}
                {programs.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {programs.map((program, index) => {
                            const formattedProgram = formatProgramData(program);

                            console.log(program)

                            return (
                                <motion.div
                                    key={program.id}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                                >
                                    {/* Program Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={formattedProgram.imageUrl}
                                            alt={formattedProgram.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = '/images/programs/default.jpg';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 right-4 bg-white/90 text-[#1E4E79] p-2 rounded-full">
                                            {getProgramIcon(index)}
                                        </div>
                                    </div>

                                    {/* Program Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-2">
                                            {formattedProgram.title}
                                        </h3>

                                        <p className="text-[#444444] text-base mb-4 flex-grow">
                                            {formattedProgram.description}
                                        </p>

                                        {formattedProgram.highlights && formattedProgram.highlights.length > 0 && (
                                            <ul className="space-y-2 mb-6">
                                                {formattedProgram.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-[#1E4E79] mr-2">•</span>
                                                        <span className="text-[#555555] text-sm">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="mt-auto">
                                            <Link
                                                to={`/programs/${formattedProgram.slug}`}
                                                className="inline-flex items-center text-[#1E4E79] font-medium group-hover:text-[#163A57] transition-colors duration-300"
                                            >
                                                Learn More
                                                <svg
                                                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No programs available at the moment. Please check back later.</p>
                    </div>
                )}

                {/* Load More Button (if needed in the future) */}
                {programs.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-[#1E4E79] hover:bg-[#163A57] text-white rounded-lg font-medium transition-colors duration-300">
                            Load More Programs
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProgramsGrid;
