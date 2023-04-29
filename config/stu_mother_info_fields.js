

class StuMotherInfoFields
{
    constructor() {}
    static getFields() 
    {
        let addressPattern = /^[a-zA-Z0-9\s\.,]{4,130}$/;
        let textType = "text";
        return [
            {
                name: "Mother Fullname",
                type: textType,
                pattern: addressPattern,

            },
            {
                name: "Mother Home Address",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Mother Phone",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Mother Office Address",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Mother Profession",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Mother Religion",
                type: textType,
                pattern: addressPattern,
            }
        ];
    }
}

export { StuMotherInfoFields };