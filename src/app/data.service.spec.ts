import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve post from the API via GET', () => {
    const dummyPosts = [
      { userId: '1', id: 1, body: 'hello world', title: 'interesting title' },
      { userId: '2', id: 2, body: 'hello world', title: 'interesting title' }
    ];
    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.ROOT_URL}/posts`);
    expect(request.request.method).toBe('GET');

    request.flush(dummyPosts);
  });
});
