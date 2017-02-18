import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Angular2Apollo} from 'angular2-apollo';

import 'rxjs/add/operator/toPromise';

import {submitRepositoryMutation} from './new-entry.model';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-new-entry',
  templateUrl: 'new-entry.component.html'
})
export class NewEntryComponent {
  public error: string;
  public repoFullName: string;
  public msgs: Message[] = [];

  constructor(private router: Router,
              private apollo: Angular2Apollo) {
  }

  public submitForm(): void {
    if (!this.repoFullName) {
      return;
    }

    this.error = null;

    this.apollo.mutate({
      mutation: submitRepositoryMutation,
      variables: {
        repoFullName: this.repoFullName,
      },
    })
      .toPromise()
      .then(() => {
        this.router.navigate(['/feed/new']);
      }).catch((error) => {
        this.error = error.message;
        this.msgs.push({severity:'error', summary:'Error Message', detail:this.error});
      });
  }
}
