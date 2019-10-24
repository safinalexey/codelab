import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { TitleSlideComponent } from './title-slide.component';
import { CodelabRippleAnimationComponent } from './ripple-animation/codelab-ripple-animation.component';
import { MenuRoutes, MENU_ROUTES } from '../../../common';
import { Router, ActivatedRoute } from '@angular/router';
import { SlidesDeckComponent } from '@codelab/slides/src/lib/deck/deck.component';

describe('TitleSlideComponent', () => {
  let component: TitleSlideComponent;
  let fixture: ComponentFixture<TitleSlideComponent>;
  const routerStub = {
    url: '/ngtest/currentlesson'
  };

  const slidesDeckComponentStub = {
    previousLink: '',
    nextLink: '',
    setPrevious: jasmine.createSpy('setPrevious')
  };

  const menuRoutes: MenuRoutes = [
    {
      path: 'previouslesson',
      prod: true
    },
    {
      path: 'currentlesson',
      prod: true
    }
  ];

  const activatedRouteStub = {
    snapshot: {
      pathFromRoot: [
        {
          routeConfig: menuRoutes[1]
        }
      ]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub},
        { provide: Router, useValue: routerStub },
        { provide: SlidesDeckComponent, useFactory: () => slidesDeckComponentStub },
        { provide: MENU_ROUTES, useValue: menuRoutes }
      ],
      imports: [RouterTestingModule],
      declarations: [CodelabRippleAnimationComponent, TitleSlideComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setPrevious', () => {
    expect(slidesDeckComponentStub.setPrevious).toHaveBeenCalled();
  });

  it('should render a title', () => {
    component.title = 'awesome title';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.header'));
    expect(el.nativeElement.textContent).toContain('awesome title');
  });

  it('should render a description', () => {
    component.description = 'hello world!';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.description'));
    expect(el.nativeElement.textContent).toContain('hello world!');
  });

  it('should render prerequisites', () => {
    component.prereqs = 'do this first';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.prereqs'));
    expect(el.nativeElement.textContent).toContain('do this first');
    expect(el.nativeElement.textContent).toContain('Prerequisites');
  });

  it('should not show "Prerequisites" if undefined', () => {
    component.prereqs = undefined;
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.prereqs'));
    expect(el.nativeElement.textContent).not.toContain('Prerequisites');
  });
});
