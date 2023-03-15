import {useContext} from "react";
import {AuthContext} from "@services";
import {Skeleton} from "@mui/material";
import {TableILS} from "../../components/Questionnaire/QuestionnaireQuestions/TableILS";

export const QuestionnaireQuestionsShortILS = () => {
    const authcontext = useContext(AuthContext)

    return(
        authcontext.isAuth ? <Skeleton /> : TableILS(false)
    )
}

export default QuestionnaireQuestionsShortILS