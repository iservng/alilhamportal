



class StuTypeInfoFields 
{
    constructor(){}
    static getFields()
    {
        let name = "studenttype";
        let type = "radio";
        return [
            {
                name: name,
                type: type,
                label: "Beginner",

            },
            {
                name: name,
                type: type,
                label: "Existing Student",
            },
            {
                name: name,
                type: type,
                label: "Transfered",
            }
        ];
    }
}

export { StuTypeInfoFields };