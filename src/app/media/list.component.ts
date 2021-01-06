import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
year:'';
sortByDate='';
name='';
searchedName='';
searchedMedium='';
sortByMedium='';
  mediaItems = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: new Date("2016-03-25").toISOString().substring(0, 16).replace("T",'-'),
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: new Date("2015-03-25").toISOString().substring(0, 16).replace("T",'-'),
      watchedOn: null,
      isFavorite: true
    }, {      id: 3,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: new Date("2017-03-25T12:00").toISOString().substring(0, 16).replace("T",'-'),
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: new Date("2018-03-25").toISOString().substring(0, 16).replace("T",'-'),
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];

  onMediaItemDelete(mediaItem) { }
  searchName()
  {
    this.searchedName=this.name;
    this.searchedMedium =this.sortByMedium;
  }
}


