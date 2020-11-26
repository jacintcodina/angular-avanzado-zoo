import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeperComponent } from './keepers.component';

describe('KeeperComponent', () => {
  let component: KeeperComponent;
  let fixture: ComponentFixture<KeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeeperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
