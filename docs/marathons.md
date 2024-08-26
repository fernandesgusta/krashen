## ~Session 1

The main objective is to finish the Command Pallet and all of it's caveats

- [x] @ui-feat: create command pallet (*)
- [ ] @ui-afeat: add search functionality between files on the command pallet

- [ ] @feat: add reverso-integration on the command pallet
  - [x] create a simple API to consume data from reverso context
- [ ] @feat: add larouse integration on the command pallet

### Notes
- [ ] Need to recalculate position of all elements with absolute positioning on resize


### Flashcard Engine

generate(
  is_expr: bool,
  target_i+: number,
  max_i+: number,
  ctx: VocabDictionary,
  target_word: str,
  level: Range<1,3>
  target_lang: SupportedTargetLanguage
  native_lang: SupportedNativeLanguage
): [str, str]

function that generates a flashcard from a word or from an expression in one of three levels

LEVEL 1: Simple Translation (example)

**front**:
Deux cadres du **mouvement** islamist e palestinien avaient déjà déclaré samedi que le Hamas rejetait de « nouvelles conditions »

**back**:
Two Palestinian Islamist cadres had already said on Saturday that Hamas rejected «new conditions»

LEVEL 2: Word Translation + defition
**front**:
Deux cadres du **mouvement** islamist e palestinien avaient déjà déclaré samedi que le Hamas rejetait de « nouvelles conditions »
**back**:
Movement

Level 3: Definition

generate flashcard from word

generate_back()


#### Reverso Integration API

The idea is to create a function called context that when given two languages and a word/expression it

context(
  expression: str,
  native_lang: ReversoContextLang,
  target_lang: ReversoContextLang
) -> ReversoContextLanguagePack


conjugate(verb: str, target_lan: ReversoContextLang) -> ReversoConjugation
- maybe later on

translate(expr: str, target_lang: ReversoContextLang) -> str

ReversoContextLanguagePack: {
  examples: Array<[str, str]>, word_class: str,  translations: Array<str>
}

ReversoContextLang: English | French

#### Larouse Integration API

definition(word: str) -> DictionaryVerbette

DictionaryVerbette {
  word_class: str
  definitions: Array<str> (from most common to least common)
}


