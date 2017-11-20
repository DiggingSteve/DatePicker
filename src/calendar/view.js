import DateCal from './date'

class CalView{
    constructor(year,month){
        this.container= document.getElementById("calcontainer");
        this.rsetDatePicker(year,month);
    }
    initDatePicker(){
      
        var weekday=this.dateObj.dateStart.getDay();
        
        var weekDom=this.createWeek(weekday);
        var html=`<table class="tb-date">
        <thead><tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr></thead>
        <tbody>
            ${weekDom}
        </tbody>
    </table>`;
    
    this.container.innerHTML+=html;
    }
    initDateTitle(){
    
     
        var html=`<div class="titleYear">${this.dateObj.year}年</div><div class="titleMonth"><input type="button" value="上一月" id="btnPre">${this.dateObj.month}月<input type="button" value="下一月" id="btnNext"></div>`;
        this.container.innerHTML+=html;
        

    }

    createWeek(shiftNum){
        var html="";
        for(var i=0;i<42;i++){
            var day=!!this.dateObj.dateArr[i-shiftNum]?this.dateObj.dateArr[i-shiftNum]:"";
            if(i%7==0)
            html+="<tr>"
      
          if(i<shiftNum)
          html+="<td></td>"
          if(i>=shiftNum)
          html+="<td>"+day+"</td>";
          if((i+1)%7==0)
          html+="</tr>"
        }
        return html;
    }
    rsetDatePicker(year,month){
        this.container.innerHTML="";
        this.dateObj=new DateCal(year,month);
        this.initDateTitle(year,month);
        this.initDatePicker(year,month);
        this.btnNext=document.getElementById("btnNext");
        this.btnPre=document.getElementById("btnPre");
        this.btnNext.onclick=()=>{
            var month=++this.dateObj.month;
            var year=this.dateObj.year;
            if(month>12) {year=++year;month=1;}
            this.rsetDatePicker(year,month);
        }
        this.btnPre.onclick=()=>{
            
            var month=--this.dateObj.month;
            var year=this.dateObj.year;
            if(month<1) {year=--year;month=12}
            console.log(month);
            this.rsetDatePicker(year,month);
        }
    }
}

export default CalView;