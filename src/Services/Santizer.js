import defaultImage from "../assets/defaultImage.svg";

const now = new Date(2021, 0, 2);
const oneDay = 1000*3600*24;
const month = [
    "Января","Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Декабря"
]

export const sanitizeData = (items) => {
    items.map(function(obj){
        if (!obj.image){
            obj.image = defaultImage;
        }
        const start = new Date(0);
        start.setSeconds(obj.startdate);
        obj.startdate = start;

        if (obj.enddate !== "0") {
            const end = new Date(0);
            end.setSeconds(obj.enddate);
            obj.enddate = end;
        } else {obj.enddate = null}

        obj.normalName = obj.fullname;
        obj.fullname = obj.fullname.toLowerCase();

        const daysRemainToStart = Math.ceil( (start.getTime() - now.getTime()) / oneDay);

        if(obj.enddate === obj.startdate){
            obj.enddate = null;
        }

        if(obj.enddate){
             const daysRemainToEnd = Math.ceil( (obj.enddate.getTime() - now.getTime()) / oneDay);
             daysRemainToEnd <= 0 ? obj.status = false : obj.status = true;
        }else{
            daysRemainToStart <= 0 ? obj.status = false : obj.status = true;
        }

        if(!obj.status){
            obj.enddate = "12/09/2025";
            obj.startdate = "12/09/2025";
        }
        obj.daysRemain = daysRemainToStart <= 0 ? 0 : daysRemainToStart;

        obj.dateForRender = dateRender(obj.status,obj.enddate,obj.startdate);

        obj.organizers = obj.organizers.split(/,/);
        return (
            obj
        )
    }
    )
    return (items)
}

const dateRender = (status, enddate, startdate) => {
    if (status) {
        if (enddate) {
            if(startdate.getYear() !== enddate.getYear()){
                return (`${startdate.getDate()} ${month[startdate.getMonth()]} ${startdate.toLocaleDateString('default', {year: 'numeric'})} - ${enddate.getDate()} ${month[enddate.getMonth()]}  ${enddate.toLocaleDateString('default', {year: 'numeric'})} `)
            }
            else if (startdate.getMonth() !== enddate.getMonth()) {
                return (`${startdate.getDate()} ${month[startdate.getMonth()]} - ${enddate.getDate()} ${month[enddate.getMonth()]} ${startdate.toLocaleDateString('default', {year: 'numeric'})}`)
            } else return (`${startdate.getDate()} - ${enddate.getDate()} ${month[startdate.getMonth()]} ${startdate.toLocaleDateString('default', {year: 'numeric'})}`)
        } else return (`${startdate.getDate()} ${month[startdate.getMonth()]} ${startdate.toLocaleDateString('default', {year: 'numeric'})}`)
    } else return ('МЕРОПРИЯТИЕ ЗАВЕРШЕНО')
}