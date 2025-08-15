import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ComponentType<any>;
}

export default function PlaceholderPage({ title, description, icon: Icon = Construction }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-brown-50 to-earth-green-50 px-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="pt-8 pb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-earth-orange-100 rounded-full">
              <Icon className="h-12 w-12 text-earth-orange-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-earth-brown-800 mb-4">{title}</h1>
          <p className="text-earth-brown-600 mb-6">{description}</p>
          <div className="text-sm text-earth-brown-500 bg-earth-brown-50 p-4 rounded-lg border border-earth-brown-200">
            <p className="font-medium mb-2">This page is coming soon!</p>
            <p>Continue prompting to help build out the content for this section of Sachin's website.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
