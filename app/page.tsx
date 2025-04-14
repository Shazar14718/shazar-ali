"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowDown,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code,
  GraduationCap,
  Layers,
  Linkedin,
  Plane,
  Search,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (
          ref.current &&
          scrollPosition >= ref.current.offsetTop &&
          scrollPosition < ref.current.offsetTop + ref.current.offsetHeight
        ) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    sectionRefs[section as keyof typeof sectionRefs].current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-blue-950 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {[
            {
              width: "300px",
              height: "300px",
              left: "10%",
              top: "10%",
              background: "radial-gradient(circle, rgba(171, 104, 132, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
              animation: "float 10s ease-in-out infinite",
              animationDelay: "0s"
            },
            {
              width: "400px",
              height: "400px",
              left: "50%",
              top: "30%",
              background: "radial-gradient(circle, rgba(121, 164, 205, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
              animation: "float 12s ease-in-out infinite",
              animationDelay: "2s"
            },
            {
              width: "250px",
              height: "250px",
              left: "80%",
              top: "60%",
              background: "radial-gradient(circle, rgba(192, 173, 207, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
              animation: "float 15s ease-in-out infinite",
              animationDelay: "4s"
            },
            {
              width: "350px",
              height: "350px",
              left: "20%",
              top: "70%",
              background: "radial-gradient(circle, rgba(168, 196, 221, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
              animation: "float 13s ease-in-out infinite",
              animationDelay: "1s"
            },
            {
              width: "200px",
              height: "200px",
              left: "70%",
              top: "20%",
              background: "radial-gradient(circle, rgba(22, 204, 201, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
              animation: "float 11s ease-in-out infinite",
              animationDelay: "3s"
            }
          ].map((style, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={style}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Shazar Ali
          </motion.div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["hero", "about", "experience", "skills", "education", "awards"].map((section) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: ["hero", "about", "experience", "skills", "education", "awards"].indexOf(section) * 0.1,
                  }}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    className={cn(
                      "text-sm uppercase tracking-wider hover:text-blue-400 transition-colors",
                      activeSection === section ? "text-blue-400 font-medium" : "text-gray-400",
                    )}
                  >
                    {section === "hero" ? "Home" : section}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="https://linkedin.com/in/shazar-ali" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-950/30"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between z-10">
          <div className="text-center md:text-left max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400"
            >
              Shazar Ali
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              Senior SEO Executive & Digital Marketing Specialist
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg group"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative md:ml-8"
          >
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-lg shadow-blue-500/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shazar%20-%20Linkedin-m12iFCyu75aCYOq5iAd4zIhSr0YdL8.png"
                alt="Shazar Ali"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-md opacity-50 -z-10"></div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ArrowDown className="h-6 w-6 text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-300"
            >
              <p>
                A dedicated SEO Executive with nearly two years of hands-on experience in managing multiple projects
                across diverse categories. Proven ability to teach and mentor others in effective project management,
                contributing to overall success.
              </p>
              <p>
                Driven by a passion for continuous learning, I stay updated on the latest SEO trends and discoveries.
                This commitment to professional growth fuels my motivation to excel in my field and help my team
                succeed.
              </p>
              <p>
                I value time management, personal growth, and empowerment. My goal is to leverage my skills in SEO to
                contribute to project success, expand my expertise in digital marketing, and mentor others in the field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: <Search className="h-8 w-8 mb-4 text-blue-400" />,
                  title: "SEO Strategy",
                  description: "Developing comprehensive SEO strategies for diverse clients",
                },
                {
                  icon: <TrendingUp className="h-8 w-8 mb-4 text-purple-400" />,
                  title: "Analytics",
                  description: "Data-driven approach to measure and improve performance",
                },
                {
                  icon: <Code className="h-8 w-8 mb-4 text-blue-400" />,
                  title: "Technical SEO",
                  description: "Identifying and resolving technical issues affecting rankings",
                },
                {
                  icon: <Layers className="h-8 w-8 mb-4 text-purple-400" />,
                  title: "Digital Marketing",
                  description: "Comprehensive digital marketing solutions for growth",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center hover:border-blue-500/50 transition-colors group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={sectionRefs.experience} className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Work Experience
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-12 relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 ml-3 hidden md:block"></div>

            {[
              {
                period: "November 2024 - Present",
                role: "Founder",
                company: "Shazar Digital Space",
                location: "Karachi",
                description: [
                  "As the founder and lead strategist, I help brands grow through innovative digital marketing solutions and impactful online strategies.",
                  "Oversee creative direction, develop data-driven marketing campaigns, and ensure alignment with client goals.",
                  "Work closely with businesses to build their digital presence and drive measurable results across SEO, content strategy, social media, and brand development.",
                ],
              },
              {
                period: "November 2024 - Present",
                role: "Senior SEO Executive",
                company: "Intellects Solutions",
                location: "Karachi",
                description: [
                  "Lead strategic SEO initiatives to drive organic growth and enhance online visibility for diverse clients.",
                  "Develop and implement advanced SEO strategies tailored to industry-specific goals.",
                  "Conduct in-depth keyword research, competitor analysis, and market trend assessments.",
                  "Oversee comprehensive website audits, technical SEO enhancements, and local SEO optimizations.",
                  "Mentor junior team members, fostering skill development and ensuring high-quality results.",
                ],
              },
              {
                period: "October 2023 - November 2024",
                role: "SEO Executive",
                company: "Crystallite Pak Pvt Ltd",
                location: "Karachi",
                description: [
                  "Managed multiple SEO projects independently, ensuring efficient execution and delivery.",
                  "Conducted technical audits to identify crawling and indexing challenges, leveraging opportunities for performance enhancement.",
                  "Demonstrated expertise in Google Analytics, Google Search Console, Google Tag Manager, and Google Cloud Platform.",
                ],
              },
              {
                period: "June 2023 - September 2023",
                role: "Jr. SEO Executive",
                company: "Crystallite Pak Pvt Ltd",
                location: "Karachi",
                description: [
                  "Developed and executed SEO strategies, roadmaps, and timelines for diverse existing clients.",
                  "Collaborated with the content team to produce high-quality, informative SEO-optimized content incorporating targeted keywords.",
                  "Conducted comprehensive keyword research encompassing local, nationwide, transactional, and informational keywords.",
                ],
              },
              {
                period: "August 2022 - September 2022",
                role: "Engineering Trainee",
                company: "Pakistan International Airlines",
                location: "Karachi",
                description: [
                  "Gained hands-on experience in various divisions including Line maintenance, Base maintenance, and Powerhaul division.",
                  "Explored different technical workshops including Electrical shop, Radio shop, Battery shop, Digital shop, and more.",
                  "Studied aircraft systems including communication systems, TECAS system, Navigation map, and Radar systems on multiple aircraft models.",
                  "Received mentorship from experienced professionals in aviation maintenance and engineering.",
                ],
                icon: <Plane className="h-6 w-6" />,
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-10 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          {job.icon && <span className="text-blue-400">{job.icon}</span>}
                          <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        </div>
                        <div className="text-blue-400 font-medium">
                          {job.company} | {job.location}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">{job.period}</div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 h-full">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Technical Skills
                  </h3>

                  <div className="space-y-6">
                    {[
                      { name: "Google Search Console", years: 1, level: 90 },
                      { name: "Data Analysis & Reporting", years: 2, level: 85 },
                      { name: "Google Tag Manager", years: 2, level: 80 },
                      { name: "Keyword Research & Analysis", years: 2, level: 95 },
                      { name: "SEO Strategy Development & Execution", years: 1, level: 85 },
                      { name: "Google Analytics", years: 2, level: 90 },
                      { name: "Technical SEO & Site Audits", years: 2, level: 85 },
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-white">{skill.name}</div>
                          <div className="text-sm text-gray-400">
                            {skill.years} {skill.years === 1 ? "year" : "years"}
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Languages
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">English</div>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                        Fluent
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Core Values
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Time Management",
                        description:
                          "Dedicating time to exploring new SEO techniques and digital marketing strategies in-depth.",
                      },
                      {
                        title: "Personal Growth",
                        description: "Committed to self-improvement and staying informed about industry developments.",
                      },
                      {
                        title: "Empowerment",
                        description:
                          "Helping and motivating others to reach their potential, fostering a culture of growth.",
                      },
                    ].map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-4"
                      >
                        <div className="mt-1 text-blue-400">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        </div>
                        <div>
                          <div className="font-medium text-white">{value.title}</div>
                          <div className="text-sm text-gray-400">{value.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={sectionRefs.education} className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Education
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 ml-3 hidden md:block"></div>

            {[
              {
                degree: "BS in Electronics Engineering",
                institution: "Sir Syed University of Engineering & Technology",
                location: "Karachi",
                period: "December 2018 - March 2023",
                icon: <GraduationCap className="w-6 h-6" />,
              },
              {
                degree: "HSC in Pre-Engineering",
                institution: "Government College For Men Nazimabad",
                location: "Karachi",
                period: "October 2016 - May 2018",
                icon: <BookOpen className="w-6 h-6" />,
              },
              {
                degree: "SSC in Computer Science",
                institution: "Shaheen Academy School",
                location: "Karachi",
                period: "April 2014 - April 2016",
                icon: <BriefcaseBusiness className="w-6 h-6" />,
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-10 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gray-800 text-blue-400 hidden sm:flex">{edu.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          <div className="text-sm text-gray-400 mt-1 md:mt-0">{edu.period}</div>
                        </div>
                        <div className="text-blue-400">{edu.institution}</div>
                        <div className="text-sm text-gray-400 mt-1">{edu.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={sectionRefs.awards} className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Awards & Certifications
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Google Digital Marketing & E-commerce Certificate",
                date: "September 2024",
                description:
                  "Completed seven courses with hands-on, practice-based assessments for entry-level roles in Digital Marketing and E-commerce.",
                icon: <Award className="w-10 h-10" />,
              },
              {
                title: "Google My Business",
                date: "August 2024",
                description:
                  "Awarded for excellence in GMB management, driving visibility and engagement for businesses.",
                icon: <Award className="w-10 h-10" />,
              },
              {
                title: "Award for Final Year Projects Exhibition 2023",
                date: "March 2023",
                description:
                  "Recognized for the project 'Smart Brain Computer Interface for Controlling and Monitoring of Medical Bed' at Sir Syed University of Engineering and Technology.",
                icon: <Award className="w-10 h-10" />,
              },
              {
                title: "Innovation of the Year 2023",
                date: "January 2023",
                description:
                  "Awarded at INNOVO-TECH 2023, part of the National Tournament STREAM Xtreme 2023, for the groundbreaking Smart Brain-Computer Interface project.",
                icon: <Award className="w-10 h-10" />,
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 h-full">
                  <CardContent className="p-6 flex gap-4">
                    <div className="text-blue-400 shrink-0">{award.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{award.title}</h3>
                      <div className="text-sm text-blue-400 mb-3">{award.date}</div>
                      <p className="text-gray-300">{award.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
              Shazar Ali
            </div>
            <p className="text-gray-400">Senior SEO Executive & Digital Marketing Specialist</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 mb-6"
          >
            <Link href="https://linkedin.com/in/shazar-ali" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-950/30"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-400">Phone:</span>
              <span className="text-gray-300">0313-8850215</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">Email:</span>
              <span className="text-gray-300">shazarali892@gmail.com</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
          >
            © {new Date().getFullYear()} Shazar Ali. All rights reserved.
          </motion.div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors z-50"
      >
        <ArrowDown className="h-5 w-5 rotate-180" />
      </motion.button>
    </div>
  )
}
