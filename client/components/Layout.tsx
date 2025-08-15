import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Mountain, Film, BookOpen, Users, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Mountain },
    { name: "About", href: "/about", icon: Camera },
    { name: "Rides", href: "/rides", icon: Mountain },
    { name: "Films", href: "/films", icon: Film },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Community", href: "/community", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-vibrant-blue-700 text-white shadow-xl border-b-4 border-vibrant-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                {/* Official Shutterbox Films Logo - Camera in viewfinder style */}
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-vibrant-blue-300">
                  <div className="relative">
                    {/* Outer frame */}
                    <div className="w-8 h-8 border-2 border-black rounded-sm flex items-center justify-center">
                      {/* Inner circle */}
                      <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-sm brand-script">Shutterbox Films</h1>
                <p className="text-vibrant-orange-200 text-sm">The Journey of Sachin Shetty</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-vibrant-orange-500 text-white shadow-lg scale-105 border-2 border-white/20"
                        : "text-vibrant-orange-100 hover:bg-vibrant-blue-600 hover:text-white hover:scale-105 border-2 border-transparent"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-vibrant-blue-600 rounded-xl border-2 border-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? "bg-vibrant-orange-500 text-white shadow-lg border-2 border-white/20"
                          : "text-vibrant-orange-100 hover:bg-vibrant-blue-600 hover:text-white border-2 border-transparent"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-vibrant-blue-800 text-white border-t-4 border-vibrant-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  {/* Official Shutterbox Films Logo - smaller version */}
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-lg border border-vibrant-blue-300">
                    <div className="relative">
                      {/* Outer frame */}
                      <div className="w-5 h-5 border border-black rounded-sm flex items-center justify-center">
                        {/* Inner circle */}
                        <div className="w-2.5 h-2.5 bg-black rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold brand-script">Shutterbox Films</h3>
                  <p className="text-vibrant-orange-200 text-sm">The Journey of Sachin Shetty</p>
                </div>
              </div>
              <p className="text-vibrant-blue-200 mb-4">
                Exploring the world through the lens of adventure, capturing the beauty of life on two wheels and beyond.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://youtube.com/@shutterboxfilms?si=7h4wZmIo4g7rq_ii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vibrant-orange-300 hover:text-vibrant-orange-500 transition-colors font-medium flex items-center space-x-1"
                >
                  <span>🎬</span><span>YouTube</span>
                </a>
                <a
                  href="https://www.instagram.com/shutterboxfilms_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vibrant-orange-300 hover:text-vibrant-orange-500 transition-colors font-medium flex items-center space-x-1"
                >
                  <span>📸</span><span>Instagram</span>
                </a>
                <a
                  href="https://www.instagram.com/reel/DE37viGNTEN/?igsh=MXMzN2R1d3lrZXQ2Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vibrant-orange-300 hover:text-vibrant-orange-500 transition-colors font-medium flex items-center space-x-1"
                >
                  <span>🎥</span><span>Latest Reel</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-vibrant-blue-200 hover:text-vibrant-orange-300 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                {navigation.slice(4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-vibrant-blue-200 hover:text-vibrant-orange-300 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-vibrant-blue-600 mt-8 pt-8 text-center">
            <p className="text-vibrant-blue-300">
              © 2024 Shutterbox Films. All rights reserved. | Exploring the World, Frame by Frame.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
