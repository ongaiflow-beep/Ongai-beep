import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { team, getTeamMember } from "@/lib/data/team";
import ManagementProfileView from "@/components/views/management-profile-view";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return { title: "Profil Manajemen" };
  return {
    title: member.name,
    description: `${member.name} — ${member.role.id}, PT Victory Utama Karya.`,
  };
}

export default async function ManagementProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getTeamMember(slug)) notFound();
  return <ManagementProfileView slug={slug} />;
}
