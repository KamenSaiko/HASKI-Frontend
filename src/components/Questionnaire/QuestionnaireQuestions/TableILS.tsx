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
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router-dom";

const StyledTableCellQuestion = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: 'rgba(36,38,42,0.65)',
    },
}));

const styleButtonClose = {
    position: 'absolute',
    left: '75.5%',
    top: '1%',
    p: 2,
}


export const TableILS = () => {

    const {t} = useTranslation();

    const navigate = useNavigate();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onClickClose = () => {
        if(window.confirm("Do you really want to cancel the Questionnaire?")) {
            navigate('/');
        }
    }

    const steps = [
        {
            label: "Step 1",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-1"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-1.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-1.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-2"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-2.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-2.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-3"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-3.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-3.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-4"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-4.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-4.2")
        },
        {
            label: "Step 2",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-5"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-5.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-5.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-6"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-6.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-6.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-7"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-7.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-7.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-8"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-8.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-8.2")
        },
        {
            label: "Step 3",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-9"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-9.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-9.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-10"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-10.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-10.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-11"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-11.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-11.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-12"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-12.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-12.2")
        },
        {
            label: "Step 4",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-13"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-13.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-13.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-14"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-14.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-14.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-15"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-15.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-15.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-16"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-16.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-16.2")
        },
        {
            label: "Step 5",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-17"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-17.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-17.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-18"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-18.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-18.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-19"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-19.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-19.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-20"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-20.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-20.2")
        },
        {
            label: "Step 6",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-21"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-21.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-21.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-22"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-22.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-22.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-23"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-23.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-23.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-24"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-24.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-24.2")
        },
        {
            label: "Step 7",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-25"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-25.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-25.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-26"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-26.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-26.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-27"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-27.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-27.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-28"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-28.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-28.2")
        },
        {
            label: "Step 8",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-29"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-29.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-29.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-30"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-30.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-30.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-31"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-31.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-31.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-32"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-32.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-32.2")
        },
        {
            label: "Step 9",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-33"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-33.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-33.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-34"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-34.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-34.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-35"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-35.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-35.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-36"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-36.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-36.2")
        },
        {
            label: "Step 10",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-37"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-37.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-37.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-38"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-38.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-38.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-39"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-39.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-39.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-40"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-40.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-40.2")
        },
        {
            label: "Step 11",
            question1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-41"),
            answer1_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-41.1"),
            answer1_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-41.2"),

            question2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-42"),
            answer2_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-42.1"),
            answer2_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-42.2"),

            question3: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-43"),
            answer3_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-43.1"),
            answer3_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-43.2"),

            question4: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Question-44"),
            answer4_1: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-44.1"),
            answer4_2: t("components.Questionnaire.QuestionnaireQuestions.TableILS.Answer-44.2")
        }
    ];

    return (
        <Box>
            <IconButton color="primary" sx={styleButtonClose} onClick={onClickClose} data-testid={"QuestionnaireResultsCloseButton"}>
                <CloseIcon/>
            </IconButton>
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
                                    <StyledTableCellQuestion align="left"
                                                             style={{color: theme.palette.common.white}}><Typography
                                        variant={"h5"}>{steps[activeStep].question1}</Typography></StyledTableCellQuestion>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <RadioGroup
                                            defaultValue=""
                                            name="Question1-radio-buttons-group"
                                        >
                                            <FormControlLabel value={steps[activeStep].answer1_1} control={<Radio/>}
                                                              label={<Typography
                                                                  variant={"h6"}>{steps[activeStep].answer1_1}</Typography>}/>
                                            <FormControlLabel value={steps[activeStep].answer1_2} control={<Radio/>}
                                                              label={<Typography
                                                                  variant={"h6"}>{steps[activeStep].answer1_2}</Typography>}/>
                                        </RadioGroup>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <StyledTableCellQuestion align="left"
                                                             style={{color: theme.palette.common.white}}><Typography
                                        variant={"h5"}>{steps[activeStep].question2}</Typography></StyledTableCellQuestion>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <RadioGroup
                                            defaultValue=""
                                            name="Question1-radio-buttons-group"
                                        >
                                            <FormControlLabel value={steps[activeStep].answer2_1} control={<Radio/>}
                                                              label={<Typography
                                                                  variant={"h6"}>{steps[activeStep].answer2_1}</Typography>}/>
                                            <FormControlLabel value={steps[activeStep].answer2_2} control={<Radio/>}
                                                              label={<Typography
                                                                  variant={"h6"}>{steps[activeStep].answer2_2}</Typography>}/>
                                        </RadioGroup>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <StyledTableCellQuestion align="left"
                                                             style={{color: theme.palette.common.white}}><Typography
                                        variant={"h5"}>{steps[activeStep].question3}</Typography></StyledTableCellQuestion>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <RadioGroup
                                            defaultValue=""
                                            name="Question1-radio-buttons-group"
                                        >
                                            <FormControlLabel value={steps[activeStep].answer3_1} control={<Radio/>}
                                                              label={<Typography
                                                                  variant={"h6"}>{steps[activeStep].answer3_1}</Typography>}/>
                                            <FormControlLabel value={steps[activeStep].answer3_2} control={<Radio/>}
                                                              label={<Typography
                                                                  variant={"h6"}>{steps[activeStep].answer3_2}</Typography>}/>
                                        </RadioGroup>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <StyledTableCellQuestion align="left"
                                                             style={{color: theme.palette.common.white}}><Typography
                                        variant={"h5"}>{steps[activeStep].question4}</Typography></StyledTableCellQuestion>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <RadioGroup
                                            defaultValue=""
                                            name="Question1-radio-buttons-group"
                                        >
                                            <FormControlLabel value={steps[activeStep].answer4_1} control={<Radio/>}
                                                              label={<Typography
                                                                  variant={"h6"}>{steps[activeStep].answer4_1}</Typography>}/>
                                            <FormControlLabel value={steps[activeStep].answer4_2} control={<Radio/>}
                                                              label={<Typography
                                                                  variant={"h6"}>{steps[activeStep].answer4_2}</Typography>}/>
                                        </RadioGroup>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <>
                        <Stack
                            direction="column"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            {activeStep === 10 ? (
                                <div data-testid={"ActiveStepILS"}>
                                    <Button variant="contained"
                                            endIcon={<SendIcon/>}
                                            color="primary"
                                            data-testid="sendButton"
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