import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { LoginService } from '../../services/login.service';
import { Observable, of, throwError } from 'rxjs';
import { UserResultEntity } from 'src/app/models/user-response';
import { environment } from 'src/environments/environment';

const userInformation: UserResultEntity = {
  userId: 1,
  access_token: 'eyJpdiI6InVVK1FwTWlSOWhZNG1KYkRWU0hCQXc9PSIsInZhbHVlIjoiQm4yeml0QU1DYVoxNEpacGVEdFVuWHhGbE1LcWcySE9zalhMTWYzZmJ2cldUOU1tOEc3NjNReXhHeTNjcGRHMyIsIm1hYyI6IjBjMTA3OWZiNWRkOGE5Mzc5ODJhMjQ4NWQ5YmUyMDNjMmM3ZjhlNTNjNWE4MmFiMTEyODBhZjE4MDgwNzliOTQifQ==',
  issued: '2020-04-07T17:12:00Z',
  expires: '2020-04-08T17:12:00Z'
};

const MockLoginService: {
  BASE_URL: string;
  merchantId: number;
  login: () => Observable<UserResultEntity>;
} = {
  BASE_URL: environment.BASE_URL,
  merchantId: 71,
  login: () => of<UserResultEntity>(userInformation)
}

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ SigninComponent ],
      providers: [ { provide: LoginService, useValue: MockLoginService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login()', () => {
    const loginSpy = spyOn(MockLoginService, 'login')

    // Happy path
    loginSpy.and.returnValue(of(userInformation))
    component.onLogin()
    expect(MockLoginService.login).toHaveBeenCalled()

    // Sad path
    loginSpy.and.returnValue(throwError(() => 'Server error'))
    component.onLogin()
    expect(MockLoginService.login).toHaveBeenCalled()
  })
});
