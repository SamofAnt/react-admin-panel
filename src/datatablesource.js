export const sourceColumns = [
  { 
    field: 'sourceSystemCd', 
    headerName: 'Код источника', 
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
    headerName: 'Описание источника',
    width: 160,
  },
  {
    field: 'sourceSystemNo',
    headerName: 'Номер источника',
    width: 160,
  },
  {
    field: 'processedDttm',
    headerName: 'Время обработки',
    width: 220,
    type: 'date'
  }
]

export const resourcesColumns = [
  {
    field: 'resourceId',
    headerName: 'ID',
    width: 130
  },
  {
    field: 'resourceCd',
    headerName: 'Код ресурса',
    width: 130
  },
  {
    field: 'resourceGroup',
    headerName: 'Группа ресурса',
    width: 250
  },
  {
    field: 'resourceDesc',
    headerName: 'Описание ресурса',
    width: 250
  }
]

export const groupsColumns = [
  {
    field: 'resourceGroupCd',
    headerName: 'Код группы ресурсов',
    width: 200
  },
  {
    field: 'reloadPolicyCd',
    headerName: 'Код политики перезагрузки',
    width: 230
  },
  {
    field: 'extractFlag',
    headerName: 'Флаг выгрузки',
    width: 130
  },
  
  {
    field: 'loadModuleId',
    headerName: 'Идентификатор модуля загрузки',
    width: 250
  },
]

export const registersColumns = [
  {
  field: 'registryId',
  headerName: 'ID',
  width: 200
},
{
  field: 'versionId',
  headerName: 'Версия',
  width: 230
},
{
  field: 'availableDttm',
  headerName: 'Дата доступности',
  width: 260
},

{
  field: 'processedByJobId',
  headerName: 'processedByJobId',
  width: 250
},
{
  field: 'statusCd',
  headerName: 'Код статуса',
  width: 250
},
]
export const resourceXColumns = [
  {
  field: 'resourceId',
  headerName: 'ID',
  width: 200
},
{
  field: 'sourceTypeCd',
  headerName: 'Код типа источника',
  width: 230
},
{
  field: 'sourceRoleCd',
  headerName: 'Код роли источника',
  width: 260
},

{
  field: 'librefCd',
  headerName: 'Код библиотеки',
  width: 250
},
{
  field: 'tableName',
  headerName: 'Имя таблицы',
  width: 250
},
{
  field: 'fileName',
  headerName: 'Имя файла',
  width: 250
},
{
  field: 'storedProcName',
  headerName: 'Имя хранимой процедуры',
  width: 250
},
]
