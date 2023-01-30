import Typography from '@mui/material/Typography';
import {getListKParameters, getSubscaleScore} from "./TableListK";
import {useTranslation} from "react-i18next";

function getCognitiveStrategiesBelow3String(organize: number, elaborate: number, criticalReview: number, repeat: number) {

    const {t} = useTranslation();

    let cognitiveStrategiesBelow3String = t("components.QuestionnaireResults.ResultDescriptionListK.CognitiveStrategies Below3.Part1");
    const cognitiveStrategiesBelow3Array = [];
    const cognitiveStrategiesBelow3Html = [];

    if(organize < 3) {
        cognitiveStrategiesBelow3Array.push("Organize");
        cognitiveStrategiesBelow3String += " " + t("components.QuestionnaireResults.TableListK.Organize") + " &";
    }
    if(elaborate < 3) {
        cognitiveStrategiesBelow3Array.push("Elaborate");
        cognitiveStrategiesBelow3String += " " + t("components.QuestionnaireResults.TableListK.Elaborate") + " &";
    }
    if(criticalReview < 3) {
        cognitiveStrategiesBelow3Array.push("Critical review");
        cognitiveStrategiesBelow3String += " " + t("components.QuestionnaireResults.TableListK.Critical review") + " &";
    }
    if(repeat < 3) {
        cognitiveStrategiesBelow3Array.push("Repeat");
        cognitiveStrategiesBelow3String += " " + t("components.QuestionnaireResults.TableListK.Repeat") + " &";
    }

    //Remove last " & "
    cognitiveStrategiesBelow3String = cognitiveStrategiesBelow3String.slice(0, cognitiveStrategiesBelow3String.length - 2);

    if(cognitiveStrategiesBelow3Array.length > 0) {
        cognitiveStrategiesBelow3String += " " + t("components.QuestionnaireResults.ResultDescriptionListK.CognitiveStrategies Below3.Part2");
        cognitiveStrategiesBelow3Html.push(
            <div>
                <Typography variant={"h6"} gutterBottom>
                    {t("components.QuestionnaireResults.TableListK.Cognitive strategies")}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {cognitiveStrategiesBelow3String}
                </Typography>
            </div>
        );
    }

    return cognitiveStrategiesBelow3Html;
}

function getMetacognitiveStrategiesBelow3String(goalsPlans: number, control: number, regulate: number) {

    const {t} = useTranslation();

    let metacognitiveStrategiesBelow3String = t("components.QuestionnaireResults.ResultDescriptionListK.MetacognitiveStrategies Below3.Part1");
    const metacognitiveStrategiesBelow3Array = [];
    const metacognitiveStrategiesBelow3Html = [];

    if(goalsPlans < 3) {
        metacognitiveStrategiesBelow3Array.push("Goals and plans");
        metacognitiveStrategiesBelow3String += " " + t("components.QuestionnaireResults.ResultDescriptionListK.MetacognitiveStrategies Below3.Goals & Plans") + " &";
    }
    if(control < 3) {
        metacognitiveStrategiesBelow3Array.push("Control");
        metacognitiveStrategiesBelow3String += " " + t("components.QuestionnaireResults.TableListK.Control") + " &";
    }
    if(regulate < 3) {
        metacognitiveStrategiesBelow3Array.push("Regulate");
        metacognitiveStrategiesBelow3String += " " + t("components.QuestionnaireResults.ResultDescriptionListK.MetacognitiveStrategies Below3.Regulate") + " &";
    }

    //Remove last " & "
    metacognitiveStrategiesBelow3String = metacognitiveStrategiesBelow3String.slice(0, metacognitiveStrategiesBelow3String.length - 2);

    if(metacognitiveStrategiesBelow3Array.length > 0) {
        metacognitiveStrategiesBelow3String += t("Dot");
        metacognitiveStrategiesBelow3Html.push(
            <div>
                <Typography variant={"h6"} gutterBottom>
                    {t("components.QuestionnaireResults.TableListK.Metacognitive strategies")}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {metacognitiveStrategiesBelow3String}
                </Typography>
            </div>
        );
    }

    return metacognitiveStrategiesBelow3Html;
}

