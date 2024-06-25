import { Footer } from "components/reapeated/Footer/Footer/Footer";
import { Header } from "components/reapeated/Header/Header";
import { Loader } from "components/reapeated/Loader";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getLoading } from "../../redux/selectors";

export function Layout() {
  const isLoading =useSelector(getLoading);
  return (
    <>
      {isLoading && <Loader/>}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
