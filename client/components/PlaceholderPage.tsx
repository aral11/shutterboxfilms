import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ComponentType<any>;
}

export default function PlaceholderPage({
  title,
  description,
  icon: Icon = Construction,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-vibrant-blue-50 to-vibrant-lightBlue-50 px-4">
      <Card className="max-w-md w-full text-center shadow-2xl border-vibrant-blue-200 rounded-2xl">
        <CardContent className="pt-8 pb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-lg border-4 border-vibrant-orange-200">
              {/* Official Logo Style for placeholders */}
              <div className="relative">
                <div className="w-12 h-12 border-2 border-black rounded-md flex items-center justify-center">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-vibrant-blue-800 mb-4 brand-script">
            {title}
          </h1>
          <p className="text-vibrant-blue-600 mb-6">{description}</p>
          <div className="text-sm text-vibrant-blue-500 bg-vibrant-blue-50 p-4 rounded-xl border-2 border-vibrant-blue-200">
            <p className="font-medium mb-2">This page is coming soon!</p>
            <p>
              Continue prompting to help build out the content for this section
              of Sachin's website.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
