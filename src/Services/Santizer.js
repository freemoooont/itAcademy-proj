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
        obj.description = obj.description.replace(/(<(\/?[^>]+)>)/g, '');

        const daysRemain = Math.ceil( (start.getTime() - now.getTime()) / oneDay);

        daysRemain <= 0 ? obj.status = false : obj.status = true;
        obj.daysRemain = daysRemain <= 0 ? 0 : daysRemain

        obj.dateForRender = dateRender(obj.status,obj.enddate,obj.startdate)
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
            if (startdate.getMonth() !== enddate.getMonth()) {
                return (`${startdate.getDate()} ${month[startdate.getMonth()]} - ${enddate.getDate()} ${month[enddate.getMonth()]} ${startdate.toLocaleDateString('default', {year: 'numeric'})}`)
            } else return (`${startdate.getDate()} - ${enddate.getDate()} ${month[startdate.getMonth()]} ${startdate.toLocaleDateString('default', {year: 'numeric'})}`)
        } else return (`${startdate.getDate()} ${month[startdate.getMonth()]} ${startdate.toLocaleDateString('default', {year: 'numeric'})}`)
    } else return ('МЕРОПРИЯТИЕ ЗАВЕРШЕНО')
}