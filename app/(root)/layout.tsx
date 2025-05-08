import Footer from "@/components/local/Footer";
import NavBar from "@/components/local/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
            <div className="mt-20">
           <NavBar />       
            {children}         
           <Footer />
          </div>
    );
  }