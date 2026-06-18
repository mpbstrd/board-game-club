import { Link } from 'react-router-dom'
import { Dices, ArrowRight } from 'lucide-react'
import { members } from '../data/memberData'
import { motion } from 'framer-motion'

export default function Landing() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className=" text-center"
    >
        <div className="min-h-screen bg-[var(--bg)] flex flex-col" >
    
        <header className="flex items-center justify-between h-16 px-6 lg:px-10">
            <div className="flex items-center gap-2 text-[var(--text-1)]">
            <Dices size={22} />
            <span className="[font-family:var(--heading)] text-lg font-medium">Friday Board Games Club</span>
            </div>
            {/* <Link
            to="/dashboard"
            className="text-sm text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors"
            >
            Sign in
            </Link> */}
        </header>

        <main className="flex-1 flex items-center justify-center px-6">
            <div className="max-w-2xl text-center -mt-10">
            <span className="inline-block mb-5 px-3 py-1 rounded-full text-xs tracking-wide uppercase bg-[var(--surface)] text-[var(--text-3)] border border-[var(--border-soft)]">
                Every week · {members.length} members
            </span>

            <h1 className="[font-family:var(--heading)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[var(--text-1)]">
                Friday Board Game Club
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[var(--text-3)] leading-relaxed max-w-xl mx-auto">
                A club management system
            </p>

            <div className='mt-8 flex items-center justify-center'>
                <div>Who are you? </div>
                <select>
                    <option>Watson</option>
                    <option>DK</option>
                    <option>Perry</option>
                </select>
            </div>

            <div className="mt-8 flex items-center justify-center">
                <Link
                to="/dashboard"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--text-1)] text-[var(--bg)] font-medium hover:opacity-90 transition-opacity"
                >
                Enter the club
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </div>
            </div>
        </main>

        <footer className="py-6 text-center text-xs text-[var(--text-3)]">
            Developed by Matthew Bustarde · 2026
        </footer>
        </div>
    </motion.div>
  )
}