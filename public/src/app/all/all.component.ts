import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  pets = []

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._httpService.getPets()
    .subscribe((data: any) => {
      this.pets = data.pets
    })
  }

  goToOne(id){
    this._router.navigate(['/pets/' + id])
  }

  goToEdit(id){
    this._router.navigate(['/pets/' + id + '/edit'])
  }
}
