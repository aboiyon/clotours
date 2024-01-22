import { Injectable } from '@angular/core';
import { CommerceLayer } from '@commercelayer/sdk';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommerceLayerServiceService {
  cl: any;

  constructor() {
        this.cl = CommerceLayer({
                organization: environment.commerceLayer.organization,
                accessToken: environment.commerceLayer.accessToken
        });
  }
}
