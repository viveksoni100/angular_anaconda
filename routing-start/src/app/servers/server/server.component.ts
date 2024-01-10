import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server!: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(id)!;
    this.route.params.subscribe(
      (params: Params) => {
        const server = this.serversService.getServer(Number(params['id']));
        console.log(server);
        if (server !== undefined) {
          this.server = server;
        } else {
          // Handle the case where the server is undefined, e.g., redirect or show an error message.
        }
      }
    );
  }

  onEdit(name: string, status: string) {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
