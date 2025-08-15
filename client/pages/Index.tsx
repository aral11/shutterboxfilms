import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Mountain, Film, PlayCircle, ArrowRight, MapPin, Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Index() {
  const featuredContent = [
    {
      type: "ride",
      title: "Ladakh Adventure 2024",
      description: "18 days across the Himalayas, capturing breathtaking landscapes and challenging terrains.",
      image: "mountain-landscape",
      stats: { distance: "3,500 km", duration: "18 days", views: "2.1M" },
    },
    {
      type: "film",
      title: "Monsoon Diaries",
      description: "A cinematic journey through Kerala's backwaters during the monsoon season.",
      image: "monsoon-scene",
      stats: { duration: "42 min", format: "4K", views: "850K" },
    },
    {
      type: "blog",
      title: "Gear Guide: Essential Camera Equipment for Adventure Photography",
      description: "Everything you need to capture stunning photos while on the road.",
      image: "camera-gear",
      stats: { readTime: "8 min", published: "Dec 2024", views: "45K" },
    },
  ];

  const achievements = [
    { number: "2.5M+", label: "YouTube Subscribers" },
    { number: "150+", label: "Adventures Documented" },
    { number: "50,000+", label: "Kilometers Traveled" },
    { number: "25+", label: "Countries Explored" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-earth-brown-900 via-earth-brown-800 to-earth-green-900">
          {/* Simulated video background with pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-earth-orange-500/20 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className="bg-earth-orange-500 text-white mb-4 text-sm px-4 py-2">
              Welcome to Shutterbox Films
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Exploring the World,
              <span className="text-earth-orange-400 block">Frame by Frame</span>
            </h1>
            <p className="text-xl sm:text-2xl text-earth-brown-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join Sachin Shetty on an extraordinary journey across continents, capturing the beauty of adventure,
              the thrill of the ride, and the stories that unfold along the way.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-earth-orange-500 hover:bg-earth-orange-600 text-white px-8 py-4 text-lg">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Latest Adventure
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-earth-brown-800 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/about">
                Discover My Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-px h-8 bg-white opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-16 bg-gradient-to-b from-earth-brown-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-earth-brown-800 mb-8">
            The Ride Begins
          </h2>
          <div className="prose prose-lg mx-auto text-earth-brown-700">
            <p className="text-xl leading-relaxed mb-6">
              Welcome to my world of adventure, cinematography, and endless exploration. I'm Sachin Shetty, 
              and for over a decade, I've been documenting journeys that span continents, cultures, and countless miles of open road.
            </p>
            <p className="text-lg leading-relaxed">
              From the snow-capped peaks of the Himalayas to the sun-drenched coastlines of South India, 
              every ride tells a story, every frame captures a moment, and every adventure pushes the boundaries 
              of what's possible when passion meets purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-earth-brown-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-earth-orange-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-earth-brown-200 text-sm sm:text-base">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gradient-to-b from-white to-earth-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-earth-brown-800 mb-4">
              Latest Adventures
            </h2>
            <p className="text-xl text-earth-brown-600 max-w-2xl mx-auto">
              Dive into the most recent journeys, films, and stories from the road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-earth-brown-200">
                <div className="aspect-video bg-gradient-to-br from-earth-brown-200 to-earth-green-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {content.type === "ride" && <Mountain className="h-16 w-16 text-earth-brown-500" />}
                    {content.type === "film" && <Film className="h-16 w-16 text-earth-brown-500" />}
                    {content.type === "blog" && <Camera className="h-16 w-16 text-earth-brown-500" />}
                  </div>
                  <Badge className="absolute top-3 left-3 bg-earth-orange-500 text-white">
                    {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-earth-brown-800 mb-3">
                    {content.title}
                  </h3>
                  <p className="text-earth-brown-600 mb-4 line-clamp-2">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-earth-brown-500 mb-4">
                    <div className="flex items-center space-x-4">
                      {Object.entries(content.stats).map(([key, value], idx) => (
                        <span key={idx} className="flex items-center space-x-1">
                          {key === "views" && <Eye className="h-3 w-3" />}
                          {key === "duration" && <Calendar className="h-3 w-3" />}
                          {key === "distance" && <MapPin className="h-3 w-3" />}
                          <span>{value}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-earth-brown-300 text-earth-brown-700 hover:bg-earth-brown-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-earth-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join the Journey?
          </h2>
          <p className="text-xl mb-8 text-earth-orange-100">
            Subscribe to follow along with the latest adventures, gear reviews, and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-earth-orange-500 hover:bg-earth-orange-50 px-8 py-4"
            >
              Subscribe to YouTube
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-earth-orange-500 px-8 py-4"
              asChild
            >
              <Link to="/community">Join Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
