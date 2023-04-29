

class StuFatherInfoFields 
{
    constructor() {}
    static getFields()
    {
        
        let addressPattern = /^[a-zA-Z0-9\s\.,]{4,130}$/;
        let textType = "text";
        return [
            {
                name: "Father Full Name",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Father Home Address",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Father Phone",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Father Office Address",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Father Profession",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Father Religion",
                type: textType,
                pattern: addressPattern,
            }
        ];
    }
}

export { StuFatherInfoFields };