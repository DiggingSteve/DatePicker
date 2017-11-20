import { fail } from "assert";


class DateCal{
    constructor(year,month){
        this.year=year;
        this.month=month;
        this.dateStart=new Date(year+"-"+month+"-01");
        this.dateArr=this.getDateArr(month);
        
    }
   isLeapYear(year){
        if(year%400==0) return true;
        if(year%100==0) return false;
        if(year%4==0) return true;
   }
   getDateArr(month){
       var monthEnum={
           1:31,
           2:this.isLeapYear(this.year)?29:28,
           3:31,
           4:30,
           5:31,
           6:30,
           7:31,
           8:31,
           9:30,
           10:31,
           11:30,
           12:31
       }
       var dateArr=[];
       for(var i=1;i<=monthEnum[month*1];i++){
           dateArr.push(i);
       }
       return dateArr;
   }
   

}
export default DateCal;