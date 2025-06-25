'use client'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { ptBR } from 'react-day-picker/locale'
import './teste/calendar.css'

export default function Calendar() {
  const [selected, setSelected] = useState<Date>()

  return (
    <DayPicker
      animate
      mode="single"
      locale={ptBR}
      navLayout="around"
      selected={selected}
      onSelect={setSelected}
      fixedWeeks
      classNames={{
        selected: `bg-[#363636]/90 border-black rounded-full text-white`,
        chevron: `fill-white`,
      }}
    />
  )
}
