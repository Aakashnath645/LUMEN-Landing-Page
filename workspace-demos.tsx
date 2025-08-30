"use client"

import { useState } from "react"
import {
  Sparkles,
  Brain,
  Zap,
  MessageSquare,
  Search,
  Plus,
  Calendar,
  FileText,
  BarChart2,
  Settings,
  ChevronDown,
  Clock,
  MoreHorizontal,
  Users,
  Bell,
  Terminal,
  GitBranch,
  Database,
  FileCode,
  Split,
  CheckCircle,
  Circle,
  AlertCircle,
  ArrowRight,
  Layers,
  Folder,
  FolderOpen,
  ChevronRight,
  Maximize2,
  RefreshCw,
  Lightbulb,
} from "lucide-react"

export function HeroWorkspaceDemo() {
  return (
    <div className="w-full h-full bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
      {/* Header */}
      <div className="h-12 bg-black text-white flex items-center justify-between px-4 border-b border-zinc-800">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="relative w-6 h-6 mr-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md blur opacity-75"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-black rounded-md">
                <span className="text-sm font-bold text-white">L</span>
              </div>
            </div>
            <span className="text-sm font-bold text-white">LUMEN</span>
          </div>
          <div className="h-6 w-px bg-zinc-800"></div>
          <div className="text-xs text-zinc-400">Project Nebula</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-xs text-white font-medium">
              A
            </div>
            <div className="w-6 h-6 rounded-full bg-pink-700 flex items-center justify-center text-xs text-white font-medium">
              S
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-xs text-white font-medium">
              M
            </div>
            <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-white font-medium">
              +2
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-zinc-400 hover:text-white">
              <Bell className="h-4 w-4" />
            </button>
            <button className="text-zinc-400 hover:text-white">
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100%-3rem)]">
        {/* Sidebar */}
        <div className="w-14 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-4 space-y-6">
          <button className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-600/30 flex items-center justify-center text-purple-400">
            <Sparkles className="h-5 w-5" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400">
            <FileText className="h-5 w-5" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400">
            <MessageSquare className="h-5 w-5" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400">
            <Calendar className="h-5 w-5" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400">
            <BarChart2 className="h-5 w-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Workspace Header */}
          <div className="h-12 border-b border-zinc-800 flex items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-sm font-medium text-white">Dashboard</h2>
              <div className="text-xs px-2 py-0.5 rounded-full bg-purple-900/30 text-purple-400 border border-purple-700/30">
                Personal
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 h-8 rounded-md bg-zinc-800 border border-zinc-700 px-8 text-sm text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <Search className="h-4 w-4 text-zinc-500 absolute left-2.5 top-2" />
              </div>
              <button className="h-8 px-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium flex items-center">
                <Plus className="h-4 w-4 mr-1" /> New
              </button>
            </div>
          </div>

          {/* Workspace Content */}
          <div className="flex-1 p-6 overflow-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-white">Good morning, Alex</h1>
                <div className="text-sm text-zinc-400 flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> Tuesday, May 12
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-800/20 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white mb-2">Your workspace is learning from you</h3>
                    <p className="text-zinc-300 text-sm mb-4">
                      LUMEN has analyzed your recent activity and has some suggestions to improve your workflow.
                    </p>
                    <button className="text-sm font-medium text-purple-400 hover:text-purple-300 flex items-center">
                      View insights <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-white">Recent Projects</h2>
                <button className="text-sm text-zinc-400 hover:text-white">View all</button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <ProjectCard
                  title="Marketing Campaign"
                  description="Q2 product launch materials"
                  icon={<FileText className="h-5 w-5" />}
                  color="bg-blue-600/20"
                  borderColor="border-blue-600/30"
                  iconColor="text-blue-400"
                  progress={75}
                />
                <ProjectCard
                  title="Website Redesign"
                  description="New homepage and product pages"
                  icon={<Layers className="h-5 w-5" />}
                  color="bg-purple-600/20"
                  borderColor="border-purple-600/30"
                  iconColor="text-purple-400"
                  progress={40}
                />
                <ProjectCard
                  title="User Research"
                  description="Customer interviews and surveys"
                  icon={<Users className="h-5 w-5" />}
                  color="bg-pink-600/20"
                  borderColor="border-pink-600/30"
                  iconColor="text-pink-400"
                  progress={90}
                />
              </div>
            </div>

            {/* Tasks & AI Suggestions */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-white">Today's Tasks</h2>
                  <button className="text-sm text-zinc-400 hover:text-white">View all</button>
                </div>
                <div className="space-y-2">
                  <TaskItem title="Finalize design system" status="completed" time="10:00 AM" priority="high" />
                  <TaskItem title="Review marketing copy" status="in-progress" time="11:30 AM" priority="medium" />
                  <TaskItem title="Team sync meeting" status="upcoming" time="2:00 PM" priority="medium" />
                  <TaskItem title="Prepare quarterly report" status="upcoming" time="4:30 PM" priority="high" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-white">AI Suggestions</h2>
                  <button className="text-sm text-zinc-400 hover:text-white">Refresh</button>
                </div>
                <div className="space-y-3">
                  <AISuggestion
                    title="Optimize your morning routine"
                    description="Based on your productivity patterns, starting with design tasks before meetings could improve focus."
                    icon={<Zap className="h-5 w-5" />}
                  />
                  <AISuggestion
                    title="Content you might find useful"
                    description="3 articles related to your current website redesign project were published recently."
                    icon={<Lightbulb className="h-5 w-5" />}
                  />
                  <AISuggestion
                    title="Collaboration opportunity"
                    description="Sarah from Marketing is working on a similar task. Consider syncing up."
                    icon={<Users className="h-5 w-5" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IDEWorkspaceDemo() {
  return (
    <div className="w-full h-full bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
      {/* IDE Header */}
      <div className="bg-zinc-800 px-4 py-2 flex items-center justify-between border-b border-zinc-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center ml-2">
            <div className="relative w-5 h-5 mr-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md blur opacity-75"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-zinc-900 rounded-md">
                <span className="text-xs font-bold text-white">L</span>
              </div>
            </div>
            <span className="text-xs font-medium text-white">LUMEN IDE</span>
          </div>
          <div className="text-xs text-zinc-400 ml-2">project.js - /src/components/</div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-zinc-400 hover:text-white">
            <Split className="h-4 w-4" />
          </button>
          <button className="text-zinc-400 hover:text-white">
            <Maximize2 className="h-4 w-4" />
          </button>
          <button className="text-zinc-400 hover:text-white">
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* IDE Content */}
      <div className="flex h-[calc(100%-2.5rem)]">
        {/* Sidebar */}
        <div className="w-12 bg-zinc-800 border-r border-zinc-700 flex flex-col items-center py-3 space-y-4">
          <button className="h-8 w-8 text-purple-400 bg-zinc-700/50 rounded-md flex items-center justify-center">
            <FileCode className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 text-zinc-400 hover:text-white rounded-md flex items-center justify-center">
            <GitBranch className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 text-zinc-400 hover:text-white rounded-md flex items-center justify-center">
            <Database className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 text-zinc-400 hover:text-white rounded-md flex items-center justify-center">
            <Terminal className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 text-zinc-400 hover:text-white rounded-md flex items-center justify-center">
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* File Explorer */}
        <div className="w-48 bg-zinc-800/50 border-r border-zinc-700 py-2 px-2 text-xs">
          <div className="text-zinc-400 font-medium mb-2 px-2 flex items-center justify-between">
            <span>EXPLORER</span>
            <Plus className="h-3 w-3" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700/50 cursor-pointer">
              <ChevronDown className="h-3 w-3 mr-1" />
              <FolderOpen className="h-3 w-3 mr-1 text-zinc-400" />
              <span>src/</span>
            </div>
            <div className="pl-4 space-y-1">
              <div className="flex items-center text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700/50 cursor-pointer">
                <ChevronDown className="h-3 w-3 mr-1" />
                <FolderOpen className="h-3 w-3 mr-1 text-zinc-400" />
                <span>components/</span>
              </div>
              <div className="pl-4 space-y-1">
                <div className="flex items-center text-zinc-300 px-2 py-1 rounded bg-zinc-700/50 cursor-pointer">
                  <span className="text-purple-400 mr-1">•</span>
                  <FileCode className="h-3 w-3 mr-1 text-zinc-400" />
                  <span>project.js</span>
                </div>
                <div className="flex items-center text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700/50 cursor-pointer">
                  <FileCode className="h-3 w-3 mr-1 text-zinc-400" />
                  <span>analytics.js</span>
                </div>
                <div className="flex items-center text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700/50 cursor-pointer">
                  <FileCode className="h-3 w-3 mr-1 text-zinc-400" />
                  <span>dashboard.js</span>
                </div>
              </div>
              <div className="flex items-center text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700/50 cursor-pointer">
                <ChevronRight className="h-3 w-3 mr-1" />
                <Folder className="h-3 w-3 mr-1 text-zinc-400" />
                <span>utils/</span>
              </div>
              <div className="flex items-center text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700/50 cursor-pointer">
                <ChevronRight className="h-3 w-3 mr-1" />
                <Folder className="h-3 w-3 mr-1 text-zinc-400" />
                <span>hooks/</span>
              </div>
              <div className="flex items-center text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700/50 cursor-pointer">
                <FileCode className="h-3 w-3 mr-1 text-zinc-400" />
                <span>api.js</span>
              </div>
            </div>
            <div className="flex items-center text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700/50 cursor-pointer">
              <FileCode className="h-3 w-3 mr-1 text-zinc-400" />
              <span>package.json</span>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="bg-zinc-800/30 border-b border-zinc-700 px-4 py-1 flex text-xs">
              <div className="border-b-2 border-purple-500 text-white px-3 py-1 flex items-center">
                <FileCode className="h-3 w-3 mr-1" />
                project.js
              </div>
              <div className="text-zinc-400 px-3 py-1 flex items-center">
                <FileCode className="h-3 w-3 mr-1" />
                utils.js
              </div>
              <div className="text-zinc-400 px-3 py-1 flex items-center">
                <FileCode className="h-3 w-3 mr-1" />
                api.js
              </div>
            </div>
            <div className="flex-1 p-4 font-mono text-sm overflow-hidden">
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">1</div>
                <div>
                  <span className="text-purple-400">import</span> <span className="text-green-400">React</span>{" "}
                  <span className="text-purple-400">from</span> <span className="text-yellow-300">'react'</span>;
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">2</div>
                <div>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-green-400">
                    {"{"} analyzeData {"}"}
                  </span>{" "}
                  <span className="text-purple-400">from</span> <span className="text-yellow-300">'./utils'</span>;
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">3</div>
                <div></div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">4</div>
                <div>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">ProjectAnalytics</span>{" "}
                  <span className="text-white">=</span> <span className="text-purple-400">({"{"}</span>{" "}
                  <span className="text-orange-300">data</span>, <span className="text-orange-300">config</span>{" "}
                  <span className="text-purple-400">{"}"})</span> <span className="text-purple-400">{"=>"}</span>{" "}
                  <span className="text-purple-400">{"{"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">5</div>
                <div>
                  &nbsp;&nbsp;<span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">results</span> <span className="text-white">=</span>{" "}
                  <span className="text-green-400">analyzeData</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-300">data</span>, <span className="text-orange-300">config</span>
                  <span className="text-white">);</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">6</div>
                <div></div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">7</div>
                <div>
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-purple-400">(</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">8</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">{"<"}</span>
                  <span className="text-green-400">div</span> <span className="text-blue-400">className</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-300">"analytics-container"</span>
                  <span className="text-purple-400">{">"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">9</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">{"<"}</span>
                  <span className="text-green-400">h2</span>
                  <span className="text-purple-400">{">"}</span>
                  <span className="text-white">Project Analytics</span>
                  <span className="text-purple-400">{"</"}</span>
                  <span className="text-green-400">h2</span>
                  <span className="text-purple-400">{">"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">10</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">{"{"}</span>
                  <span className="text-orange-300">results</span>.<span className="text-blue-400">map</span>
                  <span className="text-purple-400">((</span>
                  <span className="text-orange-300">item</span>
                  <span className="text-purple-400">) =&gt;</span> <span className="text-purple-400">(</span>
                </div>
              </div>
              <div className="flex bg-purple-500/10 border-l-2 border-purple-500">
                <div className="text-zinc-600 mr-4 select-none">11</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-purple-400">{"<"}</span>
                  <span className="text-green-400">div</span> <span className="text-blue-400">key</span>
                  <span className="text-white">=</span>
                  <span className="text-purple-400">{"{"}</span>
                  <span className="text-orange-300">item</span>.<span className="text-blue-400">id</span>
                  <span className="text-purple-400">{"}"}</span> <span className="text-blue-400">className</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-300">"analytics-item"</span>
                  <span className="text-purple-400">{">"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">12</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-purple-400">{"<"}</span>
                  <span className="text-green-400">span</span>
                  <span className="text-purple-400">{">"}</span>
                  <span className="text-purple-400">{"{"}</span>
                  <span className="text-orange-300">item</span>.<span className="text-blue-400">name</span>
                  <span className="text-purple-400">{"}"}</span>
                  <span className="text-purple-400">{"</"}</span>
                  <span className="text-green-400">span</span>
                  <span className="text-purple-400">{">"}</span>
                  <span className="text-white">:</span> <span className="text-purple-400">{"{"}</span>
                  <span className="text-orange-300">item</span>.<span className="text-blue-400">value</span>
                  <span className="text-purple-400">{"}"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">13</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-purple-400">{"</"}</span>
                  <span className="text-green-400">div</span>
                  <span className="text-purple-400">{">"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">14</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">{"))}"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">15</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">{"</"}</span>
                  <span className="text-green-400">div</span>
                  <span className="text-purple-400">{">"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">16</div>
                <div>
                  &nbsp;&nbsp;<span className="text-purple-400">);</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">17</div>
                <div>
                  <span className="text-purple-400">{"}"};</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">18</div>
                <div></div>
              </div>
              <div className="flex">
                <div className="text-zinc-600 mr-4 select-none">19</div>
                <div>
                  <span className="text-purple-400">export</span> <span className="text-purple-400">default</span>{" "}
                  <span className="text-blue-400">ProjectAnalytics</span>;
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="border-t border-zinc-700 p-3 bg-zinc-800/30">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
                <div className="text-xs text-zinc-300">
                  <span className="text-purple-400 font-medium">LUMEN AI:</span> Consider adding error handling for when
                  analyzeData returns null results.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductInterfaceDemo() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="w-full h-full bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
      {/* Header */}
      <div className="h-12 bg-black text-white flex items-center justify-between px-4 border-b border-zinc-800">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="relative w-6 h-6 mr-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md blur opacity-75"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-black rounded-md">
                <span className="text-sm font-bold text-white">L</span>
              </div>
            </div>
            <span className="text-sm font-bold text-white">LUMEN</span>
          </div>
          <div className="flex space-x-1">
            <button
              className={`px-3 py-1 text-xs rounded-md ${activeTab === "dashboard" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"}`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`px-3 py-1 text-xs rounded-md ${activeTab === "projects" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"}`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
            <button
              className={`px-3 py-1 text-xs rounded-md ${activeTab === "calendar" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"}`}
              onClick={() => setActiveTab("calendar")}
            >
              Calendar
            </button>
            <button
              className={`px-3 py-1 text-xs rounded-md ${activeTab === "analytics" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"}`}
              onClick={() => setActiveTab("analytics")}
            >
              Analytics
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-zinc-400 hover:text-white">
            <Search className="h-4 w-4" />
          </button>
          <button className="text-zinc-400 hover:text-white">
            <Bell className="h-4 w-4" />
          </button>
          <div className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-xs text-white font-medium">
            A
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-white">Project Overview</h1>
          <div className="flex items-center space-x-2">
            <button className="h-8 px-3 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium flex items-center">
              <Clock className="h-3 w-3 mr-1" /> Last 7 days
            </button>
            <button className="h-8 px-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium flex items-center">
              <Plus className="h-3 w-3 mr-1" /> New Project
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Active Projects"
            value="12"
            change="+2"
            icon={<Layers className="h-5 w-5" />}
            positive={true}
          />
          <StatCard
            title="Tasks Completed"
            value="48"
            change="+12"
            icon={<CheckCircle className="h-5 w-5" />}
            positive={true}
          />
          <StatCard
            title="Hours Tracked"
            value="32.5"
            change="-4"
            icon={<Clock className="h-5 w-5" />}
            positive={false}
          />
          <StatCard
            title="Team Efficiency"
            value="94%"
            change="+7%"
            icon={<Zap className="h-5 w-5" />}
            positive={true}
          />
        </div>

        {/* Project Timeline */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-white">Project Timeline</h2>
            <div className="flex items-center space-x-2">
              <button className="text-xs text-zinc-400 hover:text-white">Week</button>
              <button className="text-xs text-purple-400 border-b border-purple-400">Month</button>
              <button className="text-xs text-zinc-400 hover:text-white">Quarter</button>
            </div>
          </div>
          <div className="h-32 w-full relative">
            {/* Timeline visualization */}
            <div className="absolute top-0 left-0 right-0 h-6 flex items-center justify-between px-2 text-xs text-zinc-500">
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
            </div>
            <div className="absolute top-8 left-0 right-0 bottom-0">
              {/* Project bars */}
              <div className="absolute top-0 left-[5%] w-[25%] h-4 bg-purple-600/70 rounded-sm"></div>
              <div className="absolute top-6 left-[15%] w-[40%] h-4 bg-pink-600/70 rounded-sm"></div>
              <div className="absolute top-12 left-[30%] w-[35%] h-4 bg-blue-600/70 rounded-sm"></div>
              <div className="absolute top-18 left-[10%] w-[20%] h-4 bg-green-600/70 rounded-sm"></div>

              {/* Current time indicator */}
              <div className="absolute top-0 bottom-0 left-[42%] w-px bg-white/50 z-10">
                <div className="absolute -top-1 -ml-1 w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-white">Recent Activity</h2>
              <button className="text-xs text-zinc-400 hover:text-white">View all</button>
            </div>
            <div className="space-y-3">
              <ActivityItem
                user="Alex"
                action="completed task"
                item="Finalize design system"
                time="2h ago"
                avatar="A"
                avatarColor="bg-purple-700"
              />
              <ActivityItem
                user="Sarah"
                action="commented on"
                item="Homepage redesign"
                time="4h ago"
                avatar="S"
                avatarColor="bg-pink-700"
              />
              <ActivityItem
                user="Marcus"
                action="created project"
                item="Q3 Marketing Campaign"
                time="Yesterday"
                avatar="M"
                avatarColor="bg-blue-700"
              />
              <ActivityItem
                user="You"
                action="updated"
                item="Project timeline"
                time="Yesterday"
                avatar="A"
                avatarColor="bg-purple-700"
              />
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <h2 className="text-sm font-medium text-white">AI Insights</h2>
                <div className="ml-2 px-1.5 py-0.5 text-[10px] rounded bg-purple-900/50 text-purple-400 border border-purple-700/30">
                  BETA
                </div>
              </div>
              <button className="text-xs text-zinc-400 hover:text-white">Refresh</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-zinc-800 rounded-lg">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-white mb-1">Resource Allocation Suggestion</h3>
                  <p className="text-xs text-zinc-400">
                    Based on current workloads, consider reassigning 2 team members from Project A to Project B to meet
                    the upcoming deadline.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-zinc-800 rounded-lg">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-white mb-1">Productivity Pattern Detected</h3>
                  <p className="text-xs text-zinc-400">
                    Your team completes 43% more tasks when meetings are scheduled in the afternoon rather than morning.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-zinc-800 rounded-lg">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-white mb-1">Risk Alert</h3>
                  <p className="text-xs text-zinc-400">
                    Website Redesign project is at risk of missing its deadline based on current progress and historical
                    patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Components
function ProjectCard({ title, description, icon, color, borderColor, iconColor, progress }) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 hover:border-purple-600/30 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className={`h-10 w-10 rounded-lg ${color} ${borderColor} flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
        <button className="text-zinc-500 hover:text-zinc-300">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      <h3 className="text-sm font-medium text-white mb-1">{title}</h3>
      <p className="text-xs text-zinc-400 mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <div className="w-full max-w-[120px]">
          <div className="h-1.5 w-full bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <span className="text-xs text-zinc-400">{progress}%</span>
      </div>
    </div>
  )
}

function TaskItem({ title, status, time, priority }) {
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "in-progress":
        return <Circle className="h-4 w-4 text-blue-400 fill-current" />
      case "upcoming":
        return <Circle className="h-4 w-4 text-zinc-400" />
      default:
        return <Circle className="h-4 w-4 text-zinc-400" />
    }
  }

  const getPriorityBadge = () => {
    switch (priority) {
      case "high":
        return (
          <span className="px-1.5 py-0.5 text-[10px] rounded bg-red-900/30 text-red-400 border border-red-700/30">
            High
          </span>
        )
      case "medium":
        return (
          <span className="px-1.5 py-0.5 text-[10px] rounded bg-yellow-900/30 text-yellow-400 border border-yellow-700/30">
            Medium
          </span>
        )
      case "low":
        return (
          <span className="px-1.5 py-0.5 text-[10px] rounded bg-green-900/30 text-green-400 border border-green-700/30">
            Low
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex items-center justify-between p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg">
      <div className="flex items-center">
        {getStatusIcon()}
        <span className="ml-2 text-sm text-zinc-300">{title}</span>
      </div>
      <div className="flex items-center space-x-2">
        {getPriorityBadge()}
        <span className="text-xs text-zinc-500">{time}</span>
      </div>
    </div>
  )
}

function AISuggestion({ title, description, icon }) {
  return (
    <div className="flex items-start space-x-3 p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg">
      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-white mb-1">{title}</h3>
        <p className="text-xs text-zinc-400">{description}</p>
      </div>
    </div>
  )
}

function StatCard({ title, value, change, icon, positive }) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-zinc-400 mb-1">{title}</p>
          <div className="flex items-baseline">
            <h3 className="text-xl font-bold text-white mr-2">{value}</h3>
            <span className={`text-xs ${positive ? "text-green-400" : "text-red-400"}`}>{change}</span>
          </div>
        </div>
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  )
}

function ActivityItem({ user, action, item, time, avatar, avatarColor }) {
  return (
    <div className="flex items-start space-x-3">
      <div
        className={`w-6 h-6 rounded-full ${avatarColor} flex items-center justify-center text-xs text-white font-medium flex-shrink-0`}
      >
        {avatar}
      </div>
      <div className="flex-1">
        <p className="text-xs text-zinc-300">
          <span className="font-medium">{user}</span> {action} <span className="text-white">{item}</span>
        </p>
        <p className="text-xs text-zinc-500">{time}</p>
      </div>
    </div>
  )
}
