import Header from "../components/Home_Page_Components/Header";
import Footer from "../components/Home_Page_Components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-8">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
