import { Metadata } from "next";
import About from "@/components/about-us/page";

export const metadata: Metadata = {
  title: "Connect With Us for any query",
  description:
    "We value your thoughts and inquiries. Reach out to Photo Grid's dedicated team through our Contact Us page. ",
};

const ContactPage = () => {
  return <About />;
};
export default ContactPage;