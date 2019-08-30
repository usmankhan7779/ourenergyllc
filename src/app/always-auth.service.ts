import { Injectable } from '@angular/core'
import { CanActivate, Router } from "@angular/router"
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

export class UserService {
  isLoggedIn(): boolean {
    let token = localStorage.getItem('token')
    let isAdmin = localStorage.getItem('is_admin')
    if (token != null && isAdmin == 'false') {
      return true
    } else {
      return false
    }
  }
  private datas = new BehaviorSubject<any>(null)
  data = this.datas.asObservable()
  changeData(dataa: any) {
    this.datas.next(dataa)
  }
  private datass = new BehaviorSubject<any>(null)
  dataa = this.datass.asObservable()
  changeDataa(dataa: any) {
    this.datass.next(dataa)
  }
  private datass1 = new BehaviorSubject<any>(null)
  dataa1 = this.datass1.asObservable()
  changeDataa1(dataa1: any) {
    this.datass1.next(dataa1)
  }
}
export class AdminService {
  isAdminLoggedIn(): boolean {
    let token = localStorage.getItem('token')
    let check = localStorage.getItem('is_admin')
    if (token != null && check == 'true') {
      return true
    } else {
      return false
    }
  }
}
@Injectable()
export class AlwaysAuthService implements CanActivate {
  constructor() { }
  canActivate() {
    return true
  }
}
@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
  canActivate() {
    if (this.userService.isLoggedIn()) {
      return true
    } else {
      this.router.navigate(['/'])
    }
  }
}
@Injectable()
export class OnlyLoggedInUsersGuardAdmin implements CanActivate {
  constructor(private userService: UserService, private admin: AdminService, private router: Router) { }
  canActivate() {
    if (this.admin.isAdminLoggedIn()) {
      return true
    } else {
      this.router.navigate(['/'])
    }
  }
}
@Injectable()
export class OnlyLoggedOutUsersGuard implements CanActivate {
  constructor(private userService: UserService, private admin: AdminService, private router: Router) { }
  canActivate() {
    if (this.admin.isAdminLoggedIn()) {
      if (!this.admin.isAdminLoggedIn()) {
        return true
      } else {
        this.router.navigate(['/adminportal'])
      }
    } else {
      if (!this.userService.isLoggedIn()) {
        return true
      } else {
        this.router.navigate(['/dashboard'])
      }
    }
  }
}