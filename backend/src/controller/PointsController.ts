import knex from '../database/connection';
import { Request, Response} from 'express';
 
class PointsController{
    async index(request: Request, response: Response){
        const { city, uf, items } = request.query;

        const parsedItems = String(items).split('').map(item => Number(item.trim()))

        const points = await knex('points')
        .join('points_items','points.id','=','points_items.point_id')
        .whereIn('points_items.item_id', parsedItems)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('points.*')


        return response.json(points);
    }

    async show(request: Request, response: Response){
        const { id } = request.params;
        const point = await knex('points').where('id', id).first();

        if(!point){
            return response.status(400).json({ message: 'point not found'})
        }

        //CRIAR UM FILTRO Q AS IMAGES DE DETERMINADO POINT
        const items = await knex('items')
        .join('points_items','items.id', '=', 'points_items.item_id')
        .where('points_items.point_id', id).select('items.title')


        return response.json({point, items});
    }

    async create(request: Request, response: Response) {
    
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
    
        } = request.body;
    
        // Caso haja erro, remover o transaction pos esta bugando
        const trx = await knex.transaction();
    
        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };

        // trx = knex
        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id: number) =>{
            return {
                item_id,
                point_id,
            };
        });
    
        //trx = knex
        await trx('points_items').insert(pointItems);
        
        await trx.commit();

        return response.json({
            id: point_id,
            ...point, 
        })
    }
}

export default PointsController;