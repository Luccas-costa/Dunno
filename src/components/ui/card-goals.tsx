'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Check, BookOpen, Translate } from '@phosphor-icons/react/dist/ssr'

interface CardGoalsProps {
  taskName: string
  taskMissing: number
  taskIcon: string
  taskColor?: string
}

export default function CardGoals({
  taskName,
  taskMissing,
  taskIcon,
  taskColor,
}: CardGoalsProps) {
  const [completedGoals, setCompletedGoals] = useState(false)
  const [iconSize, setIconSize] = useState(35)

  // Atualiza o tamanho dos ícones com base na largura da tela
  useEffect(() => {
    function handleResize() {
      setIconSize(window.innerWidth < 450 ? 30 : 35)
    }

    handleResize() // define logo ao montar
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="mx-auto h-[60px] w-full px-1 screen450:h-[90px] screen450:px-2">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-[50px] items-center justify-center rounded-xl bg-[#363636]/90 screen450:size-[70px]">
            {taskIcon === 'jiu' && (
              <Image
                src="/assets/kimono.png"
                alt="medal"
                width={iconSize}
                height={iconSize}
              />
            )}
            {taskIcon === 'study' && (
              <BookOpen
                size={iconSize}
                weight="regular"
                className="opacity-[0.8]"
              />
            )}
            {taskIcon === 'english' && (
              <Translate
                size={iconSize}
                weight="regular"
                className="opacity-[0.8]"
              />
            )}
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-medium screen450:text-xl">
              {taskName}
            </div>
            <div className="text-[#838383] screen450:text-lg">
              Ainda faltam {taskMissing.toString()} jiu-jitsu
            </div>
          </div>
        </div>
        <div
          className={`${completedGoals && 'bg-[#4D4D4D]'} flex size-[24px] cursor-pointer items-center justify-center rounded-lg border-2 border-[#4D4D4D] transition-all duration-300 hover:bg-[#4D4D4D] screen450:size-[32px]`}
          onClick={() => setCompletedGoals(!completedGoals)}
        >
          {completedGoals && (
            <Check size={18} weight="bold" color={taskColor} />
          )}
        </div>
      </div>
    </div>
  )
}
