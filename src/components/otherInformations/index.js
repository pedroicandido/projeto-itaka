import { useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Input from '../input'
import { useFormContext, useFormState, useWatch } from 'react-hook-form'
import useStyles from './styles'
import Checkbox from '../checkbox'

const OtherInformations = () => {
  const classes = useStyles()
  const { control } = useFormContext()
  const hasAgreed = useWatch({ control, name: 'hasAgreed' })
  const { errors } = useFormState({ control })

  useEffect(() => {
    console.log(errors)
  }, [errors])

  useEffect(() => {
    console.log(hasAgreed)
  }, [hasAgreed])
  return (
    <Paper className={classes.paper} elevation={2}>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">
            10. DEMAIS INFORMAÇÕES
          </Typography>
          <Divider />
        </Grid>

        <Grid item xl={12} lg={12}>
          <Input
            name="otherExpenses"
            fullWidth
            multiline
            rows={4}
            label="Outros gastos"
            placeholder="EXPOR OUTROS GASTOS DO CANDIDATO OU GRUPO FAMILIAR"
            variant="outlined" />
        </Grid>

        <Grid item xl={12} lg={12}>
          <Input
            name="familySocioEconomicSituation"
            fullWidth
            multiline
            rows={4}
            label="Situação Socioeconômica Familiar"
            variant="outlined" />
        </Grid>

        <Grid item xl={12} lg={12}>
          <Input
            name="note"
            fullWidth
            multiline
            rows={4}
            label="Observações que o candidato ou o Entrevistador julguem necessárias"
            variant="outlined" />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item xl={12}>
              <Typography component="h2" variant="h6">
                11. DECLARAÇÃO DE RESPONSABILIDADE PELAS INFORMAÇÕES E DOCUMENTOS
              </Typography>
              <Divider />
            </Grid>
            <Grid item xl={12}>
              <Typography style={{textAlign:'justify'}}>
                Declaro, para efeito de estudo socioeconômico, que as informações prestadas nesse documento de 4 (quatro) páginas numeradas
                estão completas e são verdadeiras e assumo, por elas e pelas cópias dos documentos apresentados, inteira responsabilidade, ciente das
                penalidades previstas no Código Penal Brasileiro, Artigos 171 e 299. Autorizo a apresentação desses documentos aos órgãos públicos
                competentes, se necessário. Declaro ainda estar ciente de que os dados apresentados serão submetidos a uma análise técnica e, se
                convocado (a), deverei comparecer à Instituição, para entrevista com o (a) Assistente Social, em data e horário previamente agendados pela
                Instituição, apresentando os originais de todos os documentos anexados ao formulário e quaisquer outros que forem solicitados.
              </Typography>
            </Grid>
            <Grid item xl={12}>
              <Checkbox label="Declaro que concordo com o termo supracitado." name="hasAgreed" checked={hasAgreed} />
              <p className={classes.feedback}>{errors.hasAgreed?.message}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>



    </Paper>
  )
}

export default OtherInformations