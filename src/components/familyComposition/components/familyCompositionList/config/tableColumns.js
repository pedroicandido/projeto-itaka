import Button from '@material-ui/core/Button'

export default (onRemoveHandler) => {
  return [
    {
      name: "familyCompositionName",
      label: "Nome",
    },
    {
      name: "familyCompositionRelationship",
      label: "Parentesco",
      options: {
        customBodyRender: (value) => {
          return value.label
        }
      }
    },
    {
      name: "familyCompositionAge",
      label: "Idade",
    },
    {
      name: "familyCompositionMaritalStatus",
      label: "Estado Civil",
      options: {
        customBodyRender: (value) => {
          return value.label
        }
      }
    },
    {
      name: "familyCompositionOccupation",
      label: "Profissão",
    },
    {
      name: "familyCompositionScholarity",
      label: "Escolaridade",
      options: {
        customBodyRender: (value) => {
          return value.label
        }
      }
    },
    {
      name: "familyCompositionFinance",
      label: "Renda",
      options: {
        customBodyRender: (value) => {
          return `R$ ${value}`
        }
      }
    },
    {
      name: "id",
      label: 'Excluir',
      options: {
        customBodyRender: (value) => {
          return (
            <Button variant="outlined" onClick={onRemoveHandler.bind(null, value)} color="primary">
              REMOVER
            </Button>
          );
        }
      }
    },
  ]
}