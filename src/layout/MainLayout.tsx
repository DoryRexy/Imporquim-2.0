import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { motion } from "framer-motion";
import Head from "next/head";


type Props = {
  children: React.ReactNode;
};
/**
 * https://blog.logrocket.com/advanced-page-transitions-next-js-framer-motion/
 **/

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Sitio Imporquin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="">
        <motion.div
          initial={{ x: 350, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 350, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 10,
          }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />

    </>
  );
}

/* 
<motion.div initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}>
          {children}
        </motion.div>
*/