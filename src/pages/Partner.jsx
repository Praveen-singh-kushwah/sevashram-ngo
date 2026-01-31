import { motion } from "framer-motion";
import PartnerHeroSection from "../components/Partner_Page_Components/PartnerHeroSection";
import WhyPartnerSection from "../components/Partner_Page_Components/WhyPartnerSection";
import PartnershipModelsSection from "../components/Partner_Page_Components/PartnershipModelsSection";
import WhoCanPartnerSection from "../components/Partner_Page_Components/WhoCanPartnerSection";
import PartnershipInquiryForm from "../components/Partner_Page_Components/PartnershipInquiryForm";
import TrustComplianceSection from "../components/Partner_Page_Components/TrustComplianceSection";
import FinalCTASection from "../components/Partner_Page_Components/FinalCTASection";

const Partner = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-gray-50"
        >

            {/* Hero Section - Introduction / Purpose */}
            <PartnerHeroSection />

            {/* Why Partner Section - Value Proposition */}
            <WhyPartnerSection />

            {/* Partnership Models Section - Different Ways to Partner */}
            <PartnershipModelsSection />

            {/* Who Can Partner Section - Target Audience */}
            <WhoCanPartnerSection />

            {/* Partnership Inquiry Form - Call to Action */}
            <PartnershipInquiryForm/>

            {/* Trust & Compliance Section - Transparency and Accountability */}
            <TrustComplianceSection/>

            {/* Final CTA Section - Encouragement to Connect */}
            {/* <FinalCTASection/> */}
        </motion.div>
    );
};

export default Partner;