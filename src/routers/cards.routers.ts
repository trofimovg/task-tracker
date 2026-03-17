import express, { Request,Response } from 'express';
import { Card, CreateCardRequest, GetCardsResponse } from '../types/cards';
import { idParams } from '../types/common';

export const cardsRouter = express.Router(); // Створюємо роутер для карток

 cardsRouter.get('/', (req: Request<{}, {}>, res: Response<GetCardsResponse>) => {

}); // Логіка для отримання всіх карток 

 
cardsRouter.get('/:id', (req: Request<idParams, {}>, res: Response<Card>) => {

}); // Логіка для отримання картки за ID
cardsRouter.post('/', (req: Request<{}, CreateCardRequest>, res: Response<Card>) => {
 //  Тут можна реалізувати логіку для отримання всіх карток
}); // Логіка для створення нової картки
cardsRouter.put('/:id', (req: Request<idParams, Card>, res: Response<Card>) => {

}); // Логіка для оновлення картки за ID
cardsRouter.delete('/:id', (req: Request<idParams  >, res: Response<void>) => {

}); // Логіка для видалення картки за ID




