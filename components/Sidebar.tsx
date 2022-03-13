import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { links } from "../constants/links";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

type SidebarProps = {
  setSideBar: Dispatch<SetStateAction<boolean>>;
  sideBar: boolean;
};

const Sidebar = ({ sideBar = false, setSideBar = () => {} }: SidebarProps) => {
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
            className="fixed top-0 right-0 z-10 flex flex-col w-full h-screen max-w-sm p-5 text-white bg-blue-900 shadow-lg"
          >
            <button
              onClick={() => setSideBar((sideBar) => !sideBar)}
              className="w-8 h-8 mb-2 text-white "
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <motion.aside
              className="flex items-center justify-center h-full grow"
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.div
                className="flex flex-col items-center gap-16 font-bold"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.a
                    className="text-4xl"
                    key={id}
                    href={to}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    onClick={() => setSideBar(false)}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.aside>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
