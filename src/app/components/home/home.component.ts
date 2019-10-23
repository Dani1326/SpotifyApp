import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMusiquitaPro().subscribe((data: any) =>{
      this.nuevasCanciones = data.albums.items;
      console.log(data.albums.items);
    })
  }

}
