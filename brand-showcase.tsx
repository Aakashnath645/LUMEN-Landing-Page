"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Code, Zap, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BrandShowcase() {
  const [activeTab, setActiveTab] = useState("brand")

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-zinc-900 text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="inline-block mb-6 relative">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <h1 className="relative text-8xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              LUMEN
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-8 text-purple-100">
            Where human intuition meets digital brilliance.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
              Discover <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="text-purple-300 border-purple-500 hover:bg-purple-950/30 rounded-full px-6"
            >
              Join Waitlist
            </Button>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-zinc-800/50 rounded-full p-1">
            {["brand", "voice", "visuals", "story"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "brand" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-purple-400" />
                    Brand Essence
                  </h3>
                  <p className="text-zinc-300">
                    LUMEN represents the perfect fusion of human creativity and technological advancement. The name
                    evokes illumination, clarity, and the spark of innovation that guides users through digital
                    complexity with elegance and intuition.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-purple-400" />
                    Core Values
                  </h3>
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>
                        <strong className="text-white">Human-centered brilliance:</strong> Technology that understands
                        and enhances human potential
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>
                        <strong className="text-white">Intuitive power:</strong> Complex capabilities delivered through
                        simple, delightful experiences
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>
                        <strong className="text-white">Creative rebellion:</strong> Challenging conventions to create
                        tools that inspire and empower
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "voice" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Code className="mr-2 h-5 w-5 text-purple-400" />
                    Tone of Voice
                  </h3>
                  <div className="space-y-4 text-zinc-300">
                    <p>
                      LUMEN speaks with confidence and clarity, balancing technical expertise with conversational
                      warmth. Our voice is:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>
                          <strong className="text-white">Bold but approachable:</strong> "We're not just building
                          another tool. We're reimagining what's possible when technology truly understands you."
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>
                          <strong className="text-white">Clever without condescension:</strong> "Complex problems
                          deserve elegant solutions. That's why we obsess over the details you'll never have to think
                          about."
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>
                          <strong className="text-white">Culturally fluent:</strong> "Your workflow shouldn't just be
                          efficient—it should spark joy. Yes, we said it. Marie Kondo your digital life."
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-purple-400" />
                    Communication Principles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-300">
                    <div className="p-4 bg-zinc-700/30 rounded-lg">
                      <h4 className="font-bold text-white mb-2">We say:</h4>
                      <p>"Let's build something extraordinary together."</p>
                      <p>"This feature learns how you work, so you don't have to learn how it works."</p>
                    </div>
                    <div className="p-4 bg-zinc-700/30 rounded-lg">
                      <h4 className="font-bold text-white mb-2">We don't say:</h4>
                      <p>"Our proprietary algorithm optimizes user workflows."</p>
                      <p>"This solution leverages cutting-edge technology."</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "visuals" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Visual Identity</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Color Palette</h4>
                      <div className="grid grid-cols-5 gap-2">
                        <div className="aspect-square rounded-lg bg-purple-600 flex items-end p-2">
                          <span className="text-xs text-white/80">Primary</span>
                        </div>
                        <div className="aspect-square rounded-lg bg-pink-600 flex items-end p-2">
                          <span className="text-xs text-white/80">Accent</span>
                        </div>
                        <div className="aspect-square rounded-lg bg-zinc-900 flex items-end p-2">
                          <span className="text-xs text-white/80">Base</span>
                        </div>
                        <div className="aspect-square rounded-lg bg-zinc-800 flex items-end p-2">
                          <span className="text-xs text-white/80">Surface</span>
                        </div>
                        <div className="aspect-square rounded-lg bg-white flex items-end p-2">
                          <span className="text-xs text-black/80">Text</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Typography</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-zinc-700/30 rounded-lg">
                          <p className="text-3xl font-black text-white">Display / Heading</p>
                          <p className="text-xs text-zinc-400">Inter / Weight: 800-900 / Tracking: -0.02em</p>
                        </div>
                        <div className="p-3 bg-zinc-700/30 rounded-lg">
                          <p className="text-base font-normal text-zinc-300">Body Text</p>
                          <p className="text-xs text-zinc-400">Inter / Weight: 400-500 / Leading: 1.6</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">UI Elements</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-zinc-700/30 rounded-lg">
                          <p className="text-sm text-zinc-400 mb-2">Buttons</p>
                          <div className="space-y-2">
                            <button className="w-full py-2 px-4 bg-purple-600 rounded-full text-white font-medium">
                              Primary Action
                            </button>
                            <button className="w-full py-2 px-4 border border-purple-500 rounded-full text-purple-300 font-medium">
                              Secondary Action
                            </button>
                          </div>
                        </div>
                        <div className="p-3 bg-zinc-700/30 rounded-lg">
                          <p className="text-sm text-zinc-400 mb-2">Cards & Containers</p>
                          <div className="p-3 bg-zinc-800 border border-zinc-700 rounded-xl">
                            <div className="w-full h-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-md mb-2"></div>
                            <div className="w-3/4 h-3 bg-zinc-700 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "story" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">The LUMEN Origin</h3>
                  <div className="prose prose-invert max-w-none text-zinc-300">
                    <p>
                      In 2025, a small team of designers, engineers, and dreamers gathered in a Tokyo apartment during a
                      rare aurora borealis visible from the city. As the sky danced with light, they debated how
                      technology had become increasingly powerful yet increasingly disconnected from human experience.
                    </p>
                    <p>
                      That night, inspired by the natural phenomenon that brought digital-like precision to the analog
                      sky, they sketched the first prototype of what would become LUMEN—a system that would bridge the
                      gap between human intuition and computational power.
                    </p>
                    <p>
                      The name LUMEN was chosen for its dual meaning: the scientific measure of light (representing
                      clarity and illumination) and its Latin root meaning "threshold" (symbolizing the gateway between
                      human creativity and digital capability).
                    </p>
                    <p>
                      Today, LUMEN stands as a testament to that vision—tools that feel like an extension of human
                      thought rather than external systems to be learned and managed. Technology that doesn't just serve
                      humans, but understands them.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Brand Manifesto</h3>
                  <div className="p-6 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-700/30 text-center">
                    <p className="text-xl font-light italic text-purple-100 leading-relaxed">
                      "We believe the most powerful technology doesn't feel like technology at all.
                      <br />
                      <br />
                      It feels like magic. It feels like you.
                      <br />
                      <br />
                      LUMEN isn't just what we build—it's how we see the world:
                      <br />
                      illuminated by human potential, powered by digital brilliance."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
