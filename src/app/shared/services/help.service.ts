import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  private subject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public get show(): Observable<boolean> {
    return this.subject.asObservable();
  }

  public toggle(): void {
    this.subject.next(!this.subject.getValue());
  }
}
