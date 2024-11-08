import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Features from "../components/landing/Features";
import Faq from "../components/landing/Faq";
import Hero from "../components/landing/Hero";
import Reviews from "../components/landing/Reviews";
import Stats from "../components/landing/Stats";
import Steps from "../components/landing/Steps";
import NavBar from "../components/layout/NavBar";
import PriceHeader from "../components/landing/PriceHeader";
import CTA from "../components/landing/CTA";

function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const useFadeInOnScroll = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });
    return [ref, isInView];
  };

  // eslint-disable-next-line react/prop-types
  const Section = ({ children }) => {
    const [ref, isInView] = useFadeInOnScroll();
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="bg-neutral-900 bg-[url('../../../public/bg.svg')] bg-repeat bg-center bg-opacity-95">
      <NavBar />
      <Hero />
      <Section><Stats /></Section>
      <Section><Steps /></Section>
      <Section><Features /></Section>
      <Section><PriceHeader /></Section>
      <Section><Faq /></Section>
      <Section><Reviews /></Section>
      <Section><CTA /></Section>
    </div>
  );
}

export default Home;
