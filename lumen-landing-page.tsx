"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Brain,
  Menu,
  X,
  Check,
  Github,
  Twitter,
  Linkedin,
  MessageSquare,
  Layers,
  Lightbulb,
  Workflow,
  Wand2,
  Terminal,
  GitBranch,
  Play,
  Database,
  Braces,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HeroWorkspaceDemo, IDEWorkspaceDemo, ProductInterfaceDemo } from "./workspace-demos"

export default function LumenLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-zinc-900 text-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative w-8 h-8 mr-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"></div>
                  <div className="relative flex items-center justify-center w-full h-full bg-black rounded-lg">
                    <span className="text-xl font-bold text-white">L</span>
                  </div>
                </div>
                <span className="text-xl font-bold">LUMEN</span>
              </Link>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
                <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Log in
              </Link>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4">Get Started</Button>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-900 border-b border-zinc-800">
              <Link
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="block px-3 py-2 text-base font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-zinc-900/0 to-zinc-900/0 pointer-events-none"></div>

          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >
                <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border-purple-700">
                  Launching Early 2025
                </Badge>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  Where human intuition meets{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    digital brilliance
                  </span>
                </h1>
                <p className="text-xl text-zinc-300 mb-8 max-w-lg mx-auto md:mx-0">
                  LUMEN is the AI-powered workspace that adapts to your creative process, making complex workflows feel
                  intuitive and inspiring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg">
                    Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="text-purple-300 border-purple-500 hover:bg-purple-950/30 rounded-full px-8 py-6 text-lg bg-transparent"
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="mt-8 text-sm text-zinc-400 flex items-center justify-center md:justify-start">
                  <Check className="h-4 w-4 text-white mr-2" />
                  No credit card required
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="h-8 bg-zinc-800 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                      <HeroWorkspaceDemo />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-20 border-t border-zinc-800 pt-12">
              <p className="text-center text-sm text-zinc-500 mb-6">TRUSTED BY INNOVATIVE TEAMS AT</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                <div className="h-8 text-zinc-400 font-bold text-xl">ACME Inc.</div>
                <div className="h-8 text-zinc-400 font-bold text-xl">Globex</div>
                <div className="h-8 text-zinc-400 font-bold text-xl">Initech</div>
                <div className="h-8 text-zinc-400 font-bold text-xl">Massive Dynamic</div>
                <div className="h-8 text-zinc-400 font-bold text-xl">Stark Industries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border-purple-700">
                Features
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for the way your mind works</h2>
              <p className="text-xl text-zinc-300">
                LUMEN combines powerful AI with intuitive design to create a workspace that feels like an extension of
                your creative process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Brain className="h-6 w-6 text-purple-400" />}
                title="AI-Powered Insights"
                description="LUMEN's neural engine learns your workflow patterns and suggests optimizations that feel natural to your process."
              />
              <FeatureCard
                icon={<Layers className="h-6 w-6 text-purple-400" />}
                title="Adaptive Workspace"
                description="Your workspace evolves as you use it, bringing relevant tools and content forward when you need them."
              />
              <FeatureCard
                icon={<MessageSquare className="h-6 w-6 text-purple-400" />}
                title="Contextual Collaboration"
                description="Share your thoughts with teammates in context, with smart suggestions that keep everyone aligned."
              />
              <FeatureCard
                icon={<Lightbulb className="h-6 w-6 text-purple-400" />}
                title="Idea Synthesis"
                description="Transform scattered thoughts into cohesive concepts with AI-assisted organization and connections."
              />
              <FeatureCard
                icon={<Workflow className="h-6 w-6 text-purple-400" />}
                title="Flow State Optimization"
                description="LUMEN minimizes distractions and cognitive load, helping you achieve and maintain creative flow."
              />
              <FeatureCard
                icon={<Wand2 className="h-6 w-6 text-purple-400" />}
                title="Creative Augmentation"
                description="Enhance your creative output with AI suggestions that complement your unique style and approach."
              />
            </div>
          </div>
        </section>

        {/* IDE Workspace Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border-purple-700">
                Developer Experience
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Intelligent workspace for developers</h2>
              <p className="text-xl text-zinc-300">
                LUMEN's adaptive IDE understands your coding patterns and helps you build faster with fewer roadblocks.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 mb-16">
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Code that understands you</h3>
                  <p className="text-zinc-300">
                    LUMEN's AI-powered IDE adapts to your coding style, anticipates your needs, and helps you solve
                    problems faster.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-purple-900/20 border border-purple-700/30 flex items-center justify-center flex-shrink-0">
                        <Braces className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Intelligent Code Completion</h4>
                        <p className="text-sm text-zinc-400">
                          Context-aware suggestions that go beyond simple autocomplete
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-purple-900/20 border border-purple-700/30 flex items-center justify-center flex-shrink-0">
                        <Terminal className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Integrated Terminal</h4>
                        <p className="text-sm text-zinc-400">Powerful CLI with smart command suggestions and history</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-purple-900/20 border border-purple-700/30 flex items-center justify-center flex-shrink-0">
                        <GitBranch className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Version Control</h4>
                        <p className="text-sm text-zinc-400">
                          Seamless Git integration with AI-powered commit suggestions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-purple-900/20 border border-purple-700/30 flex items-center justify-center flex-shrink-0">
                        <Database className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Database Tools</h4>
                        <p className="text-sm text-zinc-400">Visual query builder and schema management</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-purple-900/20 border border-purple-700/30 flex items-center justify-center flex-shrink-0">
                        <Play className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Run & Debug</h4>
                        <p className="text-sm text-zinc-400">Intelligent debugging that predicts error sources</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                    Explore IDE Features <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50"></div>
                  <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                    <IDEWorkspaceDemo />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-purple-700/50 transition-colors">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-purple-900/20 border border-purple-700/30 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">AI Code Assistant</h3>
                  <p className="text-zinc-400">
                    Get intelligent code suggestions, refactoring tips, and bug detection as you type. LUMEN understands
                    your coding patterns and helps you write better code faster.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-purple-700/50 transition-colors">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-purple-900/20 border border-purple-700/30 flex items-center justify-center mb-4">
                    <GitBranch className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Smart Version Control</h3>
                  <p className="text-zinc-400">
                    Seamless Git integration with AI-powered commit suggestions, conflict resolution, and code review
                    assistance. Never lose track of your changes again.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-purple-700/50 transition-colors">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-purple-900/20 border border-purple-700/30 flex items-center justify-center mb-4">
                    <Terminal className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Intelligent Terminal</h3>
                  <p className="text-zinc-400">
                    A powerful command-line interface with smart command suggestions, history analysis, and automated
                    task detection to streamline your development workflow.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border-purple-700">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Seamless integration with your creative process</h2>
              <p className="text-xl text-zinc-300">LUMEN adapts to how you work, not the other way around.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                    <ProductInterfaceDemo />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <WorkflowStep
                  number="01"
                  title="Connect Your Tools"
                  description="LUMEN integrates with your existing workflow, pulling in data from the tools you already use."
                />
                <WorkflowStep
                  number="02"
                  title="Personalized Onboarding"
                  description="Our AI analyzes your work patterns to create a personalized experience from day one."
                />
                <WorkflowStep
                  number="03"
                  title="Adaptive Learning"
                  description="As you work, LUMEN learns and adapts, becoming more intuitive and helpful over time."
                />
                <WorkflowStep
                  number="04"
                  title="Continuous Improvement"
                  description="Regular updates bring new features that align with your evolving needs and workflow."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border-purple-700">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What early users are saying</h2>
              <p className="text-xl text-zinc-300">Our beta testers are already experiencing the LUMEN difference.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="LUMEN has completely transformed how I approach creative projects. It's like having a collaborator who knows exactly how my mind works."
                author="Alex Chen"
                role="Product Designer"
                company="Designify"
              />
              <TestimonialCard
                quote="The way LUMEN adapts to my workflow is uncanny. I'm spending less time organizing and more time creating. It's a game-changer."
                author="Sarah Johnson"
                role="Creative Director"
                company="Artisphere"
              />
              <TestimonialCard
                quote="As a developer, I was skeptical about another 'AI tool,' but LUMEN actually delivers. It's like it reads my mind and anticipates what I need next."
                author="Marcus Williams"
                role="Senior Developer"
                company="CodeCraft"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border-purple-700">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Simple, transparent pricing</h2>
              <p className="text-xl text-zinc-300">Choose the plan that's right for you and your team.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Starter"
                price="$19"
                description="Perfect for individual creators and freelancers."
                features={["AI-powered workspace", "Basic integrations", "5GB storage", "1 user"]}
                buttonText="Get Started"
                popular={false}
              />
              <PricingCard
                title="Pro"
                price="$49"
                description="Ideal for professionals and small teams."
                features={[
                  "Everything in Starter",
                  "Advanced AI features",
                  "Unlimited integrations",
                  "50GB storage",
                  "Up to 5 users",
                  "Priority support",
                ]}
                buttonText="Get Started"
                popular={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                description="For organizations with advanced needs."
                features={[
                  "Everything in Pro",
                  "Custom AI training",
                  "Unlimited storage",
                  "Unlimited users",
                  "Dedicated support",
                  "Custom integrations",
                  "Advanced security",
                ]}
                buttonText="Contact Sales"
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border-purple-700">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently asked questions</h2>
              <p className="text-xl text-zinc-300">Everything you need to know about LUMEN.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-zinc-800">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What makes LUMEN different from other productivity tools?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-300">
                    Unlike traditional productivity tools that force you to adapt to their structure, LUMEN adapts to
                    you. Our AI learns your unique workflow patterns and evolves to complement your creative process,
                    making technology feel like a natural extension of your thinking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-zinc-800">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    How does LUMEN's AI work?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-300">
                    LUMEN uses a combination of machine learning models that observe how you work, identify patterns,
                    and make predictions about what you'll need next. The system becomes more accurate over time as it
                    learns from your interactions, creating a personalized experience that feels intuitive and natural.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-zinc-800">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Can LUMEN integrate with my existing tools?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-300">
                    Yes! LUMEN is designed to work alongside your existing toolkit. We offer native integrations with
                    popular design, development, and productivity tools, plus an API for custom connections. Our goal is
                    to enhance your current workflow, not replace it.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-zinc-800">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    How secure is my data with LUMEN?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-300">
                    Security is a top priority. LUMEN employs end-to-end encryption, regular security audits, and strict
                    data access controls. Your data belongs to you, and we're committed to maintaining the highest
                    standards of privacy and security.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-zinc-800">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    When will LUMEN be available?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-300">
                    LUMEN is currently in private beta and will be launching to the public in early 2025. Join our
                    waitlist to get early access and be among the first to experience the future of creative workspaces.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90"></div>
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] mix-blend-overlay opacity-20"></div>

              <div className="relative p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Ready to transform your creative process?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join the LUMEN waitlist today and be among the first to experience the future of intelligent
                  workspaces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow"
                  />
                  <Button className="bg-white text-purple-700 hover:bg-white/90 rounded-full px-6 py-3">
                    Join Waitlist
                  </Button>
                </div>
                <p className="mt-4 text-sm text-white/70">
                  No credit card required. We'll notify you when early access is available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <Link href="/" className="flex items-center mb-4">
                <div className="relative w-8 h-8 mr-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"></div>
                  <div className="relative flex items-center justify-center w-full h-full bg-black rounded-lg">
                    <span className="text-xl font-bold text-white">L</span>
                  </div>
                </div>
                <span className="text-xl font-bold">LUMEN</span>
              </Link>
              <p className="text-zinc-400 mb-4 max-w-xs">
                LUMEN is the AI-powered workspace that adapts to your creative process, making complex workflows feel
                intuitive and inspiring.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              &copy; {new Date().getFullYear()} LUMEN Technologies, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for feature cards
function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800 hover:border-purple-700/50 transition-colors">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-lg bg-purple-900/20 border border-purple-700/30 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  )
}

// Component for workflow steps
function WorkflowStep({ number, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/20 border border-purple-700/30 flex items-center justify-center text-purple-400 font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  )
}

// Component for testimonial cards
function TestimonialCard({ quote, author, role, company }) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardContent className="p-6">
        <div className="mb-4 text-purple-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.3 5.2C7.5 5.2 4.8 7.9 4.8 11.7C4.8 15.5 7.5 18.2 11.3 18.2C15.1 18.2 17.8 15.5 17.8 11.7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3 5.2C15.1 5.2 17.8 7.9 17.8 11.7C17.8 15.5 15.1 18.2 11.3 18.2C7.5 18.2 4.8 15.5 4.8 11.7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8 8.2C13.5 8.6 14.1 9.2 14.5 9.9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-zinc-300 mb-6 italic">"{quote}"</p>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-zinc-400 text-sm">
            {role}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Component for pricing cards
function PricingCard({ title, price, description, features, buttonText, popular }) {
  return (
    <Card className={`${popular ? "border-purple-600 relative" : "border-zinc-800"} bg-zinc-900/50`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Badge className="bg-purple-600 text-white hover:bg-purple-700">Most Popular</Badge>
        </div>
      )}
      <CardContent className={`p-6 ${popular ? "pt-8" : ""}`}>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== "Custom" && <span className="text-zinc-400">/month</span>}
        </div>
        <p className="text-zinc-300 mb-6">{description}</p>
        <Button
          className={`w-full mb-6 ${
            popular ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-zinc-800 hover:bg-zinc-700 text-white"
          }`}
        >
          {buttonText}
        </Button>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
