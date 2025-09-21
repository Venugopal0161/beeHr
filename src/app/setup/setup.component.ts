import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
  encapsulation: ViewEncapsulation.None, // ⬅️ this allows global styles like PrimeNG to apply

})
export class SetupComponent implements OnInit {
  routeItems!: MenuItem[];



  tabs = [
    { label: 'Company', route: 'company' },
    { label: 'Branch', route: 'branch' },
    { label: 'Department', route: 'dept' }
  ];

  activeTabIndex = 0;

  onTabChange(event: any) {    
    this.activeTabIndex = event.index;
    const tab = this.tabs[event.index];
    this.router.navigate([tab.route], { relativeTo: this.route });
  }

  currentRoute = '';
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      const activeChild = this.route.firstChild?.snapshot.url[0]?.path;
      this.currentRoute = activeChild ?? 'company';
    });
  }
  ngOnInit(): void {
    console.log('this.currentRoute', this.currentRoute);
  }

  navigate(route: string) {
    this.router.navigate([route], { relativeTo: this.route });
  }

}
