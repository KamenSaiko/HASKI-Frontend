type TopicLearningElements = {
  position: number
  learning_element: LearningElement
}

export type LearningElement = {
  id: number
  lms_id: number
  activity_type: string
  classification: string
  name: string
  done: boolean
  done_at: string
  nr_of_visits: number
  last_visit: string
  time_spend: number
  is_recommended: boolean
}

export default TopicLearningElements
