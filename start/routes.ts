/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { schema } from '@ioc:Adonis/Core/Validator'


Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/archivo',async () => {
  return {file: true}
  
})

Route.post('/upload',async ({request}) => {
  try {
    if(!request.files){
      return {status:false}
    }else{
      const archivo = request.file('excel')
      //console.log(archivo)
      await archivo?.moveToDisk('../../subidos',{
        name:'excel.xls',
        
      })
      return {status:true}
    }
  } catch (error) {
    
  }

})
