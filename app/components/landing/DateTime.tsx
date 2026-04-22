'use client'
import { useEffect, useState } from 'react'

export default function DateTime({ className }: { className?: string }) {
  const [date, setDate] = useState('')
  const [clock, setClock] = useState('')

  useEffect(() => {
    const format = () => {
      const now = new Date()
      setDate(now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZone: 'Asia/Manila',
      }))
      setClock(now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Manila',
      }))
    }

    format()
    const interval = setInterval(format, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span data-cursor="current time for me" className={`flex items-center gap-2 ${className}`}>
      <span>{date}</span>
      <span className="flex justify-end w-15">{clock}</span>
    </span>
  )
}