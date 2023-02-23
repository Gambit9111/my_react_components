import "../../../app/globals.css";
import Footer from "../../navigation/footer/Footer";
import Header from "../../navigation/header/Header";

export interface IPrimaryLayout {
  children: React.ReactNode;
}

export default function PrimaryLayout({ children }: IPrimaryLayout) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center">
        <Header />
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
}
