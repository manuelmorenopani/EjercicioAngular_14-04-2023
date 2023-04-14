import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1StringsComponent } from './componente1-strings.component';

describe('Componente1StringsComponent', () => {
  let component: Componente1StringsComponent;
  let fixture: ComponentFixture<Componente1StringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1StringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1StringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
