import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'
import React from 'react'

export interface SelectionMenu {}

const SelectionMenu: React.FC<SelectionMenu> = () => {
  const { isContextualTranslationMenuOpened, contextualTranslationMenuHtmlRef } = useLayoutManager()

  return (
    <div
      ref={contextualTranslationMenuHtmlRef}
      data-shown={isContextualTranslationMenuOpened}
      className="absolute flex-col bg-[var(--palestar-150)] shadow border max-w-[300px] border-solid border-[var(--palestar-200)] hidden data-[shown='true']:flex rounded "
    >
      {/* Header */}
      <div className="flex flex-col p-1 border-b border-solid border-t-0 border-x-0 border-[var(--palestar-200)]">
        <span className="font-bold text-md">Les Etats-Unis ont présenté</span>

        <span className="text-sm font-medium text-[var(--palestart-text-dimmed)]">
          The USA presented
        </span>
      </div>

      {/* Example */}
      <div className="flex flex-col p-1 gap-1 border-b border-solid border-t-0 border-x-0 border-[var(--palestar-200)]">
        <span className="text-sm">
          Les Etats-Unis ont présenté un document sur la transparence et l'éco-étiquetage.
        </span>
        <span className="text-sm text-[var(--palestart-text-dimmed)]">
          The United States introduced a paper on transparency and eco-labelling.
        </span>
      </div>

      <div className="flex flex-col p-1 gap-1 ">
        <span className="text-sm ">
          Les Etats-Unis ont présenté les analyses environnementales des accords commerciaux qu'ils
          avaient entreprises.
        </span>
        <span className="text-sm text-[var(--palestart-text-dimmed)]">
          The United States made a presentation on environmental reviews of trade agreements it has
          undertaken.
        </span>
      </div>
    </div>
  )
}

export default SelectionMenu
