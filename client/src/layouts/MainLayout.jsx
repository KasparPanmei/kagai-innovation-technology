import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "../components/navigation/SiteHeader.jsx";
import SiteFooter from "../components/common/SiteFooter.jsx";
export default function MainLayout() {
  const loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [loc.pathname]);
  return (
    <>
      <SiteHeader />
      <main className="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
