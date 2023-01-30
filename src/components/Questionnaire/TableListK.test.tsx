import "@testing-library/jest-dom";
import {TableListK} from "./TableListK";
import {render} from "@testing-library/react";


//we have to mock react-i18next otherwise a warning will appear
//"You will need pass in an i18next instance by using initReactI18next" => mock is needed.

jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: (key:string) => key})
}));

// tests for mui can be found https://github.com/mui/material-ui/blob/master/packages/mui-material/src
describe("Test the Table dimensions", () => {

    test("interpretation is right",
        () => {

        const {getAllByRole} = render(<TableListK/>);

        expect(getAllByRole("columnheader")[0]).toHaveTextContent("components.QuestionnaireResults.TableListK.Factors & subscales");
        expect(getAllByRole("columnheader")[1]).toHaveTextContent("components.QuestionnaireResults.TableListK.Score");
        expect(getAllByRole("columnheader")[2]).toHaveTextContent("components.QuestionnaireResults.TableListK.Factors & subscales");
        expect(getAllByRole("columnheader")[3]).toHaveTextContent("components.QuestionnaireResults.TableListK.Score");
        expect(getAllByRole("cell")[0]).toHaveTextContent("components.QuestionnaireResults.TableListK.Cognitive strategies");
        expect(getAllByRole("cell")[2]).toHaveTextContent("components.QuestionnaireResults.TableListK.Internal resource management strategies");
        expect(getAllByRole("cell")[4]).toHaveTextContent("components.QuestionnaireResults.TableListK.Organize");
        expect(getAllByRole("cell")[6]).toHaveTextContent("components.QuestionnaireResults.TableListK.Attention");
        expect(getAllByRole("cell")[8]).toHaveTextContent("components.QuestionnaireResults.TableListK.Elaborate");
        expect(getAllByRole("cell")[10]).toHaveTextContent("components.QuestionnaireResults.TableListK.Effort");
        expect(getAllByRole("cell")[12]).toHaveTextContent("components.QuestionnaireResults.TableListK.Critical review");
        expect(getAllByRole("cell")[14]).toHaveTextContent("components.QuestionnaireResults.TableListK.Time");
        expect(getAllByRole("cell")[16]).toHaveTextContent("components.QuestionnaireResults.TableListK.Repeat");
        expect(getAllByRole("cell")[18]).toHaveTextContent("");
        expect(getAllByRole("cell")[20]).toHaveTextContent("components.QuestionnaireResults.TableListK.Metacognitive strategies");
        expect(getAllByRole("cell")[22]).toHaveTextContent("components.QuestionnaireResults.TableListK.External resource management strategies");
        expect(getAllByRole("cell")[24]).toHaveTextContent("components.QuestionnaireResults.TableListK.Goals & plans");
        expect(getAllByRole("cell")[26]).toHaveTextContent("components.QuestionnaireResults.TableListK.Learning with classmates");
        expect(getAllByRole("cell")[28]).toHaveTextContent("components.QuestionnaireResults.TableListK.Control");
        expect(getAllByRole("cell")[30]).toHaveTextContent("components.QuestionnaireResults.TableListK.Literature research");
        expect(getAllByRole("cell")[32]).toHaveTextContent("components.QuestionnaireResults.TableListK.Regulate");
        expect(getAllByRole("cell")[34]).toHaveTextContent("components.QuestionnaireResults.TableListK.Learning environment");
    });
});

describe("Test the Table Score values are numbers", () => {

    test("values are numbers",
        () => {

        const {getAllByRole} = render(<TableListK/>);

        const cell1 = getAllByRole("cell")[1].textContent;
        let cell1Int;
        if(cell1 !== null){
            cell1Int = parseInt(cell1)
        }

        const cell3 = getAllByRole("cell")[3].textContent;
        let cell3Int;
        if(cell3 !== null){
            cell3Int = parseInt(cell3)
        }

        const cell5 = getAllByRole("cell")[5].textContent;
        let cell5Int;
        if(cell5 !== null){
            cell5Int = parseInt(cell5)
        }

        const cell7 = getAllByRole("cell")[7].textContent;
        let cell7Int;
        if(cell7 !== null){
            cell7Int = parseInt(cell7)
        }

        const cell9 = getAllByRole("cell")[9].textContent;
        let cell9Int;
        if(cell9 !== null){
            cell9Int = parseInt(cell9)
        }

        const cell11 = getAllByRole("cell")[11].textContent;
        let cell11Int;
        if(cell11 !== null){
            cell11Int = parseInt(cell11)
        }

        const cell13 = getAllByRole("cell")[13].textContent;
        let cell13Int;
        if(cell13 !== null){
            cell13Int = parseInt(cell13)
        }

        const cell15 = getAllByRole("cell")[15].textContent;
        let cell15Int;
        if(cell15 !== null){
            cell15Int = parseInt(cell15)
        }

        const cell17 = getAllByRole("cell")[17].textContent;
        let cell17Int;
        if(cell17 !== null){
            cell17Int = parseInt(cell17)
        }

        const cell21 = getAllByRole("cell")[21].textContent;
        let cell21Int;
        if(cell21 !== null){
            cell21Int = parseInt(cell21)
        }

        const cell23 = getAllByRole("cell")[23].textContent;
        let cell23Int;
        if(cell23 !== null){
            cell23Int = parseInt(cell23)
        }

        const cell25 = getAllByRole("cell")[25].textContent;
        let cell25Int;
        if(cell25 !== null){
            cell25Int = parseInt(cell25)
        }

        const cell27 = getAllByRole("cell")[27].textContent;
        let cell27Int;
        if(cell27 !== null){
            cell27Int = parseInt(cell27)
        }

        const cell29 = getAllByRole("cell")[29].textContent;
        let cell29Int;
        if(cell29 !== null){
            cell29Int = parseInt(cell29)
        }

        const cell31 = getAllByRole("cell")[31].textContent;
        let cell31Int;
        if(cell31 !== null){
            cell31Int = parseInt(cell31)
        }

        const cell33 = getAllByRole("cell")[33].textContent;
        let cell33Int;
        if(cell33 !== null){
            cell33Int = parseInt(cell33)
        }

        const cell35 = getAllByRole("cell")[35].textContent;
        let cell35Int;
        if(cell35 !== null){
            cell35Int = parseInt(cell35)
        }

        expect(cell1Int).toBeGreaterThanOrEqual(0);
        expect(cell3Int).toBeGreaterThanOrEqual(0);
        expect(cell5Int).toBeGreaterThanOrEqual(0);
        expect(cell7Int).toBeGreaterThanOrEqual(0);
        expect(cell9Int).toBeGreaterThanOrEqual(0);
        expect(cell11Int).toBeGreaterThanOrEqual(0);
        expect(cell13Int).toBeGreaterThanOrEqual(0);
        expect(cell15Int).toBeGreaterThanOrEqual(0);
        expect(cell17Int).toBeGreaterThanOrEqual(0);
        expect(getAllByRole("cell")[19]).toHaveTextContent("");
        expect(cell21Int).toBeGreaterThanOrEqual(0);
        expect(cell23Int).toBeGreaterThanOrEqual(0);
        expect(cell25Int).toBeGreaterThanOrEqual(0);
        expect(cell27Int).toBeGreaterThanOrEqual(0);
        expect(cell29Int).toBeGreaterThanOrEqual(0);
        expect(cell31Int).toBeGreaterThanOrEqual(0);
        expect(cell33Int).toBeGreaterThanOrEqual(0);
        expect(cell35Int).toBeGreaterThanOrEqual(0);
    });
});