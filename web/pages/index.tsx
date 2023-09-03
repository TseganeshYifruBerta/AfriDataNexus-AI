import Image from 'next/image'
import { Inter } from 'next/font/google'
import Index from '@/component/Chat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Index />
    </div>
  )
}
