import {Component, EventEmitter, Input, Output} from'@angular/core'

@Component({
        selector:"app-item",
        templateUrl:'./item.component.html',
        styleUrls: ["./item.component.css"]

    })
export class ItemComponent
{
@Input() mediaItem;
@Output() delete=new EventEmitter();
name:String="Cole";
Delete(){
  alert("YO do you really wanna delete the request ?");
  this.delete.emit(this.mediaItem);
}
}
