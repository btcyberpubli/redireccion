import { redirect } from 'next/navigation'

export default function Page({ searchParams }) {
  const whatsappLink = 'https://wa.link/k0h7cv'
  
  // Redirigir inmediatamente
  redirect(whatsappLink)
}
