import { useState } from "react";
import Identification from "../../../components/identification";
import EducationData from "../../../components/educationalData";
import Health from "../../../components/health";
import Benefits from "../../../components/benefits";
import SocialFamilyCondition from "../../../components/socialFamilyCondition";
import FamilyComposition from "../../../components/familyComposition";
import Expenses from "../../../components/expenses";
import OtherInformations from "../../../components/otherInformations";
import {
  makeDefaultValues,
  benefitsFields,
  candidateFields,
  educationFields,
  healthFields,
  socialFamilyConditionFields,
  expenseFields
} from "../../../domain/initialValues/candidate";
import { useHistory } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Feedback from "../../../components/feedback";
import { useForm, useWatch, FormProvider, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaValidation from "../../../helpers/validations/registerCandidate";

const AddCandidate = () => {
  const defaultValues = makeDefaultValues({
    isStudent: false,
    benefits: [{ course: "", shift: "", hour: "" }],
    hasControlledMedication: "n",
    hasAgreed: false,
    hasAllergy: "n",
    hasFamilyMedicaltreatment: "n",
    hasFamilyMedicineUse: "n",
    hasFamilyDeficiency: "n",
    hasFamilyChemicalDependency: "n",
    hasFamilySocialAccompaniment: "n",
    hasFamilySocialBenefit: "n",
    hasSpecialMedicalCondition: "n",
    familyComposition: [],
  });
  const totalSteps = 7;
  const methods = useForm({
    defaultValues,
    reValidateMode: 'onChange',
    mode: 'onChange'
  });

  const history = useHistory()
  const { handleSubmit, trigger } = methods;
  const [step, setStep] = useState(0);


  const fetchFieldsToValidate = (step) => {
    let fields = [];
    switch (step) {
      case 0:
        fields = [...candidateFields]
        return fields
      case 1:
        fields = [...educationFields]
        return fields
      case 2:
        fields = [...benefitsFields]
        return fields
      case 3:
        fields = [...healthFields]
        return fields
      case 4:
        fields = [...socialFamilyConditionFields]
        return fields
      case 5:
        fields = ["familyComposition"]
        return fields
      case 6:
        fields = [...expenseFields]
        return fields
      default:
        return null
    }
  };

  const handleNext = async (step) => {
    const fields = fetchFieldsToValidate(step)
    const result = await trigger(fields);

    if (result) {
      setStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data) => {

    history.push('/candidate')

  };

  const getComponent = step => {
    switch (step) {
      case 0:
        return <Identification />
      case 1:
        return <EducationData />
      case 2:
        return <Benefits />
      case 3:
        return <Health />
      case 4:
        return <SocialFamilyCondition />
      case 5:
        return <FamilyComposition />
      case 6:
        return <Expenses />
      case 7:
        return <OtherInformations />
      default:
        return null
    }
  }


  let button = (
    <Grid item>
      <Button variant="contained" color="primary" fullWidth type="submit">
        Cadastrar
      </Button>
    </Grid>
  );

  if (step !== totalSteps) {
    button = (
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleNext.bind(null, step)}
          type="button"
        >
          Próximo
        </Button>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            {getComponent(step)}
            <Grid container spacing={2} justify="flex-end">
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disabled={step === 0}
                  onClick={handleBack}
                >
                  Voltar
                </Button>
              </Grid>
              {button}
            </Grid>
          </FormProvider>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddCandidate;
