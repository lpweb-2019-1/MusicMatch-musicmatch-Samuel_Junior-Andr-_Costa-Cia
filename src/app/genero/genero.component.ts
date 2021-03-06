import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DiscoService } from '../disco.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  genero = null;

  constructor(private disco: DiscoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.genero = this.disco.encontrarGenero(parseInt(id));
  }
  
}
