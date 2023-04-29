

class StuMedicalInfoFields 
{
    constructor() {}
    static getFields()
    {
        let bloodgroupPattern = /^[a-zA-Z0-9\s+]{1,13}$/;
        let addressPattern = /^[a-zA-Z0-9\s\.,]{4,130}$/;
        let textType = "text";
        return [
            {
                name: "Blood Group",
                type: textType,
                pattern: bloodgroupPattern,
            },
            {
                name: "Genotype",
                type: textType,
                pattern: bloodgroupPattern,
            },
            {
                name: "Allergies",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Family Doctor",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Doctor Phone",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Doctor Address",
                type: textType,
                pattern: addressPattern,
            }
        ];

    }
}
export { StuMedicalInfoFields };