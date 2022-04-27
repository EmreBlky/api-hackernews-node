type TFilter = {
  author?: string
  tag?: string
  title?: string
  month?: string
}

type THit = {
  created_at: string
  title: null | string
  url: null | string
  author: string
  points: null | number
  story_text: null | string
  comment_text: string
  num_comments: null | number
  story_id: null | number
  story_title: null | string
  story_url: null | string
  parent_id: null | number
  created_at_i: null | number
  _tags: string[]
  objectID: string
  _highlightResult: {
    author: {
      value: string
      matchLevel: string
      matchedWords: string[]
    }
    comment_text: {
      value: string
      matchLevel: string
      fullyHighlighted: boolean
      matchedWords: string[]
    }
    story_title: {
      value: string
      matchLevel: string
      matchedWords: string[]
    }
    story_url: {
      value: string
      matchLevel: string
      matchedWords: string[]
    }
  }
}
