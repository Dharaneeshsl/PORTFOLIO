import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaFigma, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPostman, SiGraphql, SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiScikitlearn, SiAdobexd, SiCanva, SiFlutter, SiDart, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend & UI/UX',
    items: [
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
      { name: 'Adobe XD', icon: <SiAdobexd className="text-[#FF61F6]" /> },
      { name: 'Canva', icon: <SiCanva className="text-[#00C4CC]" /> },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express', icon: <SiExpress className="text-white" /> },
      { name: 'Dart', icon: <SiDart className="text-[#0175C2]" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-[#E10098]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
      { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: 'PyTorch', icon: <SiPytorch className="text-[#EE4C2C]" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn className="text-[#F7931E]" /> },
      { name: 'Pandas', icon: <SiPandas className="text-[#150458]" /> },
      { name: 'NumPy', icon: <SiNumpy className="text-[#013243]" /> },
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
      { name: 'AWS', icon: <FaAws className="text-[#FF9900]" /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Skills() {
  return (
    <section className="py-24 bg-transparent relative z-10" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Technical <span className="text-accent">Arsenal</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-accent rounded-full"></span>
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent/50 px-4 py-3 rounded-xl transition-all duration-300 cursor-default"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}