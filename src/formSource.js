export const sourceInputs = [
    {
        id: 1,
        label: "source_system_cd",
        type: "text",
        placeholder: "SRC",
        error: "Должно быть менее трех символов",
        rules: {
            required: true,
            maxLength: 3
        }
    },
    {
        id: 2,
        label: "language_cd",
        type: "text",
        placeholder: "РУС",
        error: "Должно быть менее трех символов",
        rules: {
            required: true,
            maxLength: 3
        }
    },
    {
        id: 3,
        label: "source_system_desc",
        type: "text",
        placeholder: "Тестовый источник",
        error: "Поле должно быть заполнено",
        rules: {
            required: true,
        }
    },
    {
        id: 4,
        label: "x_source_no",
        type: "number",
        placeholder: 1,
        error: "Номер должен быть в диапозоне [0,199]",
        rules: {
            required: true,
            min: 0,
            max: 199
        }
    },
];
