
class Student
{
    constructor(name, gender, regno)
    {
        this.name = name;
        this.gender = gender;
        this.regno = regno;
    }
}

class Subject 
{
    constructor(name, firstCa = null, secondCa = null, thirdCa = null, exam = null)
    {
        this.name = name;
        this.firstCa = firstCa;
        this.secondCa = secondCa;
        this.thirdCa = thirdCa;
        this.exam = exam;
    }
    getFirstCa()
    {
        return this.firstCa;
    }
    setFirstCa(value)
    {
        this.firstCa = value;
    }

}

class Scoresheet 
{
    constructor(student, subject)
}