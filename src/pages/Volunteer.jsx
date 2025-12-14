import { motion } from "framer-motion";
import VolunteerIntroSection from "../components/Volunteer_Page_Components/VolunteerIntroSection";
import WhyVolunteerSection from "../components/Volunteer_Page_Components/WhyVolunteerSection";
import VolunteerOpportunitiesSection from "../components/Volunteer_Page_Components/VolunteerOpportunitiesSection";
import VolunteerFormSection from "../components/Volunteer_Page_Components/VolunteerFormSection";
import VolunteerContactSection from "../components/Volunteer_Page_Components/VolunteerContactSection";

const Volunteer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-gray-50"
        >
            {/* Introduction / Purpose Section */}
            <VolunteerIntroSection />

            {/* Why Volunteer Section */}
            <WhyVolunteerSection />

            {/* Volunteer Opportunities Section */}
            <VolunteerOpportunitiesSection />

            {/* Volunteer Form Section */}
            <VolunteerFormSection />

            {/* Contact Section */}
            <VolunteerContactSection/>
        </motion.div>
    );
};

export default Volunteer;