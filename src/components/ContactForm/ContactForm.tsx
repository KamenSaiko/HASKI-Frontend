import {
  Button,
  Select,
  TextField,
  Radio,
  Typography,
  RadioGroup,
  Stack,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  Backdrop,
  CircularProgress,
  SelectChangeEvent
} from '@common/components'
import { useTranslation } from 'react-i18next'
import React, { useMemo, useState } from 'react'
import { useContactForm as _useContactForm, useContactFormHookParams, ContactFormHookReturn } from './ContactForm.hooks'
import { FormDataType } from '@services'

export type ContactFormProps = {
  descriptionDefaultValue?: string
  onSubmit?: (content: FormDataType) => void
  isLoading?: boolean
  useContactForm?: (params?: useContactFormHookParams) => ContactFormHookReturn
}
/**
 * ContactForm component.
 *
 * @param props - Props containing the form logic and the form state.
 * @returns {JSX.Element} - The Form component.
 *
 * @remarks
 * This component is accessed by the contact page. It currently can be accessed from the home page.
 * In the future it will get the id of the contact form user.
 * The contact form enables the user to give a reporttopic and a reporttype to the report, which helps to identify the contents of the report early.
 * The user can also give a description of the report, this is also the only required field.
 * The contents of the form will have to be sent to the backend, which is not implemented yet.
 *
 * @category Components
 */
const ContactForm = ({ useContactForm = _useContactForm, ...props }: ContactFormProps) => {
  const [textfieldError, setTextfieldError] = useState(false)
  const [selectError, setSelectError] = useState(false)
  const { t } = useTranslation()

  // ** Get Functions from Hook ** //
  const { submit, setReportType, setReportTopic, setDescription, description, reportTopic, reportType } =
    useContactForm()

  // ** Override Functions if passed as props ** //
  const { onSubmit = submit, isLoading = false } = props

  const reportTypeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setReportType(event.target.value)
  }
  const reportTopicChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>): void => {
    setReportTopic(event.target.value)
  }
  const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setSelectError(!reportTopic)
    setTextfieldError(!description)
    if (reportTopic && description)
      onSubmit({
        report_topic: reportTopic,
        report_type: reportType,
        report_description: description
      })
  }

  const reportTypes = useMemo(() => {
    return t('components.ContactForm.types', {
      returnObjects: true
    }) as [{ value: string; label: string }]
  }, [t])

  const reportTopics = useMemo(() => {
    return t('components.ContactForm.topics', {
      returnObjects: true
    }) as [{ value: string; label: string }]
  }, [t])

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ minWidth: 120 }}>
        <Typography variant="h5" component="h5">
          {t('components.ContactForm.contactform')}
        </Typography>

        <FormControl required>
          <InputLabel id="select_label_contact">{t('topic')}</InputLabel>
          <Select
            name="reporttopic"
            labelId="select_label_contact"
            label={t('topic')}
            required
            onChange={reportTopicChangeHandler}
            value={reportTopic}
            error={selectError}>
            {reportTopics.map((topic) => (
              <MenuItem key={topic.value} value={topic.value}>
                {topic.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{selectError && t('components.ContactForm.errorSelect')}</FormHelperText>
        </FormControl>

        <FormLabel id="radio_contact_label" sx={{ mt: '0.6rem' }}>
          {t('components.ContactForm.reportType')}
        </FormLabel>
        <RadioGroup row name="reporttype" value={reportType} onChange={reportTypeChangeHandler}>
          {reportTypes.map((report) => (
            <FormControlLabel key={report.value} value={report.value} control={<Radio />} label={report.label} />
          ))}
        </RadioGroup>

        <FormControl>
          <TextField
            id="desc_input"
            data-testid="desc_input"
            name="description"
            type="text"
            required
            label={t('components.ContactForm.briefDescription')}
            rows={5}
            maxRows={15}
            value={description}
            onChange={descriptionChangeHandler}
            error={textfieldError}
            helperText={textfieldError ? t('components.ContactForm.error') : ''}
          />

          <Button sx={{ alignSelf: 'end' }} onClick={handleSubmit}>
            {t('components.ContactForm.submit')}
          </Button>
        </FormControl>
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Stack>
    </form>
  )
}

export default ContactForm