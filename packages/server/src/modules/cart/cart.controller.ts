import {
  Body,
  Controller,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
// import { Product } from 'src/products';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import products,{Product} from '../../products'

interface CartItem extends Product{
  quantity:number
}

interface Cart{
  cartItems:CartItem[]
}

const initialCart=(indexes:number[]):Cart=>({
  cartItems:indexes.map(index=>(
    {
      ...products[index],
      quantity:1
    }
  ))
})

@Controller('cart')
export class CartController {
  private carts:Record<number,Cart>={
    1:initialCart([0,2,4]),
    2:initialCart([1,3]),
  }
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    // return { userId: req.user.userId };
    return this.carts[req.user.userId] ?? {cartItems:[]}
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() {id}:{id:string}): Promise<Cart>{

  }
  }

