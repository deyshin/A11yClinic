"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { sendContactEmail, type ContactFormData } from "@/app/actions/contact"

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    topics: {
      general: false,
      checkup: false,
      solutions: false,
      maintenance: false,
      party: false,
    },
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (topic: string) => {
    setFormData((prev) => ({
      ...prev,
      topics: {
        ...prev.topics,
        [topic]: !prev.topics[topic as keyof typeof prev.topics],
      },
    }))
  }

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        toast({
          title: "Message sent!",
          description: "An Accessibility Practitioner will get in touch with you!",
        })

        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          topics: {
            general: false,
            checkup: false,
            solutions: false,
            maintenance: false,
            party: false,
          },
          message: "",
        })
      } else {
        setFormError(result.message || "Failed to send your message. Please try again.")
        toast({
          title: "Error",
          description: result.message || "Failed to send your message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormError("An unexpected error occurred. Please try again.")
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">Get in Touch</h2>

          <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="text-navy-900">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-1"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-navy-900">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1"
                  />
                </div>

                {/* Topics Checkboxes */}
                <div>
                  <Label className="text-navy-900 mb-2 block">I'm interested in (select all that apply):</Label>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="general"
                        checked={formData.topics.general}
                        onCheckedChange={() => handleCheckboxChange("general")}
                      />
                      <Label htmlFor="general" className="text-navy-800 cursor-pointer">
                        General Inquiry
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="checkup"
                        checked={formData.topics.checkup}
                        onCheckedChange={() => handleCheckboxChange("checkup")}
                      />
                      <Label
                        htmlFor="checkup"
                        className="text-navy-800 cursor-pointer underline hover:text-navy-900"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToServices()
                        }}
                      >
                        A11y Checkup
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="solutions"
                        checked={formData.topics.solutions}
                        onCheckedChange={() => handleCheckboxChange("solutions")}
                      />
                      <Label
                        htmlFor="solutions"
                        className="text-navy-800 cursor-pointer underline hover:text-navy-900"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToServices()
                        }}
                      >
                        A11y Solutions
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="maintenance"
                        checked={formData.topics.maintenance}
                        onCheckedChange={() => handleCheckboxChange("maintenance")}
                      />
                      <Label
                        htmlFor="maintenance"
                        className="text-navy-800 cursor-pointer underline hover:text-navy-900"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToServices()
                        }}
                      >
                        A11y Maintenance
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="party"
                        checked={formData.topics.party}
                        onCheckedChange={() => handleCheckboxChange("party")}
                      />
                      <Label
                        htmlFor="party"
                        className="text-navy-800 cursor-pointer underline hover:text-navy-900"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToServices()
                        }}
                      >
                        A11y Party
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="message" className="text-navy-900">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your accessibility needs..."
                    required
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                {/* Error Message */}
                {formError && <p className="text-red-600 text-center font-medium">{formError}</p>}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-navy-800 hover:bg-navy-900 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {isSubmitted && (
                  <p className="text-green-600 text-center font-medium">
                    An Accessibility Practitioner will get in touch with you!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
