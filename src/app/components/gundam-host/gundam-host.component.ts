import { Component, OnInit } from '@angular/core';

import { Gundam } from '../../models/gundam';
import { GundamService } from '../../services/gundam.service';

@Component({
  selector: 'app-gundam-host',
  templateUrl: './gundam-host.component.html',
  styleUrls: ['./gundam-host.component.css'],
  providers: [GundamService]
  
})
export class GundamHostComponent implements OnInit {

  gundams: Gundam[];

  constructor(private gundamService: GundamService) { }

  ngOnInit() {
    this.gundams = this.gundamService.getGundams();
  }
  
}
