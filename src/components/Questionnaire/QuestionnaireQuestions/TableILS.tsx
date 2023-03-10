import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';
import {useTranslation} from 'react-i18next';
import MobileStepper from '@mui/material/MobileStepper';
import {Box, FormControlLabel, Radio, RadioGroup, Stack, Typography, useTheme} from "@mui/material";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {DefaultButton as Button} from "@common/components";
import {useState} from "react";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {styled} from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(200,205,219,0.25)',
    },
}));

const StyledTableRowQuestion = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: 'rgba(36,38,42,0.65)',
    },
}));

export const TableILS = () => {

    const {t} = useTranslation();


    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = [
        {
            label: "Step 1",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 2",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 3",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 4",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 5",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 6",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 7",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 8",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 9",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 10",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        },
        {
            label: "Step 11",
            question1: t("Ich verstehe etwas besser nachdem ich..."),
            answer1_1: t("... es ausprobiert habe."),
            answer1_2: t("... darüber nachgedacht habe."),

            question2: t("Ich möchte lieber wahrgenommen werden als..."),
            answer2_1: t("... realistisch."),
            answer2_2: t("... innovativ."),

            question3: t("Wenn ich daran denke, was ich gestern gemacht habe, fallen mir eher..."),
            answer3_1: t("... Bilder ein."),
            answer3_2: t("... Wörter ein."),

            question4: t("Ich neige dazu..."),
            answer4_1: t("... die Details eines Themas zu verstehen, aber die Gesamtstruktur nicht ganz zu erfassen."),
            answer4_2: t("... die Gesamtstruktur zu verstehen, aber die Details nicht ganz zu erfassen.")
        }
    ];

    return (
        <Box>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
            >
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <MobileStepper
                        variant="progress"
                        steps={11}
                        position="static"
                        activeStep={activeStep}
                        sx={{maxWidth: '50%', flexGrow: 1, align: "center"}}
                        nextButton={
                            <Button variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    data-testid="nextButton"
                                    disabled={activeStep === 10}>
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft/>
                                ) : (
                                    <KeyboardArrowRight/>
                                )}
                            </Button>
                        }

                        backButton={
                            <Button variant="contained"
                                    color="primary"
                                    onClick={handleBack}
                                    data-testid="backButton"
                                    disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight/>
                                ) : (
                                    <KeyboardArrowLeft/>
                                )}
                                Back
                            </Button>
                        }
                    />
                </Stack>
                <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <TableContainer component={Paper} style={{maxWidth: '51%'}}>
                        <Table style={{minWidth: '300px'}}>
                            <TableBody key={"TableILSBody"}>
                                <TableRow>
                                    <StyledTableRowQuestion align="left"
                                                            style={{color: "white"}}><Typography
                                        variant={"h5"}>{steps[activeStep].question1}</Typography></StyledTableRowQuestion>
                                </TableRow>
                                <RadioGroup
                                    defaultValue={steps[activeStep].answer1_1}
                                    name="radio-buttons-group"
                                >
                                    <StyledTableRow><FormControlLabel value={steps[activeStep].answer1_1} control={<Radio/>}
                                                                      label={<Typography
                                                                          variant={"h6"}>{steps[activeStep].answer1_1}</Typography>}/></StyledTableRow>
                                    <StyledTableRow><FormControlLabel value={steps[activeStep].answer1_2} control={<Radio/>}
                                                                      label={<Typography
                                                                          variant={"h6"}>{steps[activeStep].answer1_2}</Typography>}/></StyledTableRow>
                                </RadioGroup>
                                <TableRow>
                                    <StyledTableRowQuestion align="left"
                                                            style={{color: "white"}}><Typography
                                        variant={"h5"}>{steps[activeStep].question2}</Typography></StyledTableRowQuestion>
                                </TableRow>
                                <RadioGroup
                                    defaultValue={steps[activeStep].answer2_1}
                                    name="radio-buttons-group"
                                >
                                    <StyledTableRow><FormControlLabel value={steps[activeStep].answer2_1} control={<Radio/>}
                                                                      label={<Typography
                                                                          variant={"h6"}>{steps[activeStep].answer2_1}</Typography>}/></StyledTableRow>
                                    <StyledTableRow><FormControlLabel value={steps[activeStep].answer2_2} control={<Radio/>}
                                                                      label={<Typography
                                                                          variant={"h6"}>{steps[activeStep].answer2_2}</Typography>}/></StyledTableRow>
                                </RadioGroup>
                                <TableRow>
                                    <StyledTableRowQuestion align="left"
                                                            style={{color: "white"}}><Typography
                                        variant={"h5"}>{steps[activeStep].question3}</Typography></StyledTableRowQuestion>
                                </TableRow>
                                <RadioGroup
                                    defaultValue={steps[activeStep].answer3_1}
                                    name="radio-buttons-group"
                                >
                                    <StyledTableRow><FormControlLabel value={steps[activeStep].answer3_1} control={<Radio/>}
                                                                      label={<Typography
                                                                          variant={"h6"}>{steps[activeStep].answer3_1}</Typography>}/></StyledTableRow>
                                    <StyledTableRow><FormControlLabel value={steps[activeStep].answer3_2} control={<Radio/>}
                                                                      label={<Typography
                                                                          variant={"h6"}>{steps[activeStep].answer3_2}</Typography>}/></StyledTableRow>
                                </RadioGroup>
                                <TableRow>
                                    <StyledTableRowQuestion align="left"
                                                            style={{color: "white"}}><Typography
                                        variant={"h5"}>{steps[activeStep].question4}</Typography></StyledTableRowQuestion>
                                </TableRow>
                                <RadioGroup
                                    defaultValue={steps[activeStep].answer4_1}
                                    name="radio-buttons-group"
                                >
                                    <StyledTableRow><FormControlLabel value={steps[activeStep].answer4_1} control={<Radio/>}
                                                                      label={<Typography
                                                                          variant={"h6"}>{steps[activeStep].answer4_1}</Typography>}/></StyledTableRow>
                                    <StyledTableRow><FormControlLabel value={steps[activeStep].answer4_2} control={<Radio/>}
                                                                      label={<Typography
                                                                          variant={"h6"}>{steps[activeStep].answer4_2}</Typography>}/></StyledTableRow>
                                </RadioGroup>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <>
                        <Stack
                            direction="column"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            {activeStep === 0 ? (
                                <div data-testid={"ActiveStepILS"}>
                                    <Button variant="contained"
                                            endIcon={<SendIcon/>}
                                            color="primary"
                                            data-testid="resetButton"
                                            sx={{m: 2}}>
                                        {t("Send")}
                                    </Button>
                                </div>) : undefined}
                        </Stack>
                    </>
                </Stack>
            </Stack>
        </Box>
    )
};