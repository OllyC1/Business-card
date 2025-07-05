"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Globe, Download, Share2, Building2, ExternalLink, Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function TrevorEvansCard() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("contact")
  const { toast } = useToast()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const contactInfo = {
    name: "Trevor G Evans",
    title: "Chief Executive Officer",
    company: "IMIS Global",
    companyFull: "International Maritime Information Systems",
    phone: "+44 (0) 1489 885 343",
    mobile: "+44 (0) 7789 766 537",
    email: "trevor.e@imisglobal.com",
    website: "www.imisglobal.com",
    address: "25 Barnes Wallis Road, East Segensworth, Fareham, Hampshire, PO15 5TT, UK",
    linkedin: "https://linkedin.com/in/trevor-evans-imis",
    experience: "25+ Years Maritime Technology Leadership",
    specialties: ["Maritime Information Systems", "Global Operations", "Strategic Leadership", "Technology Innovation"],
  }

  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
N:Evans;Trevor;G;;
ORG:${contactInfo.company}
TITLE:${contactInfo.title}
TEL;TYPE=WORK:${contactInfo.phone}
TEL;TYPE=CELL:${contactInfo.mobile}
EMAIL:${contactInfo.email}
URL:https://${contactInfo.website}
ADR;TYPE=WORK:;;${contactInfo.address}
NOTE:${contactInfo.experience}
END:VCARD`

    return vcard
  }

  const downloadVCard = () => {
    setIsDownloading(true)
    const vcard = generateVCard()
    const blob = new Blob([vcard], { type: "text/vcard" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${contactInfo.name.replace(/\s+/g, "_")}.vcf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    setTimeout(() => {
      setIsDownloading(false)
      toast({
        title: "Contact Saved Successfully",
        description: "Trevor's contact information has been added to your device.",
      })
    }, 1200)
  }

  const shareContact = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${contactInfo.name} - ${contactInfo.title}`,
          text: `Connect with ${contactInfo.name}, ${contactInfo.title} at ${contactInfo.company}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link Copied",
        description: "Contact link copied to clipboard.",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
        {/* Hero Section */}
        <div
          className={`transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Company Logo Header */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-4 shadow-2xl border-4 border-white/50">
                <Image
                  src="/images/imis-logo.jpeg"
                  alt="IMIS Global Logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <Card className="mb-8 overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl">
            <div className="relative">
              {/* Premium Header */}
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8 relative overflow-hidden">
                {/* Decorative patterned overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                      <Image
                        src="/images/trevor-photo.jpeg"
                        alt={contactInfo.name}
                        width={140}
                        height={140}
                        className="relative rounded-full border-4 border-white shadow-2xl object-cover transform transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="text-center text-white">
                    <h1 className="text-3xl font-bold mb-2 tracking-tight">{contactInfo.name}</h1>
                    <div className="flex justify-center mb-3">
                      <Badge className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white border-0 px-4 py-1 text-sm font-medium shadow-lg">
                        {contactInfo.title}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-cyan-300 mb-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{contactInfo.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information Bar */}
              <div className="bg-gradient-to-r from-white to-blue-50 px-8 py-6 border-t border-blue-100">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-blue-700 mb-1">
                    <Building2 className="w-5 h-5" />
                    <span className="text-xl font-bold">{contactInfo.company}</span>
                  </div>
                  <p className="text-blue-600 text-sm font-medium">{contactInfo.companyFull}</p>
                  <div className="mt-3 flex items-center justify-center gap-4 text-xs text-blue-500">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Maritime Technology Leader
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      Global Operations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex bg-white/10 backdrop-blur-xl rounded-2xl p-1 mb-6 border border-white/20">
            {[
              { id: "contact", label: "Contact", icon: Phone },
              { id: "about", label: "About", icon: Star },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all duration-300 ${
                  activeSection === id
                    ? "bg-white text-blue-600 shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div
          className={`transform transition-all duration-1000 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {activeSection === "contact" && (
            <Card className="mb-8 shadow-2xl border-0 bg-white/95 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-blue-600" />
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      label: "Office",
                      value: contactInfo.phone,
                      href: `tel:${contactInfo.phone}`,
                      colorClass: "bg-blue-100 text-blue-600",
                    },
                    {
                      icon: Phone,
                      label: "Mobile",
                      value: contactInfo.mobile,
                      href: `tel:${contactInfo.mobile}`,
                      colorClass: "bg-green-100 text-green-600",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: contactInfo.email,
                      href: `mailto:${contactInfo.email}`,
                      colorClass: "bg-red-100 text-red-600",
                    },
                    {
                      icon: Globe,
                      label: "Website",
                      value: contactInfo.website,
                      href: `https://${contactInfo.website}`,
                      colorClass: "bg-purple-100 text-purple-600",
                    },
                  ].map(({ icon: Icon, label, value, href, colorClass }, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                    >
                      <div
                        className={`${colorClass} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 font-medium">{label}</p>
                        <a
                          href={href}
                          className="text-gray-800 hover:text-blue-600 transition-colors font-semibold group-hover:underline"
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {value}
                        </a>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  ))}

                  <div className="border-t pt-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <MapPin className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium mb-1">Address</p>
                        <p className="text-gray-800 leading-relaxed">{contactInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "about" && (
            <Card className="mb-8 shadow-2xl border-0 bg-white/95 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <Star className="w-6 h-6 text-blue-600" />
                  Professional Profile
                </h2>

                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <h3 className="font-semibold text-gray-800 mb-2">Experience</h3>
                    <p className="text-gray-700">{contactInfo.experience}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Areas of Expertise</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {contactInfo.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                    <h3 className="font-semibold text-gray-800 mb-2">About IMIS Global</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Leading provider of International Maritime Information Systems, delivering cutting-edge technology
                      solutions for the global maritime industry.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Premium Action Buttons */}
        <div
          className={`space-y-4 transform transition-all duration-1000 delay-600 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Button
            onClick={downloadVCard}
            disabled={isDownloading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg font-semibold shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 border-0"
          >
            <Download className="w-6 h-6 mr-3" />
            {isDownloading ? "Saving Contact..." : "Save to Contacts"}
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={shareContact}
              variant="outline"
              className="py-6 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-xl transform transition-all duration-300 hover:scale-105"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>

            <Button
              onClick={() => window.open(`https://${contactInfo.website}`, "_blank")}
              variant="outline"
              className="py-6 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-xl transform transition-all duration-300 hover:scale-105"
            >
              <Globe className="w-5 h-5 mr-2" />
              Website
            </Button>
          </div>
        </div>

        {/* Premium Footer */}
        <div
          className={`text-center mt-12 transform transition-all duration-1000 delay-800 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center gap-2 text-white/80 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Powered by NFC Technology</span>
            </div>
            <p className="text-white/60 text-xs">
              © {new Date().getFullYear()} IMIS Global. Premium Digital Business Card
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
