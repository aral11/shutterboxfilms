import Layout from "@/components/Layout";
import PlaceholderPage from "@/components/PlaceholderPage";
import { BookOpen } from "lucide-react";

export default function Blog() {
  return (
    <Layout>
      <PlaceholderPage 
        title="Chronicles of a Traveler"
        description="Travel diaries, gear reviews for motorcycles and cameras, and guest posts from fellow adventurers and fans."
        icon={BookOpen}
      />
    </Layout>
  );
}
