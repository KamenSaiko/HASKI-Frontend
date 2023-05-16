import { Course } from '@core'
import { StateCreator } from 'zustand'
import { StoreState } from '@store'
import { getCourses } from '@services'

export default interface CoursesSlice {
  _cache_courses: Course[]
  fetchCourses: (userId: number, lmsUserId: number, studentId: number) => Promise<Course[]>
}

export const createCoursesSlice: StateCreator<StoreState, [], [], CoursesSlice> = (set, get) => ({
  _cache_courses: [],
  fetchCourses: async (...arg) => {
    // Throw if any of arg is undefined, can be catched by the caller
    if (arg.some((a) => a === undefined)) throw new Error('fetchCourses: Missing argument')
    const [userId, lmsUserId, studentId] = arg

    // Check if we have the courses in cache
    const cached = get()._cache_courses
    // TODO
    if (cached.length === 0) {
      // If not, fetch it and cache it
      const courses_response = await getCourses(userId, lmsUserId, studentId)
      set({ _cache_courses: courses_response })
      return courses_response
    }
    if (get()._cache_courses.length === 0) throw new Error('fetchCourses: No courses found')
    return get()._cache_courses
  }
})