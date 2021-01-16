import { Restaurant } from './../pojos/Restaurant';
import { ApiService } from './../services/api.service';
import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  serachedDate: String;
restaurants:Restaurant[]=[];
  ngOnInit(): void {
   this.getAllRestaurants();
  }
 public getAllRestaurants() {
    this.service.getAllRestaurants().subscribe(
      res=>{this.restaurants=res;},
      err=>{alert("searching for restaurants")}
    );
  }

constructor(private service:ApiService){}
/*   s:string=new Date("2015-03-25").toISOString().substring(0, 16).replace("T",'-');*/
  todayDate : any=new Date("2017-03-25T12:00");

sortByDate='';
name='';
searchedName='';
searchedStatus='';
sortByStatus='';




 /*  mediaItems = [
    {
      id: 1,
      name: 'Firebug',
      Status: 'Series',
      status: 'Available',
      year: new Date("2016-03-25").toISOString().substring(0, 16).replace("T",'-'),
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: 'The Small Tall',
      Status: 'Movies',

      status: 'Available',
      year: new Date("2016-03-25").toISOString().substring(0, 16).replace("T",'-'),
      watchedOn: null,
      isFavorite: true
    }, {      id: 3,
      name: 'The Redemption',
      Status: 'Movies',

      status: 'Saturated',
      year: new Date("2016-03-25").toISOString().substring(0, 16).replace("T",'-'),
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: 'Hoopers',
      Status: 'Series',

      status: 'Saturated',
      date: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      Status: 'Movies',

      status: 'Saturated',
      year: new Date("2016-03-25").toISOString().substring(0, 16).replace("T",'-'),
      watchedOn: 1457166565384,
      isFavorite: false
    },

  {
    id:10 ,
    name: 'Firebug',
    Status: 'Series',
    status: 'Available',
    year: new Date("2016-03-25").toISOString().substring(0, 16).replace("T",'-'),
    watchedOn: 1294166565384,
    isFavorite: false
  },
  {
    id: 20,
    name: 'The Small Tall',
    Status: 'Movies',

    status: 'Available',
    year: new Date("2016-03-25").toISOString().substring(0, 16).replace("T",'-'),
    watchedOn: null,
    isFavorite: true
  }, {      id: 30,
    name: 'The Redemption',
    Status: 'Movies',

    status: 'Saturated',
    year: new Date("2016-03-25").toISOString().substring(0, 16).replace("T",'-'),
    watchedOn: null,
    isFavorite: false
  }, {
    id: 40,
    name: 'Hoopers',
    Status: 'Series',

    status: 'Saturated',
    date: null,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 50,
    name: 'Happy Joe: Cheery Road',
    Status: 'Movies',

    status: 'Saturated',
    year: new Date("2016-03-25").toISOString().substring(0, 16).replace("T",'-'),
    watchedOn: 1457166565384,
    isFavorite: false
  }
];
 */

onrestaurantDelete(restaurant:Restaurant) {
  if(confirm("Are you sure you want to delete this note?")){
    this.service.deleteRestaurant(restaurant.id).subscribe(
      res =>{
        let indexOfRestaurant = this.restaurants.indexOf(restaurant);
        this.restaurants.splice(indexOfRestaurant, 1);
      },
      err=>{alert("An error has occurred deleting the note"+restaurant.id);}
    );
  }

}
search()
{
  this.searchedName=this.name;
  this.searchedStatus =this.sortByStatus;
  this.serachedDate=this.todayDate.toISOString();
}

}


