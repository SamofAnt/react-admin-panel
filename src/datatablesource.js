export const columns = [
  { 
    field: 'sourceSystemCd', 
    headerName: 'Код ресурса', 
    width: 130 
  },
  { 
    field: 'validFromDttm', 
    headerName: 'Начальное время достоверности', 
    width: 250,
    type: 'date'
  },
  { 
    field: 'languageCd', 
    headerName: 'Языковой код',
    width: 130 
  },
  {
    field: 'validToDttm',
    headerName: 'Конечное время достоверности',
    width: 250,
    type: 'date'
  },
  {
    field: 'sourceSystemDesc',
    headerName: 'Описание ресурса',
    width: 160,
  },
  {
    field: 'sourceSystemNo',
    headerName: 'Номер ресурса',
    width: 160,
  },
  {
    field: 'processedDttm',
    headerName: 'Время обработки',
    width: 220,
    type: 'date'
  }
]