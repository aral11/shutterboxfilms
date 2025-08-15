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
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2Fbfe54d7d91b748dfbe2b06f5b946fc17?format=webp&width=1920"
            alt="Sachin Shetty - Mountain Adventure"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-vibrant-blue-900/40 via-transparent to-vibrant-blue-900/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className="bg-vibrant-orange-500 text-white mb-4 text-sm px-4 py-2 shadow-lg border-2 border-white/20 rounded-xl animate-pulse">
              🎬 Welcome to Shutterbox Films
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Adventure Awaits,
              <span className="text-vibrant-orange-400 block brand-script">Every Frame Tells a Story</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              🏔️ From mountain peaks to forest trails, 🏍️ motorcycle adventures to 📸 cinematic storytelling -
              Experience the world through Sachin Shetty's lens of endless exploration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg shadow-xl border-2 border-white/20 transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://youtu.be/chZwdiY66vg?si=5AP79LVZnhXYkb6v', '_blank')}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              🎥 Watch on YouTube
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-xl border-2 border-white/20 transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://www.instagram.com/shutterboxfilms_official/', '_blank')}
            >
              <Camera className="mr-2 h-5 w-5" />
              📸 Follow on Instagram
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-vibrant-blue-800 px-8 py-4 text-lg shadow-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link to="/about">
                🌟 Discover My Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 drop-shadow">⬇️ Scroll to explore amazing adventures</span>
              <div className="w-px h-8 bg-white opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-16 bg-gradient-to-b from-vibrant-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-vibrant-blue-800 mb-8 brand-display">
            The Ride Begins
          </h2>
          <div className="prose prose-lg mx-auto text-vibrant-blue-700">
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

      {/* Photo Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-vibrant-blue-800 mb-4 brand-display">
              🌍 Adventures in Every Frame
            </h2>
            <p className="text-xl text-vibrant-blue-600 max-w-2xl mx-auto">
              From tropical beaches to snowy mountains, every adventure brings new stories to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portrait Photo */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2Fd678bf8037904c0f8bc01755fd1c7333?format=webp&width=600"
                alt="Sachin Shetty Portrait"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">🌴 Tropical Vibes</h3>
                  <p className="text-sm">Style meets adventure</p>
                </div>
              </div>
            </div>

            {/* Camping Adventure */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2F755c843cb17f476d971a5c47ba580a10?format=webp&width=600"
                alt="Camping Adventure"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">🏕️ Wilderness Camping</h3>
                  <p className="text-sm">Off-road adventures</p>
                </div>
              </div>
            </div>

            {/* Motorcycle Adventure */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2F1b1ef2b9e59d42f8a39f1a3ded4f41bc?format=webp&width=600"
                alt="Forest Motorcycle Adventure"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">🏍️ Forest Trails</h3>
                  <p className="text-sm">Deep wilderness exploration</p>
                </div>
              </div>
            </div>

            {/* Road Adventure */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2F0bbf7a8d2a02434ebb52bf75d6b88c5e?format=webp&width=600"
                alt="Adventure Touring"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">🛣️ Epic Journeys</h3>
                  <p className="text-sm">Miles of open road</p>
                </div>
              </div>
            </div>

            {/* Fun Character */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2F85e02b6c13464d67a678a8971cd7e39f?format=webp&width=600"
                alt="Fun Character Adventures"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">🎭 Creative Content</h3>
                  <p className="text-sm">Bringing characters to life</p>
                </div>
              </div>
            </div>

            {/* Mountain Adventure (smaller size to fit) */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff852809020e04a21be00df828dab13d1%2Fbfe54d7d91b748dfbe2b06f5b946fc17?format=webp&width=600"
                alt="Mountain Winter Adventure"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">❄️ Mountain Peaks</h3>
                  <p className="text-sm">High altitude adventures</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://www.instagram.com/shutterboxfilms_official/', '_blank')}
            >
              📱 See More Adventures on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-vibrant-blue-700 text-white border-y-4 border-vibrant-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 brand-display">🏆 Adventure Milestones</h2>
            <p className="text-vibrant-blue-200">Numbers that tell the story of endless exploration</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-vibrant-orange-400 mb-2 drop-shadow-lg animate-pulse">
                  {achievement.number}
                </div>
                <div className="text-vibrant-blue-200 text-sm sm:text-base font-medium">
                  {achievement.label}
                </div>
                {index === 0 && <div className="text-xs text-vibrant-orange-300 mt-1">🎬 And growing!</div>}
                {index === 1 && <div className="text-xs text-vibrant-orange-300 mt-1">🗺️ Epic journeys</div>}
                {index === 2 && <div className="text-xs text-vibrant-orange-300 mt-1">🏍️ Miles of memories</div>}
                {index === 3 && <div className="text-xs text-vibrant-orange-300 mt-1">🌍 Cultures explored</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gradient-to-b from-white to-vibrant-lightBlue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-vibrant-blue-800 mb-4 brand-display">
              🎥 Latest Adventures
            </h2>
            <p className="text-xl text-vibrant-blue-600 max-w-2xl mx-auto">
              🗺️ Dive into the most recent journeys, 🎬 films, and 📖 stories from the road.
            </p>
            <div className="mt-4">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://youtu.be/9yCNpiFdnrg?si=KbyH3Xar7qzllFNu', '_blank')}
              >
                🎬 Watch Latest Video
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-vibrant-blue-200 hover:scale-105 hover:rotate-1 rounded-2xl cursor-pointer transform">
                <div className="aspect-video bg-gradient-to-br from-vibrant-blue-200 to-vibrant-lightBlue-200 relative group">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {content.type === "ride" && <Mountain className="h-16 w-16 text-vibrant-blue-600" />}
                    {content.type === "film" && <Film className="h-16 w-16 text-vibrant-blue-600" />}
                    {content.type === "blog" && <Camera className="h-16 w-16 text-vibrant-blue-600" />}
                  </div>
                  <Badge className="absolute top-3 left-3 bg-vibrant-orange-500 text-white shadow-lg border-2 border-white/30 rounded-xl animate-bounce">
                    {content.type === "ride" && "🏍️"} {content.type === "film" && "🎬"} {content.type === "blog" && "📝"} {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-vibrant-blue-800 mb-3">
                    {content.title}
                  </h3>
                  <p className="text-vibrant-blue-600 mb-4 line-clamp-2">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-vibrant-blue-500 mb-4">
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
                  <Button variant="outline" className="w-full border-vibrant-blue-300 text-vibrant-blue-700 hover:bg-vibrant-blue-50 rounded-xl border-2">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-vibrant-orange-500 text-white border-t-4 border-vibrant-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-lg brand-display">
            🚀 Ready to Join the Journey?
          </h2>
          <p className="text-xl mb-8 text-vibrant-orange-100">
            🔔 Subscribe for epic adventures, 🛠️ gear reviews, and 🎬 behind-the-scenes content from every ride!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 shadow-xl border-2 border-white/20 rounded-xl font-bold transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://youtube.com/@shutterboxfilms?si=7h4wZmIo4g7rq_ii', '_blank')}
            >
              🎬 Subscribe on YouTube
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 shadow-xl border-2 border-white/20 rounded-xl font-bold transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://www.instagram.com/shutterboxfilms_official/', '_blank')}
            >
              📸 Follow on Instagram
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-vibrant-orange-500 px-8 py-4 shadow-xl rounded-xl font-bold transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://www.instagram.com/reel/DE37viGNTEN/?igsh=MXMzN2R1d3lrZXQ2Mg==', '_blank')}
            >
              🎥 Watch Latest Reel
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
