import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGroupComponent } from './detail-group.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GroupsService } from '../../services/groups.service';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { GroupsResultEntity } from 'src/app/models/groups-response';

const groupInformation: GroupsResultEntity = {
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
    serieId: 1
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
  imageUrl: 'https://s3.eu-central-1.amazonaws.com/plaam.dev/modulos/merchant/71/groups/269/escuelas_clubes%281%29.jpg',
};

const MockGroupsService: {
  BASE_URL: string;
  merchantId: number;
  getGroupById: () => Observable<GroupsResultEntity>;
} = {
  BASE_URL: environment.BASE_URL,
  merchantId: 71,
  getGroupById: () => of<GroupsResultEntity>(groupInformation)
}

describe('DetailGroupComponent', () => {
  let component: DetailGroupComponent;
  let fixture: ComponentFixture<DetailGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ DetailGroupComponent ],
      providers: [ { provide: GroupsService, useValue: MockGroupsService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getGroupById()', () => {
    const getGroupByIdSpy = spyOn(MockGroupsService, 'getGroupById')

    // Happy path
    getGroupByIdSpy.and.returnValue(of(groupInformation))
    component.ngOnInit()
    expect(MockGroupsService.getGroupById).toHaveBeenCalled()
    expect(component.group).toBeTruthy()
    expect(component.group).toEqual(groupInformation)

    // Sad path
    getGroupByIdSpy.and.returnValue(throwError(() => 'Server error'))
    component.group = undefined
    component.ngOnInit()
    expect(MockGroupsService.getGroupById).toHaveBeenCalled()
    expect(component.group).toBeFalsy()
  })
});
