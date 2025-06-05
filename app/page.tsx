import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  const socialLinks = [
    { name: "Boosty", url: "https://boosty.to/microhouse", icon: "💰" },
    { name: "Patreon", url: "https://patreon.com/microhouse", icon: "🎯" },
    { name: "Medium", url: "https://medium.com/@microhouse", icon: "📝" },
    { name: "Facebook", url: "https://facebook.com/microhouse", icon: "📘" },
    { name: "Instagram", url: "https://instagram.com/microhouse", icon: "📷" },
    { name: "Telegram", url: "https://t.me/microhouse", icon: "✈️" },
    { name: "X (Twitter)", url: "https://x.com/microhouse", icon: "🐦" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/placeholder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Micro House - Science and Medical Writer"
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-white shadow-lg object-cover"
                  priority
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Micro House</h1>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Science Writer
                </Badge>
                <Badge variant="secondary" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
                  Research
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Medicine
                </Badge>
              </div>
            </div>

            {/* About Section */}
            <Card className="mb-12 border-0 shadow-lg bg-white/90 backdrop-blur-md">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 text-center">About My Work</h2>

                <div className="prose prose-lg prose-slate max-w-none text-center">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    I research and cover current issues in modern science and medicine. I share expert materials,
                    analyze scientific discoveries and their impact on everyday life.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    My goal is to make complex scientific concepts understandable and accessible to a broad audience,
                    contributing to improving society's scientific literacy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links Section */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-md">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center">
                  Social Media & Platforms
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="group">
                      <Button
                        variant="outline"
                        className="w-full h-16 text-left justify-start gap-4 border-slate-200 hover:border-blue-300 hover:bg-blue-50/80 transition-all duration-200 group-hover:shadow-md backdrop-blur-sm"
                      >
                        <span className="text-2xl">{link.icon}</span>
                        <span className="font-medium text-slate-700 group-hover:text-blue-700">{link.name}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="mt-12 text-center">
              <Separator className="mb-6 bg-slate-200/50" />
              <p className="text-slate-500 text-sm">© 2024 Micro House. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
