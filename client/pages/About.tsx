import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Mountain,
  Film,
  Award,
  MapPin,
  Calendar,
  Heart,
  Target,
  Globe,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";

export default function About() {
  const timelineEvents = [
    {
      year: "2012",
      title: "First Long Ride",
      description:
        "Completed my first long-distance motorcycle journey from Bangalore to Goa, discovering my passion for adventure riding.",
      type: "ride",
      icon: Mountain,
    },
    {
      year: "2014",
      title: "YouTube Channel Launch",
      description:
        "Started documenting my rides and adventures, creating the foundation of what would become Shutterbox Films.",
      type: "milestone",
      icon: Film,
    },
    {
      year: "2016",
      title: "Himalayan Expedition",
      description:
        "First solo expedition to Ladakh, marking the beginning of my high-altitude adventure filmmaking.",
      type: "ride",
      icon: Mountain,
    },
    {
      year: "2018",
      title: "100K Subscribers",
      description:
        "Reached 100,000 subscribers, establishing a strong community of adventure enthusiasts.",
      type: "milestone",
      icon: Users,
    },
    {
      year: "2020",
      title: "Professional Equipment Upgrade",
      description:
        "Invested in professional-grade cameras and equipment, elevating production quality significantly.",
      type: "equipment",
      icon: Camera,
    },
    {
      year: "2022",
      title: "International Recognition",
      description:
        "Won the Adventure Film Festival award for 'Best Travel Documentary' for Monsoon Diaries.",
      type: "award",
      icon: Award,
    },
    {
      year: "2024",
      title: "Million Milestone",
      description:
        "Crossed 2.5 million subscribers and launched this comprehensive website to better connect with the community.",
      type: "milestone",
      icon: Globe,
    },
  ];

  const philosophyPoints = [
    {
      icon: Heart,
      title: "Passion Over Perfection",
      description:
        "Every journey begins with genuine curiosity and love for exploration, not the pursuit of flawless content.",
    },
    {
      icon: Camera,
      title: "Authentic Storytelling",
      description:
        "Capturing real moments, genuine struggles, and authentic experiences rather than staged perfection.",
    },
    {
      icon: Globe,
      title: "Cultural Connection",
      description:
        "Embracing local cultures, learning from communities, and sharing diverse perspectives from every destination.",
    },
    {
      icon: Target,
      title: "Inspire Responsibly",
      description:
        "Encouraging others to explore while respecting nature, local customs, and sustainable travel practices.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vibrant-blue-700 to-vibrant-blue-800 text-white border-b-4 border-vibrant-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-vibrant-orange-500 text-white mb-4 shadow-lg border-2 border-white/20 rounded-xl">
                The Man Behind the Lens
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-lg brand-script">
                Meet Sachin Shetty
              </h1>
              <p className="text-xl text-vibrant-blue-100 mb-8 leading-relaxed">
                Filmmaker, photographer, adventurer, and storyteller. For over a
                decade, I've been capturing the world's most beautiful
                destinations and sharing the stories that unfold along the way.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="outline"
                  className="border-vibrant-orange-300 text-vibrant-orange-200 border-2 rounded-xl"
                >
                  <Camera className="mr-1 h-3 w-3" />
                  Filmmaker
                </Badge>
                <Badge
                  variant="outline"
                  className="border-vibrant-orange-300 text-vibrant-orange-200 border-2 rounded-xl"
                >
                  <Mountain className="mr-1 h-3 w-3" />
                  Adventurer
                </Badge>
                <Badge
                  variant="outline"
                  className="border-vibrant-orange-300 text-vibrant-orange-200 border-2 rounded-xl"
                >
                  <Film className="mr-1 h-3 w-3" />
                  Content Creator
                </Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-vibrant-orange-400">
                {/* Large Official Shutterbox Films Logo */}
                <div className="relative">
                  <div className="w-32 h-32 border-8 border-black rounded-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-vibrant-blue-800 mb-8 text-center brand-display">
            The Journey So Far
          </h2>
          <div className="prose prose-lg max-w-none text-vibrant-blue-700">
            <p className="text-xl leading-relaxed mb-6">
              Born and raised in Karnataka, India, my love for motorcycles began
              at an early age. What started as weekend rides around the city
              slowly evolved into longer expeditions, and eventually transformed
              into a full-time passion for adventure filmmaking.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My background in engineering taught me the importance of
              preparation and attention to detail—skills that proved invaluable
              when planning complex multi-day expeditions across challenging
              terrains. But it was my innate curiosity about people, places, and
              cultures that truly shaped my approach to storytelling.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Over the years, I've had the privilege of exploring over 25
              countries, documenting everything from the bustling streets of
              Southeast Asian cities to the remote mountain villages of the
              Himalayas. Each journey has taught me something new—not just about
              the world, but about myself and the incredible resilience of the
              human spirit.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Shutterbox Films isn't just about motorcycle
              adventures—it's about inspiring others to step outside their
              comfort zones, embrace uncertainty, and discover the extraordinary
              stories that exist in every corner of our world.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16 bg-gradient-to-b from-earth-green-50 to-earth-brown-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-vibrant-blue-800 mb-4 text-center brand-display">
            Milestones & Adventures
          </h2>
          <p className="text-xl text-vibrant-blue-600 text-center mb-12 max-w-2xl mx-auto">
            A timeline of key moments that have shaped the Shutterbox Films
            journey.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-vibrant-blue-300 hidden md:block rounded-full"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-6 w-6 h-6 bg-vibrant-orange-500 rounded-full items-center justify-center -translate-x-1/2 shadow-lg border-2 border-white">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="md:ml-16 w-full">
                      <Card className="border-vibrant-blue-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl border-2">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-vibrant-orange-100 rounded-xl shadow-md border-2 border-vibrant-orange-200">
                                <Icon className="h-5 w-5 text-vibrant-orange-600" />
                              </div>
                              <div>
                                <CardTitle className="text-vibrant-blue-800 text-lg">
                                  {event.title}
                                </CardTitle>
                                <p className="text-vibrant-blue-600 text-sm font-medium">
                                  {event.year}
                                </p>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className={`rounded-xl border-2 font-medium
                                ${event.type === "ride" ? "border-vibrant-lightBlue-300 text-vibrant-lightBlue-700" : ""}
                                ${event.type === "milestone" ? "border-vibrant-orange-300 text-vibrant-orange-700" : ""}
                                ${event.type === "award" ? "border-vibrant-blue-300 text-vibrant-blue-700" : ""}
                                ${event.type === "equipment" ? "border-vibrant-blue-400 text-vibrant-blue-700" : ""}
                              `}
                            >
                              {event.type}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-vibrant-blue-600">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-vibrant-blue-700 text-white border-y-4 border-vibrant-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 drop-shadow-lg brand-display">
              My Philosophy & Inspirations
            </h2>
            <p className="text-xl text-vibrant-blue-200 max-w-2xl mx-auto">
              The principles and values that guide every adventure and frame
              every story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card
                  key={index}
                  className="bg-vibrant-blue-600 border-vibrant-blue-500 text-white border-2 rounded-2xl shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-vibrant-orange-500 rounded-xl flex-shrink-0 shadow-lg border-2 border-white/20">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white">
                          {point.title}
                        </h3>
                        <p className="text-vibrant-blue-200 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural Background */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-vibrant-blue-800 mb-8 brand-display">
            Roots & Heritage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-vibrant-lightBlue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-vibrant-lightBlue-200">
                <MapPin className="h-8 w-8 text-vibrant-lightBlue-600" />
              </div>
              <h3 className="text-lg font-semibold text-vibrant-blue-800 mb-2">
                Karnataka, India
              </h3>
              <p className="text-vibrant-blue-600">
                Born and raised in the cultural heart of South India, where my
                love for exploration first took root.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vibrant-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-vibrant-orange-200">
                <Globe className="h-8 w-8 text-vibrant-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-vibrant-blue-800 mb-2">
                Global Perspective
              </h3>
              <p className="text-vibrant-blue-600">
                Bringing Indian values of respect, humility, and curiosity to
                every international adventure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vibrant-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-vibrant-blue-200">
                <Heart className="h-8 w-8 text-vibrant-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-vibrant-blue-800 mb-2">
                Community First
              </h3>
              <p className="text-vibrant-blue-600">
                Believing in the power of shared experiences and the importance
                of giving back to the community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
