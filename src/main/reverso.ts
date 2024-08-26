import https from 'https'
import cheerio from 'cheerio'

export enum ReversoSupportedLanguages {
  FRENCH = 'french',
  ENGLISH = 'english',
  PORTUGUESE = 'portuguese'
}

export type ReversoResponse = {
  examples: Array<[string, string]>
  word_class: Array<string>
  translations: Array<string>
  // expression_translation: Array<string> // [expression in the target language, translated expression]
}

export const BASE_URL = 'https://context.reverso.net'

export function generate_reverso_url(
  native_lang: string,
  target_lang: string,
  expression: string
): string {
  const url = `${BASE_URL}/translation/${target_lang}-${native_lang}/${expression}`

  return encodeURI(url)
}

/// Make a request using the NODEJS API and return the raw HTML response as a string
/// não funciona para todos os casos (PAIA)
export async function request(url: string): Promise<string> {
  const promise = new Promise<string>((resolve, reject) => {
    https.get(
      url,
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
        },
        method: 'GET'
      },
      (response) => {
        response.setEncoding('utf-8')
        console.log(response.statusCode)
        const raw_data = []

        response.on('data', (chunck) => raw_data.push(chunck as never))

        response.on('error', (err) => reject(err))

        response.on('end', () => {
          resolve(raw_data.concat().toString())
        })
      }
    )
  })

  return promise
}

export async function context(
  expression: string,
  native_lang: ReversoSupportedLanguages,
  target_lang: ReversoSupportedLanguages
): Promise<ReversoResponse> {
  // get the page passing the parameters
  // parse the html response

  const url = generate_reverso_url(native_lang, target_lang, expression)

  // const HTML = await request(url)

  const response = await fetch(url, {
    headers: {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
    }
  })

  const html = await response.text()
  const dom = cheerio.load(html)

  // get and parse examples from reverso context
  const examples: Array<[string, string]> = []

  dom('.example').map((_, element) => {
    examples.push([
      dom(element).find('.src').find('.text').text(),
      dom(element).find('.trg').find('.text').text()
    ])
  })

  const parsedExamples: Array<[string, string]> = examples.map((example) => {
    return [
      example[0].replace('\n', '').replace('"', '').trimStart(),
      example[1].replace('\n', '').replace('"', '').trimStart()
    ]
  })

  // get word class
  const word_classes: Array<string> = []
  dom('#pos-filters')
    .find('button')
    .map((_, element) => word_classes.push(dom(element).text()))

  /*
    TODO: solve the problem withthe translation not appearing (apparently the translation do not come with the request)
    it seems the page still needs to make another request to the Reverso Context Server to get the translation
    talvez fazer um fallback para um serviço de tradução ou sei lá.
  */

  // get all specific translation (if exists)
  // const translationBox = dom('#mt-box')

  // // get all posible trasnlations if they exist

  // console.log(translationBox.html())
  // console.log(url)

  // const specific_translation = [
  //   // source_trasnlation
  //   dom(translationBox.find('.content').find('span')[0]).text(),
  //   //target_translation
  //   dom(translationBox.find('.content').find('span')[1]).text()
  // ]

  let translations: Array<string> = []

  // get all translations (if a word or small expression and idiomatic phrase)
  dom('.translation').map((_, element) => translations.push(dom(element).text()))

  translations = translations.map((translation) => translation.replace('\n', '').trimStart())
  translations = translations.slice(1, translations.length - 1)

  return {
    examples: parsedExamples,
    word_class: word_classes,
    // expression_translation: specific_translation,
    translations: translations
  }
}
