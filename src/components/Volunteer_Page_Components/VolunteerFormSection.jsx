import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { submitVolunteerRegistration } from "../../utils/volunteerApi";

const VolunteerFormSection = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        areas: [],
        availability: "",
        skills: "",
        previousExperience: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCheckboxChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            areas: prev.areas.includes(value)
                ? prev.areas.filter((a) => a !== value)
                : [...prev.areas, value],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await submitVolunteerRegistration(formData);

            setSubmitted(true);
            
        } catch (error) {
            console.error("Volunteer registration failed:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };


    if (submitted) {
        return (
            <section className="py-16 md:py-24 lg:py-28 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center py-16"
                    >
                        <CheckCircle className="w-20 h-20 text-[#F9A826] mx-auto mb-6" strokeWidth={1.5} />
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1E3A8A] mb-4">
                            Thank you for registering!
                        </h2>
                        <p className="text-xl text-[#4B5563] max-w-2xl mx-auto">
                            We appreciate your willingness to support our mission. Our team will reach out to you shortly with relevant opportunities.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1E3A8A] leading-tight">
                        Register Your Interest
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
                        Tell us a little about yourself, and we’ll reach out with opportunities that match your interests.
                    </p>
                    <p className="mt-4 text-base text-[#6B7280] italic">
                        This takes less than 2 minutes to complete.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100"
                >
                    <form onSubmit={handleSubmit} className="space-y-10">
                        {/* Basic Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="fullName" className="block font-medium text-[#1E3A8A] mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-medium text-[#1E3A8A] mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block font-medium text-[#1E3A8A] mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="block font-medium text-[#1E3A8A] mb-2">
                                    City / Location
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Areas of Interest */}
                        <div>
                            <label className="block font-medium text-[#1E3A8A] mb-4">
                                Areas of Interest (select all that apply)
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "Field Volunteering",
                                    "Teaching & Mentorship",
                                    "Skill-Based Volunteering",
                                    "Remote / Online Volunteering",
                                    "Event Support",
                                ].map((area) => (
                                    <label key={area} className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.areas.includes(area)}
                                            onChange={() => handleCheckboxChange(area)}
                                            className="w-5 h-5 text-[#F9A826] rounded focus:ring-[#F9A826]"
                                        />
                                        <span className="text-[#4B5563]">{area}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div>
                            <label className="block font-medium text-[#1E3A8A] mb-4">
                                Availability
                            </label>
                            <div className="flex flex-wrap gap-6">
                                {["Weekdays", "Weekends", "Flexible"].map((option) => (
                                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="availability"
                                            value={option}
                                            checked={formData.availability === option}
                                            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                                            className="w-5 h-5 text-[#F9A826] focus:ring-[#F9A826]"
                                        />
                                        <span className="text-[#4B5563]">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Skills & Message */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="skills" className="block font-medium text-[#1E3A8A] mb-2">
                                    Skills / Experience
                                </label>
                                <textarea
                                    id="skills"
                                    rows="4"
                                    placeholder="Design, teaching, writing, development, event management…"
                                    value={formData.skills}
                                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:border-transparent transition resize-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-medium text-[#1E3A8A] mb-2">
                                    Message / Notes
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Anything you’d like us to know?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:border-transparent transition resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="text-center pt-6">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="bg-[#F9A826] text-white px-10 py-4 rounded-xl font-heading font-semibold text-lg shadow-md hover:bg-[#F59E0B] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                {loading ? "Submitting..." : "Submit Interest"}
                            </motion.button>

                            <p className="mt-4 text-sm text-[#6B7280]">
                                Our team will contact you shortly.
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default VolunteerFormSection;