export function ResultDescriptionListK() {

    const {t} = useTranslation();

    const [organize, elaborate, criticalReview, repeat, attention, effort, time, goalsPlans, control, regulate, learnWithClassmates, literatureResearch, learningEnvironment] = getListKParameters();

    const cognitiveStrategiesAverage = getSubscaleScore([organize, elaborate, criticalReview, repeat]);
    const averageInternalResourceManagementStrategies = getSubscaleScore([attention, effort, time]);
    const averageMetacognitiveStrategies = getSubscaleScore([goalsPlans, control, regulate]);
    const averageExternalResourcesManagementStrategies = getSubscaleScore([learnWithClassmates, literatureResearch, learningEnvironment]);
    const averageSubscaleArray = [cognitiveStrategiesAverage, averageInternalResourceManagementStrategies, averageMetacognitiveStrategies, averageExternalResourcesManagementStrategies];

    const averageSubscaleBelow3Array = [];
    let averageSubscaleBelow3String = "";
    const subscalesBelow3Array = [];
    const subscalesBelow3MessageString = [];

    // All Subscales that have a score below 3 are stored in averageSubscaleArray and the corresponding string is stored in
    // averageSubscaleBelow3String
    // !todo Funktion draus machen
    for(const item in averageSubscaleArray) {
        if(averageSubscaleArray[item] < 3) {
            averageSubscaleBelow3Array.push(averageSubscaleArray[item]);
        }
    }
    if(averageSubscaleBelow3Array.length > 1) {
        averageSubscaleBelow3String += " " + t("components.QuestionnaireResults.ResultDescriptionListK.SubscaleAverage Below3." + averageSubscaleBelow3Array.length);
    }

    const cognitiveStrategiesBelow3 = getCognitiveStrategiesBelow3String(organize, elaborate, criticalReview, repeat);
    const metacognitiveStrategiesBelow3 = getMetacognitiveStrategiesBelow3String(goalsPlans, control, regulate);


    const subScalesRelevantCombinations = [["attention",attention], ["time",time], ["learnWithClassmates",learnWithClassmates], ["literatureResearch",literatureResearch], ["learningEnvironment",learningEnvironment]];

    //Going through all combinations of subScales and adding them to the future if-statement if they are below 3
    // !todo Funktion draus machen
    for (const item in subScalesRelevantCombinations) {
        if(subScalesRelevantCombinations[item][1] < 3) {
            subscalesBelow3Array.push(subScalesRelevantCombinations[item][0] + " && ");
        }
    }

    //If there are any relevant subScales below 3, the if-statement is created
    if(subscalesBelow3Array.length > 0) {
        //remove last " && "
        subscalesBelow3Array[subscalesBelow3Array.length-1] = subscalesBelow3Array[subscalesBelow3Array.length-1].slice(0, subscalesBelow3Array[subscalesBelow3Array.length-1].length - 4);
            subscalesBelow3MessageString.push(
            <div>
                <Typography variant={"h6"} gutterBottom>
                    {t("components.QuestionnaireResults.ResultDescriptionListK."+ subscalesBelow3Array.join("") +" Below3.Title")}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {t("components.QuestionnaireResults.ResultDescriptionListK."+ subscalesBelow3Array.join("") +" Below3.Description")}
                </Typography>
            </div>
            );
        }

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {t("components.QuestionnaireResults.ResultDescriptionListK.GeneralDescriptionTitle")} <br/>
            </Typography>
            <div>
                <Typography variant="body2" gutterBottom>
                    {t("components.QuestionnaireResults.ResultDescriptionListK.GeneralDescription")}
                    {averageSubscaleBelow3String} <br/>

                </Typography>
            </div>
            {cognitiveStrategiesBelow3}
            {metacognitiveStrategiesBelow3}
            {subscalesBelow3Array}
            {subscalesBelow3MessageString}
        </div>
    )
}
