import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHeroeComponent } from './info-heroe.component';

describe('InfoHeroeComponent', () => {
  let component: InfoHeroeComponent;
  let fixture: ComponentFixture<InfoHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoHeroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
