import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesService } from 'src/app/services/categories.service';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { MockGetMoviesService } from 'src/app/services/MockGetMoviesService';
import { CategoriesComponent } from '../categories/categories.component';
import { MovieSearchComponent } from '../movie-search/movie-search.component';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent],
      imports:[ HttpClientModule],
      providers:[{provide:GetMoviesService,useClass:MockGetMoviesService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get data', () => {
    expect(component.movies.length).toBe(2);
  });
});
