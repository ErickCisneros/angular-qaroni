import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsResultEntity } from 'src/app/models/groups-response';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  groups: Observable<GroupsResultEntity[]> = this.groupsService.getGroups();

  constructor(private groupsService: GroupsService) {}

  ngOnInit(): void {}
}
