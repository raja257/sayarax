import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
   <html>
  <body className="min-h-screen bg-background">
    <Header />
    <main className="pb-20">{children}</main>
    <Footer />
  </body>
</html>

  )
}

