import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Vistrac-privacy',
  description: 'Our privacy policy',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
