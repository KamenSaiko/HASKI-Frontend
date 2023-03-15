import {useContext} from "react";
import {AuthContext} from "@services";
import {Skeleton} from "@mui/material";
import {TableILS} from "../../components/Questionnaire/QuestionnaireQuestions/TableILS";

export const QuestionnaireQuestionsLongILS = () => {
    const authcontext = useContext(AuthContext)

    return(
        authcontext.isAuth ? <Skeleton /> : TableILS(true)
    )
}

export default QuestionnaireQuestionsLongILS