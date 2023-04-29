



class StaffPersonalInfoFields
{
    constructor()
    {

    }

    static getFields()
    {
        let namePattern = /^[a-zA-Z]{3,50}$/;
        let passwordPattern = /^[a-zA-Z0-9]{3,25}$/;
        let addressPattern = /^[a-zA-Z0-9\s\.,]{4,130}$/;
        let textType = "text";

        return [
            {
                name: "First Name",
                type: textType,
                pattern: namePattern,
            },
            {
                name: "Last Name",
                type: textType,
                pattern: namePattern,
            },
            {
                name: "Other Name",
                type: textType,
                pattern: namePattern,
            },
            {
                name: "Email",
                type: textType,
                pattern: /^([a-zA-Z0-9-]{3,})([@])(gmail.com)$/,
            },
            {
                name: "Password",
                type: "password",
                pattern: passwordPattern,
            },
            {
                name: "Confirm Password",
                type: "password",
                pattern: passwordPattern,
            },
            {
                name: "Date Of Birth",
                type: "date",
                pattern: /^[0-9-]{10}$/,
            },
            {
                name: "Gender",
                type: textType,
                pattern: /^(male|female)$/gi,
            },
            {
                name: "Residential Address",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Phone",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "State Of Origin",
                type: textType,
                pattern: addressPattern,
            },
            {
                name: "Nationality",
                type: textType,
                pattern: addressPattern,
            }
        ];
    }
}

export { StaffPersonalInfoFields };