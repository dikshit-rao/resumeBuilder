import { createContext, useState, useContext } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AccordionContext = createContext();

export function Accordion({ children }) {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ openItemId, toggleItem }}>
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AccordionContext.Provider>
  );
}

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion");
  }
  return context;
}

export function AccordionItem({ id, title, steps }) {
  const { openItemId, toggleItem } = useAccordion();
  const isOpen = openItemId === id;

  return (
    <motion.div
      className="border border-[#46464e] rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-[#f9faff] hover:bg-white transition-colors"
        onClick={() => toggleItem(id)}
      >
        <span className="text-[#07142b] font-semibold">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#0c1986]" />
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <motion.div 
          className="p-4 bg-[#f9faff] text-[#46464e]"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ol className="list-decimal pl-5 space-y-2">
            {steps.map((step, index) => (
              <motion.li 
                key={index}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {step}
              </motion.li>
            ))}
            <motion.li
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: steps.length * 0.1 }}
            >
              If you need further assistance,{' '}
              <a href="/contact-us" className="text-[#0c1986] hover:underline transition-all duration-200">
                contact us
              </a>
              .
            </motion.li>
          </ol>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


