import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="text-center tracking-tighter">
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <a href="mailto:amulyaraj1234@gmail.com" className="border-b">{CONTACT.email}</a>

        {/* Download Resume Button */}
        <div className="mt-6">
          <a 
            href="../assets/resume.pdf"
            download="Amulya_Raj_CV.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
