import MUIDataTable from "mui-datatables";
import { useFormContext, useWatch } from 'react-hook-form'
import makeTableColumns from './config/tableColumns'


const FamilyCompositionList = () => {

  const { control, setValue } = useFormContext()
  const familyComposition = useWatch({ control, name: 'familyComposition' })
  

  const onRemoveHandler = (id) => {
    const updateFamilyComposition = familyComposition.filter(parent => parent.id !== id)
    setValue('familyComposition', updateFamilyComposition)
  }

  const columns = makeTableColumns(onRemoveHandler)


  return <MUIDataTable columns={columns} title="Composição Familiar" data={familyComposition} options={{ filter: false, search: false, download: false, print: false, selectableRows: 'single' }} />
}

export default FamilyCompositionList