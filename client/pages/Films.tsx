import Layout from "@/components/Layout";
import PlaceholderPage from "@/components/PlaceholderPage";
import { Film } from "lucide-react";

export default function Films() {
  return (
    <Layout>
      <PlaceholderPage 
        title="Through the Lens"
        description="Portfolio of cinematography work, short films, documentaries, behind-the-scenes content, and awards & recognition."
        icon={Film}
      />
    </Layout>
  );
}
