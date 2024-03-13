import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';

@Injectable({
  providedIn: 'root'
})

interface Server {
  id: number, 
  name: string, 
  status: string
}

export class ServerResolver implements ResolveFn<Server> {

  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | 
  Promise<Server> | Server {
    return this.serversService.getServer(+route.params['id']);
  }
}
