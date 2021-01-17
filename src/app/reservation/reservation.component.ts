import { Client } from '../pojos/client';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  client: Client = {
    name: '',
    email:'',
    category: '',
    places: 0
  };

  ngOnInit(): void {
  }
reserve(){}
}
