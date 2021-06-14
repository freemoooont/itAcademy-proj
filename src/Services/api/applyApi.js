import axios from "axios";

const failResp = 'Не верный формат запроса';
export const RequestApi = {
    async applyInCourse(postData){
        const {data} = await axios.post('https://open.istu.edu/api/apply.php',{
            lastname: postData.lastname,
            fristname: postData.firstname,
            surname: postData.surname,
            email: postData.email
        })
        return ({
            data,

        })
    }
}