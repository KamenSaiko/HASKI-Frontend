import {
  DropdownLanguage,
  Text,
  SnackbarTest,
  SnackbarContainer,
  QuestionnaireResultsModal,
} from "@components";
import log from "loglevel";
import { DefaultButton as Button } from "@common/components";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Home = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  log.setLevel("error");
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
        data-testid={"QuestionnaireResultsButton"}
      >
        {t(
          "components.QuestionnaireResults.QuestionnaireResultsModal.ButtonText"
        )}
      </Button>
      <QuestionnaireResultsModal
        open={open}
        handleClose={() => setOpen(!open)}
      />
      <DropdownLanguage />
      <Text />
      <SnackbarContainer />
      <SnackbarTest />
    </div>
  );
};

export default Home;
