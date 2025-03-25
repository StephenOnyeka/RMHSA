// import Footer from "./Footer";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const meta = {
  title: "Rosa Mystica High School",
  description:
    "RMHS is a non-profit organization that provides support to individuals with mental health challenges and their families.",
  keywords:
    "RMHS, Rosa, Rosa Mystica, Rosa Mystica High School, Girls, Best School for girls, Best School in Nigeria, Best School in Anambra, Best School in Agulu, Best School for Girls in Nigeria, Best School for Girls in Nigeria, Girls School, Rosa Mystica Nigeria, Agulu Girls, Best School in Agulu, Best School in Anambra, Best School in Nigeria, Best",
  image: "/images/RMHS.png",
  type: "website",
  url: "https://rmhsa-public.vercel.app/",
    siteName: "Rosa Mystica High School",
};

const Layout = ({ children }) => {
  return (
    <div className="content">
      {/* <div className="-mb-24"><Navbar /></div> */}
      {/* <Navbar /> */}
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
