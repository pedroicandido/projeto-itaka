import { useEffect, useState } from "react";
import Stepper from "../../../components/stepProgress";
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
  healthFields
} from "../../../domain/initialValues/candidate";
import { cpfMask, cepMask, birthMask, phoneMask } from "../../../helpers/masks";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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
    resolver: yupResolver(schemaValidation),
    reValidateMode: 'onChange',
    mode: 'onChange'
  });
  const { handleSubmit, control, setValue, trigger } = methods;
  const { errors } = useFormState({ control })
  const [step, setStep] = useState(2);
  const birthDate = useWatch({ control, name: "birthDate" });
  const cellPhone = useWatch({ control, name: "cellPhone" });
  const cpf = useWatch({ control, name: "cpf" });
  const fatherCpf = useWatch({ control, name: "fatherCpf" });
  const homePhone = useWatch({ control, name: "homePhone" });
  const messagePhone = useWatch({ control, name: "messagePhone" });
  const motherCpf = useWatch({ control, name: "motherCpf" });
  const zipCode = useWatch({ control, name: "zipCode" });

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
      default:
        return null
    }
  };

  const handleNext = async (step) => {
    const fields = fetchFieldsToValidate(step)
    const result = await trigger(fields);
    console.log(errors)
    console.log(errors)
    if (result) {
      setStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data) => {
    console.log("to AQUI");
  };


  useEffect(() => {
    const formatedBirthDate = birthMask(birthDate);
    setValue("birthDate", formatedBirthDate);
  }, [birthDate, setValue]);

  useEffect(() => {
    const formatedCellPhone = phoneMask(cellPhone);
    setValue("cellPhone", formatedCellPhone);
  }, [cellPhone, setValue]);

  useEffect(() => {
    const formatedCpf = cpfMask(cpf);
    setValue("cpf", formatedCpf);
  }, [cpf, setValue]);

  useEffect(() => {
    const formatedCpf = cpfMask(fatherCpf);
    setValue("fatherCpf", formatedCpf);
  }, [fatherCpf, setValue]);

  useEffect(() => {
    const formatedHomePhone = phoneMask(homePhone);
    setValue("homePhone", formatedHomePhone);
  }, [homePhone, setValue]);

  useEffect(() => {
    const formatedMessagePhone = phoneMask(messagePhone);
    setValue("messagePhone", formatedMessagePhone);
  }, [messagePhone, setValue]);

  useEffect(() => {
    const formatedCpf = cpfMask(motherCpf);
    setValue("motherCpf", formatedCpf);
  }, [motherCpf, setValue]);

  useEffect(() => {
    const formatedZip = cepMask(zipCode);
    setValue("zipCode", formatedZip, { shouldValidate: true });
  }, [zipCode, setValue]);

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
        <Grid container alignItems="center" justify="center">
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Stepper activeStep={step} totalSteps={totalSteps} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            {step === 0 && <Identification />}
            {step === 1 && <EducationData />}
            {step === 2 && <Benefits />}
            {step === 3 && <Health />}
            {step === 4 && <SocialFamilyCondition />}
            {step === 5 && <FamilyComposition />}
            {step === 6 && <Expenses />}
            {step === 7 && <OtherInformations />}
            <Grid container spacing={2} justify="flex-end">
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
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
