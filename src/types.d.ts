export type FormDataType = {
  name: string
  adjective: string
  favActivity: string
  hobby: string
  toy: string
  firstWord: string
  emotion: string
  skill: string
  animal: string
  food: string
  trait: string
  job: string
  dessert: string
  pastTime: string
  play: string
  pronoun: string
}

declare global {
  type FormDataType = FormDataType
}
