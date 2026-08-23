import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollProgress from "../components/ScrollProgress";
import Newsletter from "../components/Newsletter";
import AIGrowthAssistant from "../components/AIGrowthAssistant";

function Layout() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Newsletter />

      <Footer />

      <ScrollToTopButton />

      <AIGrowthAssistant />
    </>
  );
}

export default Layout;