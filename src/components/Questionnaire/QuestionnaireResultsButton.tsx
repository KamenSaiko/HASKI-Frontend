import * as React from 'react';
import Box from '@mui/material/Box';
import {DefaultButton as Button} from "@common/components";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Modal from '@mui/material/Modal';
import {TableILS} from './TableILS';
import {TableListK, GraphILS, GraphListK, ResultDescriptionILS, ResultDescriptionListK} from "@components";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Stack} from "@mui/material";
import {useTranslation} from "react-i18next";



const styleButtonClose = {
    position: 'relative',
    left: '98%',
    bottom: '20px',
}

const styleBox = {
    position: 'absolute',
    left: '10%',
    top: '5%',
    overflow: 'auto',
    height: '83%',
    width: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const styleButtonNext = {

}

const styleButtonBack = {

}

export function QuestionnaireResultsButton() {
    const {t} = useTranslation();

    const steps = [t("components.QuestionnaireResults.ResultDescriptionILS.ILSResults"), t("components.QuestionnaireResults.ResultDescriptionILS.ListKResults")];
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);

    const handleBack = () => {
        setActiveStep(activeStep === 1 ? activeStep - 1 : activeStep);
    };

    const handleNext = () => {
        setActiveStep(activeStep === 0 ? activeStep + 1 : activeStep);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained"
                    color="primary"
                    onClick={handleOpen}>{t("components.QuestionnaireResults.QuestionnaireResultsButton.ButtonText")}
            </Button>
            <Modal
                id={"myModal"}
                open={open}
                onClose={handleClose}
            >
                <Box sx={styleBox}>
                    <IconButton color="primary" sx={styleButtonClose}>
                        <CloseIcon onClick={handleClose}/>
                    </IconButton>
                    <Stepper nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepButton color="inherit" onClick={() => {
                                    setActiveStep(index);
                                    handleOpen();
                                }}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        <React.Fragment>
                            {activeStep === 0 ? (
                                <div>
                                    <Stack
                                        direction="column"
                                        justifyContent="space-between"
                                        alignItems="stretch"
                                    >
                                        <div>
                                        <Stack direction="row"
                                               justifyContent="space-between"
                                               alignItems="center"
                                               spacing={1}
                                        >
                                            <GraphILS/>
                                            <TableILS/>
                                        </Stack>
                                        </div>
                                        <ResultDescriptionILS/>
                                    </Stack>
                                </div>) : (
                                <div>
                                    <Stack direction="column"
                                           justifyContent="space-between"
                                           alignItems="stretch"
                                           m={2}
                                    >
                                        <div>
                                        <Stack direction="row"
                                               justifyContent="space-between"
                                                alignItems="center"
                                        >
                                            <GraphListK/>
                                            <TableListK/>
                                        </Stack>
                                        </div>
                                        <ResultDescriptionListK/>
                                    </Stack>
                                </div>)}
                        </React.Fragment>
                    </div>
                    <Stack direction="row"
                           justifyContent="space-between"
                           alignItems="flex-end"
                           spacing={1}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleBack}
                            sx={styleButtonBack}
                        >
                            {t("Back")}
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            sx={styleButtonNext}
                        >
                            {t("Next")}
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

