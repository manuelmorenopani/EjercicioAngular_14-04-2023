import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2BicicletaComponent } from './componente2-bicicleta.component';

describe('Componente2BicicletaComponent', () => {
  let component: Componente2BicicletaComponent;
  let fixture: ComponentFixture<Componente2BicicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2BicicletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2BicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
