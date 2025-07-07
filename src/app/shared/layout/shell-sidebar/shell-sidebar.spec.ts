import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellSidebar } from './shell-sidebar';

describe('ShellSidebar', () => {
  let component: ShellSidebar;
  let fixture: ComponentFixture<ShellSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
