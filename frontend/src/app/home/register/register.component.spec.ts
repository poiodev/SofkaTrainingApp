import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../service/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { User } from '../../module/user';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const data: User = {
  name: 'poio',
  email: 'poio@gmail.com',
  password: 'poio123',
};

// const token = {'token': "gfyrdfrtryf.gtygtgtg.utftyftftyfty"}

describe('Register component', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        OverlayModule,
        BrowserAnimationsModule,
      ],
      declarations: [RegisterComponent],
      providers: [UserService, MatSnackBar],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
    service = TestBed.inject(UserService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//se crea de manera correcta y de que existe de verdad
  it('should create', () => {
    expect(RegisterComponent).toBeTruthy();
  });

  it('Form Correct', () => {
    const totalForm = component.registerData;

    expect(totalForm).not.toBeUndefined;
  });

  it('Register User', () => {

     const service2 = component["_userService"];

     service2.registerUser

  //si este metodo ha sido llamado o no
    // const spy1 = spyOn(service, 'registerUser').and.callFake(()=> );

    expect(service2).toHaveBeenCalled

  });
});
