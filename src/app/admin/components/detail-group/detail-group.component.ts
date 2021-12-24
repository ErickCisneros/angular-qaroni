import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsResultEntity } from 'src/app/models/groups-response';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent implements OnInit {
  group?: GroupsResultEntity;

  constructor(
    private activatedRoute: ActivatedRoute,
    private groupsService: GroupsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.groupsService
        .getGroupById(params['id'])
        .subscribe((res) => (this.group = res));
    });
  }

}
