import { Component, OnInit } from '@angular/core';
import {BurgersService} from '../../services/burgers.service'
import { Burger } from 'src/app/interfaces/Burger';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})

export class BurgerListComponent implements OnInit {

  burgers: Burger[] = [];

  constructor(private burgersService: BurgersService){}

  ngOnInit() {
    this.getBurgers()
  }

  getBurgers(){
    this.burgersService.getBurgers()
    .subscribe(
      res =>
      {
        this.burgers = res;
      }
    )
  }

  deleteProduct(burger: Burger){
    if (burger.id) { 
      this.burgersService.deleteBurger(burger.id)
      .subscribe(
        res =>
        {
          console.log(res);
          this.getBurgers();
        }
      )
    }
  }
}
