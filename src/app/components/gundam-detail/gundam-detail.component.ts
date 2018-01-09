import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Gundam } from '../../models/gundam';
import { GundamService } from '../../services/gundam.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-gundam-detail',
  templateUrl: './gundam-detail.component.html',
  styleUrls: ['./gundam-detail.component.css'],
  providers: [GundamService]
})
export class GundamDetailComponent implements OnInit {
  
  gundamId;
  selectedGundam;

  constructor(private route:ActivatedRoute,private gundamService: GundamService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.gundamId = params['id']).subscribe
    (() => this.selectedGundam = this.gundamService.getGundamById(+this.gundamId));
  }

  


}
