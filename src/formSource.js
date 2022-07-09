export const sourceInputs = [
    {
        id: 1,
        label: "Код ресурса",
        register: "sourceSystemCd",
        type: "text",
        placeholder: "SRC",
        rules: {
            required: "Поле должно быть заполнено",
            maxLength: {
                value: 3,
                message: "Должно быть менее трех символов"
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
                message: "Должно быть менее трех символов"
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
        label: "Описание ресурса",
        type: "text",
        placeholder: "Тестовый источник",
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 6,
        label: "Номер ресурса",
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
