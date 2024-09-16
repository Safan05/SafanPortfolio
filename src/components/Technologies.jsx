import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';
const iconAni=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        }
    }
})
const Technologies = () => {
    return ( 
        <>
    <div className="border-b border-neutral-900 pb-24">
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{y:-100,opacity:0}} transition={{duration:1.5}} className='my-20 text-center text-4xl'> Technologies </motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconAni(2.5)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-neutral-800 p-4"><RiReactjsLine className='text-7xl text-cyan-400' /></motion.div>
            <motion.div variants={iconAni(3)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-neutral-800 p-4"><SiMongodb className='text-7xl text-green-500' /></motion.div>
            <motion.div variants={iconAni(5)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-neutral-800 p-4"><FaNodeJs className='text-7xl text-green-500' /></motion.div>
            <motion.div variants={iconAni(2)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-neutral-800 p-4"><FaHtml5 className='text-7xl text-orange-600' /></motion.div>
            <motion.div variants={iconAni(6)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-neutral-800 p-4"><FaBootstrap className='text-7xl text-purple-700' /></motion.div>
            <motion.div variants={iconAni(4)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-neutral-800 p-4"><RiTailwindCssFill className='text-7xl text-blue-500' /></motion.div>
        </motion.div>
    </div>
    </>
     );
}
 
export default Technologies