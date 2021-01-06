import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    const sortField=args[0];
    const secondField=args[1];
    let value1:Array<string>;
    let  x=1;let min;
if(secondField==="Oldest")
 {
  x=-1 ;
 }
 if(sortField ==='year')
 {
   min = new Date("5555-03-25");
  for(var i = 1; i < value.length; i++) {
    if (fDate(value[sortField]) < fDate(min))
      min = value[sortField];
      value1.push(min);
    }
    return value1;
  }
    else
    {
      value.sort( (a:any,b:any)=>{
if(a[sortField]<b[sortField])
{
  return 1;

}else if(a[sortField]>b[sortField])
{
  return -1;
}else
return 0;
      });
    return value;
  }

  function fDate(s) {
    var d = new Date();
    s = s.split('-');
    d.setFullYear(s[0]);
    d.setMonth(s[1]);
    d.setDate(s[2]);
    d.setMinutes(s[3])
    return d;
  }
}


}
