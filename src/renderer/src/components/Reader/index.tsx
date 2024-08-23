import React, { useState } from 'react'

import Container from './Container'
import ContentContainer from './ContentContainer'
import Header from './Header'

import { AudioWaveform, Cone, Pilcrow } from 'lucide-react'

import IconButton from '../IconButton'
import Paragraph from './Paragraph'
import Word from './Word'
import SelectionMenu from './SelectionMenu'
// import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'
import { useReaderContext } from '@renderer/contexts/ReaderContext'

const Reader: React.FC = () => {
  const { isFocusMode, setIsFocusMode, isParagraphMode, setIsParagraphMode, selectedParagraph } =
    useReaderContext()

  const [title, _] = useState(
    `Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent
    un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau
    de Benyamin Nétanyahou`
  )

  const segmentedParagraphs = [
    'Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau de Benyamin Nétanyahou',
    'Les Etats-Unis ont présenté, vendredi, une proposition d’accord pour un cessez-le-feu à Gaza remaniée. Le mouvement islamiste palestinien a dénoncé, samedi, « l’imposition de diktats américains ».',
    '« Dire qu’on approche d’un accord de trêve est une illusion », a estimé, samedi 17 août, un haut responsable du Hamas, Sami Abou Zouhri, dans une déclaration à l’Agence France-Presse (AFP), dénonçant « l’imposition de diktats américains ». La veille, Washington avait présenté une proposition remaniée d’accord pour un cessez-le-feu à Gaza, après deux jours de négociations au Qatar. La possibilité d’une trêve n’a « jamais été aussi proche », avait alors assuré le président américain, Joe Biden',
    'Deux cadres du mouvement islamiste palestinien avaient déjà déclaré samedi que le Hamas rejetait de « nouvelles conditions » de l’Etat hébreu, notamment le « maintien de troupes » israéliennes le long de la frontière entre Gaza et l’Egypte, ainsi qu’« un droit de veto » sur la libération de certains prisonniers palestiniens.'
  ]

  return (
    <Container>
      <Header>
        <span className="font-medium max-w-[512px] truncate">
          Le point sur la situation au Proche-Orient : les négociateurs israéliens affichent
          un « optimisme prudent » sur la signature d’un accord de trêve, selon le bureau
          de Benyamin Nétanyahou
        </span>

        <div className="flex-1"></div>

        <IconButton
          icon={Cone}
          onClick={() => setIsFocusMode((prev) => !prev)}
          selected={isFocusMode}
        />
        <IconButton icon={AudioWaveform} />
        <IconButton
          icon={Pilcrow}
          onClick={() => setIsParagraphMode((prev) => !prev)}
          selected={isParagraphMode}
        />
      </Header>

      <ContentContainer>
        {isParagraphMode ? null : (
          <h1 className="text-3xl max-w-[700px] font-bold py-3 ">
            {title.split(' ').map((word, idx) => (
              <>
                <Word data-bold key={idx}>
                  {word}
                </Word>{' '}
              </>
            ))}
          </h1>
        )}

        {isParagraphMode ? (
          <div className="flex h-full flex-1 items-center justify-center">
            <Paragraph contents={segmentedParagraphs[selectedParagraph]} />
          </div>
        ) : (
          segmentedParagraphs.map((paragraph, idx) => <Paragraph contents={paragraph} key={idx} />)
        )}
        <SelectionMenu />
      </ContentContainer>
    </Container>
  )
}

export default Reader
