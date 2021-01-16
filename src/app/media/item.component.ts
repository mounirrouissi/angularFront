import { Restaurant } from './../pojos/Restaurant';
import {Component, EventEmitter, Input, OnInit, Output} from'@angular/core'
import { ApiService } from '../services/api.service';

@Component({
        selector:'app-item',
        templateUrl:'./item.component.html',
        styleUrls: ["./item.component.css"]

    })
export class ItemComponent implements OnInit
{
  restaurants: Restaurant[]=[];

constructor( private service:ApiService){}
ngOnInit(): void {

}
 

@Input() restaurant;
@Output() delete=new EventEmitter();
Delete(){
  alert("YO do you really wanna delete the request ?");
  this.delete.emit(this.restaurant);
}
}
