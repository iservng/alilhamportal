

// School Fees:	12,000
// Exam Fees:	500
// Admission Form:	500
// School Uniform:	500
// Cardigan:	500
// Text Books:	7500
// Games/Sport:	600
// Sport Wear:	3500
// Report Booklet:	3500
// P.T.A:	3500
// Total:	55000

class RegDetails 
{
    #sectionDetail;
    constructor(sect_details = []) {
        this.default_sect_details = [{
            "name": "Pre Nursery" ,
            "School Fees":	12000,
            "Exam Fees":	500,
            "Admission Form":	500,
            "School Uniform":	500,
            "Cardigan":	500,
            "Text Books":	7500,
            "Games/Sport":	600,
            "Sport Wear":	3500,
            "Report Booklet":	3500,
            "P.T.A":	3500,
            "Total":	55000,
        },{
            "name": "Nursery" ,
            "School Fees":	12000,
            "Exam Fees":	500,
            "Admission Form":	500,
            "School Uniform":	500,
            "Cardigan":	500,
            "Text Books":	7500,
            "Games/Sport":	600,
            "Sport Wear":	3500,
            "Report Booklet":	3500,
            "P.T.A":	3500,
            "Total":	55000,
        },{
            "name": "Primary" ,
            "School Fees":	12000,
            "Exam Fees":	500,
            "Admission Form":	500,
            "School Uniform":	500,
            "Cardigan":	500,
            "Text Books":	7500,
            "Games/Sport":	600,
            "Sport Wear":	3500,
            "Report Booklet":	3500,
            "P.T.A":	3500,
            "Total":	55000,
        },{
            "name": "Junior Secondary" ,
            "School Fees":	12000,
            "Exam Fees":	500,
            "Admission Form":	500,
            "School Uniform":	500,
            "Cardigan":	500,
            "Text Books":	7500,
            "Games/Sport":	600,
            "Sport Wear":	3500,
            "Report Booklet":	3500,
            "P.T.A":	3500,
            "Total":	55000,
        },{
            "name": "Senior Secondary" ,
            "School Fees":	12000,
            "Exam Fees":	500,
            "Admission Form":	500,
            "School Uniform":	500,
            "Cardigan":	500,
            "Text Books":	7500,
            "Games/Sport":	600,
            "Sport Wear":	3500,
            "Report Booklet":	3500,
            "P.T.A":	3500,
            "Total":	55000,
        }];

        if(sect_details.length > 0)
        {
            //The class was called with a list of section details
            //Set the private sectionDetails variable to the submitted one
            this.#sectionDetail = sect_details;

        }
        else 
        {
            this.#sectionDetail = this.default_sect_details;

        }
    }



    getSectionDetails()
    {
        return this.#sectionDetail;
    }
}

export { RegDetails };
