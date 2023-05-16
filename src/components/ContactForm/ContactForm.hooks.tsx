import { useState } from 'react'

export type useContactFormHookParams = {
  defaultReportType?: string
  defaultReportTopic?: string
  defaultDescription?: string
}

export type ContactFormHookReturn = {
  readonly reportType: string
  readonly reportTopic: string
  readonly description: string
  readonly setReportType: (reportType: string) => void
  readonly setReportTopic: (reportTopic: string) => void
  readonly setDescription: (description: string) => void
  readonly submit: () => void
}
/**
 * Hook for the ContactForm logic. Handles reporttype, reporttopic and description state which sets the input for the textfields and
 * provides function to submit the form.
 * @param params - The default values for the form.
 * @returns {ContactFormHookReturn} - The form logic.
 */
export const useContactForm = (params?: useContactFormHookParams): ContactFormHookReturn => {
  const { defaultReportType = '', defaultReportTopic = '', defaultDescription = '' } = params || {}
  const [reportType, setReportType] = useState(defaultReportType)
  const [reportTopic, setReportTopic] = useState(defaultReportTopic)
  const [description, setDescription] = useState(defaultDescription)

  interface FormDataType {
    reporttype: string
    reporttopic: string
    description: string
  }
  const responseBody: FormDataType = { reporttype: '', reporttopic: '', description: '0' }

  // ** Logic **//
  const submit = () => {
    responseBody.reporttype = reportType
    responseBody.reporttopic = reportTopic
    responseBody.description = description
  }

  return {
    reportType,
    reportTopic,
    description,
    setReportType,
    setReportTopic,
    setDescription,
    submit
  } as const
}
