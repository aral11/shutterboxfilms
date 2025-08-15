import Layout from "@/components/Layout";
import PlaceholderPage from "@/components/PlaceholderPage";
import { Users } from "lucide-react";

export default function Community() {
  return (
    <Layout>
      <PlaceholderPage 
        title="Join the Journey"
        description="Fan submissions, community events, meetups, rides, workshops, and forums for discussing adventures and filmmaking."
        icon={Users}
      />
    </Layout>
  );
}
