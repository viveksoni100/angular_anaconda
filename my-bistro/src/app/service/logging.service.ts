import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(item: any) {
    console.log('LOG ::: ', item);
  }

  logTableUpdated = new EventEmitter<string>();
}
