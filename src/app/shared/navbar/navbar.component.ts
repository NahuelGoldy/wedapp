import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HostListener} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private navbarCollapse: any;
    private sidebarVisible: boolean;
    private isNavbarDark: boolean;

    constructor(public location: Location, private element: ElementRef) {
        this.sidebarVisible = false;
        this.isNavbarDark = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.navbarCollapse = navbar.getElementsByClassName('navbar-collapse')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        const verticalOffset = this.getVerticalOffset();
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
            this.isNavbarDark = true;
        } else {
            this.sidebarClose();
            if (verticalOffset < 600) {
                this.isNavbarDark = false;
            } else {
                this.isNavbarDark = true;
            }
        }
    };

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const verticalOffset = this.getVerticalOffset();
        if (verticalOffset < 600) {
            this.isNavbarDark = false;
        } else {
            this.isNavbarDark = true;
        }
    }

    getVerticalOffset(): number {
        const verticalOffset = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0;
        return verticalOffset;
    }

    hideSidebar() {
        this.sidebarClose();
        const navbarCollapse = this.navbarCollapse;
        navbarCollapse.classList.remove('show');
        this.isNavbarDark = false;
    }
}
