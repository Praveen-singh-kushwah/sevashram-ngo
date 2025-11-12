import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-20">
     

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout: Info (Left) + Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 lg:gap-16">
          {/* Left Column: Contact Information */}
          <div className="w-full">
            <ContactInfo />
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
