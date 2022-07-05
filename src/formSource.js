export const sourceInputs = [
    {
        id: 1,
        label: "source_system_cd",
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
        label: "valid_from_dttm",
        type: "datetime-local",
        placeholder: 1,
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 3,
        label: "language_cd",
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
        label: "valid_to_dttm",
        type: "datetime-local",
        placeholder: 1,
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 5,
        label: "source_system_desc",
        type: "text",
        placeholder: "Тестовый источник",
        
        rules: {
            required: "Поле должно быть заполнено",
        }
    },
    {
        id: 6,
        label: "x_source_no",
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
