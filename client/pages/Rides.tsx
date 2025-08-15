import Layout from "@/components/Layout";
import PlaceholderPage from "@/components/PlaceholderPage";
import { Mountain } from "lucide-react";

export default function Rides() {
  return (
    <Layout>
      <PlaceholderPage
        title="On the Road"
        description="Interactive maps, photo galleries, and detailed ride logs from motorcycle journeys across continents. Adventure awaits!"
        icon={Mountain}
      />
    </Layout>
  );
}
