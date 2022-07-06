export const sourceInputs = [
    {
        id: 1,
        label: "sourceSystemCd",
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
        label: "validFromDttm",
        type: "datetime-local",
        placeholder: 1,
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 3,
        label: "languageCd",
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
        label: "validToDttm",
        type: "datetime-local",
        placeholder: 1,
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 5,
        label: "sourceSystemDesc",
        type: "text",
        placeholder: "Тестовый источник",
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 6,
        label: "sourceSystemNo",
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
