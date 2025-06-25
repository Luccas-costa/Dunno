import React from 'react'

import fonts from '@/styles/globals/fonts.module.css'
import CardGoals from '@/components/ui/card-goals'
import Title from '@/components/ui/title'
import Calendar from '@/components/ui/calendar'

export default function IndexMobile() {
  const [numbersGoals] = React.useState(3)
  return (
    <div className={`${fonts.monserrat} min-h-screen bg-cinza px-3`}>
      <div className="flex h-[60px] items-center justify-center px-3 text-2xl font-extrabold text-white">
        Dunno
      </div>

      <Title className="mb-8">Metas diárias</Title>

      <div className="flex flex-col gap-3">
        <CardGoals
          taskName="Ir 12x no jiu-jitsu no mês"
          taskMissing={8}
          taskIcon="jiu"
          taskColor="#a5b4fc"
        />
        <CardGoals
          taskName="Estudar 30x no mês"
          taskMissing={8}
          taskIcon="study"
          taskColor="#10b981"
        />
        <CardGoals
          taskName="Fazer 1 ingles na semana"
          taskMissing={8}
          taskIcon="english"
          taskColor="#eab308"
        />

        {numbersGoals > 3 && (
          <div className="cursor-pointer text-center text-lg text-[#838383]/80 underline">
            ver mais
          </div>
        )}
      </div>

      <Title className="mb-6 mt-8">Calendario de metas</Title>

      <Calendar />
    </div>
  )
}
