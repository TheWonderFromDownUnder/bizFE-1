import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'businesses',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  providers: [DataService],
  templateUrl: './businesses.component.html',
  styleUrl: './businesses.component.css'
})
export class BusinessesComponent {

  business_list: any;
  page: number = 1;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    if (sessionStorage["page"]) {
      this.page = Number(sessionStorage["page"]);
    }
    this.business_list = this.dataService.getBusinesses(this.page);
  }

  previousPage() {
    if (this.page > 1) {
    this.page = this.page - 1
    sessionStorage["page"] = this.page;
    this.business_list = this.dataService.getBusinesses(this.page);
    }
  }

  nextPage() {
    if (this.page < this.dataService.getLastPageNumber())
    this.page = this.page + 1
    sessionStorage["page"] = this.page;
    this.business_list = this.dataService.getBusinesses(this.page);
  }

/*  business_list =  [
      {
          "name" : "Pizza Mountain",
          "town" : "Coleraine",
          "rating" : 5
      },
      {
          "name" : "Wine Lake",
          "town" : "Ballymoney",
          "rating" : 3
      },
      {
          "name" : "Sweet Desert",
          "town" : "Ballymena",
          "rating" : 4
      },
      {
          "name" : "Death Chamber",
          "town" : "Egypt",
          "rating" : 1
      },
      {
          "name" : "Green Hill",
          "town" : "South Island",
          "rating" : 5
      },
      {
          "name" : "Dream Land",
          "town" : "Pop Star",
          "rating" : 4
      },
      {
          "name" : "Kyokugen BBQ",
          "town" : "South Island",
          "rating" : 1
      },
      {
          "name" : "Ratatoing",
          "town" : "The Marvellous City",
          "rating" : 5
      }
  ]
*/

}
