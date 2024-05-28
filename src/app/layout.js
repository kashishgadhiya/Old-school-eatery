import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { AppProvider } from "./components/AppContext";

const roboto = Roboto({ subsets: ["latin"] ,weight:['400','500','700']});

export const metadata = {
  title: "Old School Eatery",
  description: "Generated by create next app",
  icons: {
    icon: './favivon.ico', // /public path
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-7xl p-2 mx-auto  ">
    
     <AppProvider>


          <Header/>
        {children}
     </AppProvider>

        </main>
      <Footer/>
        
        </body>
    </html>
  );
}
