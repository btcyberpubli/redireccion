import { redirect } from 'next/navigation'

export default function Page({ searchParams }) {
  const whatsappLink = 'https://wa.link/270hkk'
  
  // Redirigir inmediatamente
  redirect(whatsappLink)
}
