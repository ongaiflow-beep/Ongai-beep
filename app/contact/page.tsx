import type { Metadata } from "next";
import ContactView from "@/components/views/contact-view";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi PT Victory Utama Karya. Diskusikan kebutuhan konstruksi Anda dengan tim kami di Jakarta — industri, sipil, dan ketenagalistrikan.",
};

export default function ContactPage() {
  return <ContactView />;
}
