import { Footer } from "components/reapeated/Footer/Footer/Footer";
import { Header } from "components/reapeated/Header/Header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
