import {Component} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent {
    
  private items: MenuItem[];

    ngOnInit() {
        this.items = [
                {label: 'GitHunt', routerLink: ['/feed/top']},
                {label: 'Top', icon: 'fa-level-up', routerLink: ['/feed/top']},
                {label: 'Hot', icon: 'fa-heart',routerLink: ['/feed/hot']},
                {label: 'New', icon: 'fa-flash', routerLink: ['/feed/new']}
            ];
        }
}
