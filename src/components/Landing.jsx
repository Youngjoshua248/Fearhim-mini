import { motion } from "framer-motion";

export default function Landing({ onEnter }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#000] text-white">
      <motion.h1
        className="text-6xl font-black tracking-wide gothic-text"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        onClick={onEnter}
      >
        FEARHIM
      </motion.h1>
      <p className="mt-4 text-sm">Click to enter</p>
      <audio autoPlay loop controls className="mt-6">
        <source src="/Check Please (V2) playboi 🦋.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
