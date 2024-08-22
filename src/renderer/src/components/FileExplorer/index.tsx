import React, { useEffect, useState } from 'react'

import FileExplorerCard from './FileExplorerCard'
import FileExplorerContainer from './FileExplorerContainer'

const FileExplorer: React.FC = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false)

  return (
    <FileExplorerContainer
      onDrop={(evt) => {
        evt.preventDefault()

        if (evt.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
          ;[...evt.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if (item.kind === 'file') {
              const file = item.getAsFile()

              if (!file) return

              console.log(`… file[${i}].name = ${file?.path}`)
            }
          })
        }
      }}
      onDragOver={(evt) => {
        evt.preventDefault()
        setIsDraggingOver(true)
      }}
    >
      <FileExplorerCard
        date="14-07-2024"
        completion={78}
        selected
        preview="Les Etats-Unis ont présenté, vendredi, une proposition d’accord pour un cessez-le-feu à Gaza remaniée. Le mouvement islamiste palestinien a dénoncé, samedi, « l’imposition de diktats américains »."
        title="Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau de Benyamin Nétanyahou"
      />
      <FileExplorerCard
        date="14-07-2024"
        completion={78}
        preview="Les Etats-Unis ont présenté, vendredi, une proposition d’accord pour un cessez-le-feu à Gaza remaniée. Le mouvement islamiste palestinien a dénoncé, samedi, « l’imposition de diktats américains »."
        title="Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau de Benyamin Nétanyahou"
      />
      <FileExplorerCard
        date="14-07-2024"
        completion={78}
        preview="Les Etats-Unis ont présenté, vendredi, une proposition d’accord pour un cessez-le-feu à Gaza remaniée. Le mouvement islamiste palestinien a dénoncé, samedi, « l’imposition de diktats américains »."
        title="Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau de Benyamin Nétanyahou"
      />
      <FileExplorerCard
        date="14-07-2024"
        completion={78}
        preview="Les Etats-Unis ont présenté, vendredi, une proposition d’accord pour un cessez-le-feu à Gaza remaniée. Le mouvement islamiste palestinien a dénoncé, samedi, « l’imposition de diktats américains »."
        title="Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau de Benyamin Nétanyahou"
      />
      <FileExplorerCard
        date="14-07-2024"
        completion={78}
        preview="Les Etats-Unis ont présenté, vendredi, une proposition d’accord pour un cessez-le-feu à Gaza remaniée. Le mouvement islamiste palestinien a dénoncé, samedi, « l’imposition de diktats américains »."
        title="Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau de Benyamin Nétanyahou"
      />
      <FileExplorerCard
        date="14-07-2024"
        completion={78}
        preview="Les Etats-Unis ont présenté, vendredi, une proposition d’accord pour un cessez-le-feu à Gaza remaniée. Le mouvement islamiste palestinien a dénoncé, samedi, « l’imposition de diktats américains »."
        title="Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau de Benyamin Nétanyahou"
      />
      <FileExplorerCard
        date="14-07-2024"
        completion={78}
        preview="Les Etats-Unis ont présenté, vendredi, une proposition d’accord pour un cessez-le-feu à Gaza remaniée. Le mouvement islamiste palestinien a dénoncé, samedi, « l’imposition de diktats américains »."
        title="Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau de Benyamin Nétanyahou"
      />
    </FileExplorerContainer>
  )
}

export default FileExplorer
