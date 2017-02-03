import { AuthService } from '../../api/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

 	model: any = {};
    loading = false;
	successful = true;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(
                successful => {
					if(successful) {
                    	this.router.navigate([this.returnUrl]);
					} else {
						this.successful = false;
					}
                    this.loading = false;
                });
    }
}