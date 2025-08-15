import Layout from "@/components/Layout";
import PlaceholderPage from "@/components/PlaceholderPage";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <PlaceholderPage
        title="Get in Touch"
        description="Contact form for inquiries and collaborations, social media links, and newsletter signup to stay updated with adventures."
        icon={Mail}
      />
    </Layout>
  );
}
