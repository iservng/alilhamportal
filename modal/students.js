
import { Db } from '../db/dbconnect.js';
class Students 
{
    // This function takes a student and returns the specific stidents information
    static getStudentPersonalInfo(student_id)
    {
        let collectionName = "student_personal_info";
        let studentId = student_id;

        // getOne(specificId, collectionName);
        let info = Db.getOne(studentId, collectionName);
        // console.log(info);
        return info;

    }


    



}
export { Students };