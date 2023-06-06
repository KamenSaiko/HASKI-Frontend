import { TopicRequestResponse, TopicsResponse } from '@services'

export const getCourseTopics = async (
  userId: number,
  lmsUserId: number,
  studentId: number
): Promise<TopicRequestResponse> => {
  try {
    const response = await fetch(
      process.env.BACKEND + `/user/${userId}/${lmsUserId}/student/${studentId}/course/2/topic`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const data = await response.json()

    return {
      status: response.status,
      message: response.statusText,
      data: data
    }
  } catch (error) {
    const topicResponse: TopicsResponse = {
      topics: [
        {
          contains_le: false,
          created_at: '2022-04-20T12:34:56Z',
          created_by: 'John Doe',
          id: 0,
          is_topic: true,
          last_updated: null,
          lms_id: 0,
          name: '',
          parent_id: null,
          student_topic: {
            done: false,
            done_at: null,
            id: 0,
            student_id: 0,
            topic_id: 0,
            visits: []
          },
          university: 'HS-KE'
        }
      ]
    }

    return {
      status: 500,
      message: 'server error',
      data: topicResponse
    }
  }
}
