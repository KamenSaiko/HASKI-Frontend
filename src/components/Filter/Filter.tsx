import { useCallback } from 'react'
import { useTranslation } from "react-i18next"
import {
    DefaultBox as Box,
    DefaultCheckbox as Checkbox,
    DefaultChip as Chip,
    DefaultFormControl as FormControl,
    DefaultInputLabel as InputLabel,
    DefaultListItemText as ListItemText,
    DefaultMenuItem as MenuItem,
    DefaultOutlinedInput as OutlinedInput,
    DefaultSelect as Select,
    DefaultSelectChangeEvent as SelectChangeEvent,
    DefaultTypography as Typography
} from "@common/components"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

export const Filter = (props: FilterProps) => {
    const  { t } = useTranslation();

    const handleChange = useCallback((event: SelectChangeEvent<typeof props.selectedTags>) => {
        const {
            target: { value },
        } = event

        value && props.setSelectedTags && props.setSelectedTags((typeof value === 'string') ? value.split(',') : value)
    }, [])

    const renderValue = useCallback((selected: string[]) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
            {selected.map((value: string) => (
                <Chip key={value} label={value} size="small"/>
            ))}
        </Box>
    ), [])

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="glossary-filter-label">
                    <Typography>
                        {
                            t('pages.glossary.filter')
                        }
                    </Typography>
                </InputLabel>
                <Select
                    labelId="glossary-filter-label"
                    id="glossary-filter"
                    multiple
                    value={props.selectedTags}
                    onChange={handleChange}
                    input={<OutlinedInput label={t('pages.glossary.filter')}/>}
                    renderValue={renderValue}
                    MenuProps={MenuProps}
                >
                    {
                        props.tags?.map((tag) => (
                            <MenuItem key={tag} value={tag}>
                                <Checkbox checked={props.selectedTags && (props.selectedTags.indexOf(tag) > -1)}/>
                                <ListItemText primary={tag} />
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}

interface FilterProps {
    tags?: string[]
    selectedTags?: string[]
    setSelectedTags?: (selectedTags: string[]) => void
}