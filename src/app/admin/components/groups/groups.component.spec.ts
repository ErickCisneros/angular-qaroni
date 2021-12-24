import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GroupsComponent } from './groups.component';
import { GroupsService } from '../../services/groups.service';
import { Observable, of, throwError } from 'rxjs';
import { GroupsResultEntity } from 'src/app/models/groups-response';
import { environment } from 'src/environments/environment';

const groupInformation: GroupsResultEntity[] = [
  {
    merchantId: 71,
    associatedGroupId: null,
    serieId: 48,
    templateUUID: null,
    status: 'ACTIVE',
    position: 1,
    serie: {
      preffix: '',
      creationDate: '',
      lastUpdateDate: '',
      serieId: 1,
    },
    type: 'PERSON',
    associationType: 'MAIN',
    isPaid: false,
    isPartner: false,
    hasPartner: true,
    hasApproval: true,
    name: 'Veterano',
    description: null,
    slug: 'veterano',
    category: null,
    groupId: 269,
    imageUrl:
      'https://s3.eu-central-1.amazonaws.com/plaam.dev/modulos/merchant/71/groups/269/escuelas_clubes%281%29.jpg',
  },
];

const MockGroupsService: {
  BASE_URL: string;
  merchantId: number;
  getGroups: () => Observable<GroupsResultEntity[]>;
} = {
  BASE_URL: environment.BASE_URL,
  merchantId: 71,
  getGroups: () => of()
}

describe('GroupsComponent', () => {
  let component: GroupsComponent;
  let fixture: ComponentFixture<GroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ GroupsComponent ],
      providers: [ { provide: GroupsService, useValue: MockGroupsService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getGroup()', () => {
    const getGroupsSpy = spyOn(MockGroupsService, 'getGroups')

    getGroupsSpy.and.returnValue(of(groupInformation))
    component.ngOnInit()
    expect(component.groups).toBeTruthy()
  })
});
