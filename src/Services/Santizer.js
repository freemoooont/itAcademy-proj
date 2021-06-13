import defaultImage from "../assets/defaultImage.svg";

const now = new Date(2021, 0, 2);
const oneDay = 1000*3600*24;

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
        return (
            obj
        )
    }
    )
    return (items)
}