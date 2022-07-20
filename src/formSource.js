export const sourceInputs = [
    {
        id: 1,
        label: "Код источника",
        register: "sourceSystemCd",
        type: "text",
        placeholder: "SRC",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 3,
                message: "Должно быть менее четырех символов"
            }
        }
    },
    {
        id: 2,
        label: "Начальное время достоверности",
        register: "validFromDttm",
        type: "datetime-local",
        placeholder: 1,
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 3,
        label: "Языковой код",
        register: "languageCd",
        type: "text",
        placeholder: "РУС",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 3,
                message: "Должно быть менее четырех символов"
            }
        }
    },
    {
        id: 4,
        label: "Конечное время достоверности",
        register: "validToDttm",
        type: "datetime-local",
        placeholder: 1,
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 5,
        register: "sourceSystemDesc",
        label: "Описание источника",
        type: "text",
        placeholder: "Тестовый источник",
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 6,
        label: "Номер источника",
        register: "sourceSystemNo",
        type: "number",
        placeholder: 1,
        rules: {
            required: "Поле должно быть заполнено",
            min: {
                value: 1,
                message: "Номер должен быть больше 0"
            },
            max: {
                value: 199,
                message: "Номер должен быть меньше 200"
            }
        }
    },
];

export const resourceInputs = [
    {
        id: 1,
        label: "ID",
        register: "resourceId",
        type: "number",
        placeholder: 1.0,
        rules: {
            required: "Поле должно быть заполнено",
            min: {
                value: 1,
                message: "ID должен быть больше 0"
            }
        }
    },
    {
        id: 2,
        label: "Код ресурса",
        register: "resourceCd",
        type: "text",
        placeholder: "SFX",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 3,
                message: "Должно быть менее четырех символов"
            }
        }
    },
    {
        id: 3,
        label: "Группа ресурса",
        register: "resourceGroup",
        type: "selection",
        placeholder: "LOG",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 3,
                message: "Должно быть менее четырех символов"
            }
        }
    },
    {
        id: 4,
        label: "Описание ресурса",
        register: "resourceDesc",
        type: "text",
        placeholder: "OWQ",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 3,
                message: "Должно быть менее четырех символов"
            }
        }
    }
]

export const groupInputs = [
    {
        id: 1,
        label: "Код группы",
        register: "resourceGroupCd",
        type: "text",
        placeholder: "UID",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 3,
                message: "Должно быть менее четырех символов"
            }
        }
    },
    {
        id: 2,
        label: "Код политики перезагрузки",
        register: "reloadPolicyCd",
        type: "text",
        placeholder: "YAW",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 3,
                message: "Должно быть менее четырех символов"
            }
        }
    },
    {
        id: 3,
        label: "Флаг загрузки",
        register: "extractFlag",
        type: "text",
        placeholder: "G",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 1,
                message: "Должно быть менее двух символов"
            }
        }
    },
    {
        id: 4,
        label: "ID модуля загрузки",
        register: "loadModuleId",
        type: "number",
        placeholder: 1.0,
        rules: {
            required: "Поле должно быть заполнено",
        }
    }
]

export const resourceXInputs = [
    {
        id: 1,
        label: "ID",
        register: "resourceId",
        type: "number",
        placeholder: 1.0,
        rules: {
            required: "Поле должно быть заполнено",
            min: {
                value: 1,
                message: "ID должен быть больше 0"
            }
        }
    },
    {
        id: 2,
        label: "Код типа источника",
        register: "sourceTypeCd",
        type: "text",
        placeholder: "TABLE",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 10,
                message: "Должно быть менее одиннадцати символов"
            }
        }
    },
    {
        id: 3,
        label: "Код роли источника",
        register: "sourceRoleCd",
        type: "text",
        placeholder: "ROL",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 10,
                message: "Должно быть менее одиннадцати символов"
            }
        }
    },
    {
        id: 4,
        label: "Код библиотеки",
        register: "librefCd",
        type: "text",
        placeholder: "PR",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 8,
                message: "Должно быть менее девяти символов"
            }
        }
    },
    {
        id: 5,
        label: "Имя таблицы",
        register: "tableName",
        type: "text",
        placeholder: "PERVII",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 32,
                message: "Должно быть менее 33 символов"
            }
        }
    },
    
    {
        id: 6,
        label: "Имя файла",
        register: "fileName",
        type: "text",
        placeholder: "File",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 100,
                message: "Должно быть менее 101 символа"
            }
        }
    },
    
    {
        id: 7,
        label: "Имя хранимой процедуры",
        register: "storedProcName",
        type: "text",
        placeholder: "storedProcedure",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 100,
                message: "Должно быть менее 101 символа"
            }
        }
    }
]