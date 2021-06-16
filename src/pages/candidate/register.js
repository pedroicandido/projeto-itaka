import { useEffect, useState } from 'react'
import Stepper from '../../components/stepProgress'
import Identification from "../../components/identification";
import EducationData from '../../components/educationalData'
import Health from '../../components/health'
import Benefits from '../../components/benefits'
import { onlyNumbers } from '../../helpers/onlyNumbers'
import { useCandidate } from "../../domain/models/candidate";
import { cpfMask, cepMask, birthMask, phoneMask } from '../../helpers/masks'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useForm, useWatch, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import schemaValidation from '../../helpers/validations/registerCandidate'

const RegisterCandidate = () => {
  const defaultValues = useCandidate({ isStudent: false, benefits: [{ course: '', shift: '', hour: '' }], hasControlledMedication: 'n', hasAllergy: 'n' });

  const methods = useForm({ defaultValues, resolver: yupResolver(schemaValidation) });
  const { handleSubmit, control, setValue } = methods

  const [step, setStep] = useState(0);

  const birthDate = useWatch({ control, name: 'birthDate' })
  const cellPhone = useWatch({ control, name: 'cellPhone' })
  const cpf = useWatch({ control, name: 'cpf' })
  const fatherCpf = useWatch({ control, name: 'fatherCpf' })
  const homePhone = useWatch({ control, name: 'homePhone' })
  const messagePhone = useWatch({ control, name: 'messagePhone' })
  const motherCpf = useWatch({ control, name: 'motherCpf' })
  const zipCode = useWatch({ control, name: 'zipCode' })

  const getStep = step => setStep(step)


  const onSubmit = (data) => console.log(data);


  useEffect(() => {
    const formatedBirthDate = birthMask(birthDate)
    setValue('birthDate', formatedBirthDate)
  }, [birthDate, setValue])

  useEffect(() => {
    const formatedCellPhone = phoneMask(cellPhone)
    setValue('cellPhone', formatedCellPhone)
  }, [cellPhone, setValue])

  useEffect(() => {
    const formatedCpf = cpfMask(cpf)
    setValue('cpf', formatedCpf)
  }, [cpf, setValue])

  useEffect(() => {
    const formatedCpf = cpfMask(fatherCpf)
    setValue('fatherCpf', formatedCpf)
  }, [fatherCpf, setValue])

  useEffect(() => {
    const formatedHomePhone = phoneMask(homePhone)
    setValue('homePhone', formatedHomePhone)
  }, [homePhone, setValue])

  useEffect(() => {
    const formatedMessagePhone = phoneMask(messagePhone)
    setValue('messagePhone', formatedMessagePhone)
  }, [messagePhone, setValue])

  useEffect(() => {
    const formatedCpf = cpfMask(motherCpf)
    setValue('motherCpf', formatedCpf)
  }, [motherCpf, setValue])


  useEffect(() => {
    const formatedZip = cepMask(zipCode)
    setValue('zipCode', formatedZip, { shouldValidate: true })
  }, [zipCode, setValue])

  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container alignItems="center" justify="center">
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Stepper getStep={getStep} />
          </Grid>
        </Grid>

      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <FormProvider {...methods}>
            {step === 0 && <Identification control={control} />}
            {step === 1 && <EducationData control={control} />}
            {step === 2 && <Benefits control={control} />}
            {step === 3 && <Health control={control} />}
            <Grid container spacing={2} justify="flex-end">
              <Grid item>
                <Button variant="contained" color="secondary" fullWidth>
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegisterCandidate
