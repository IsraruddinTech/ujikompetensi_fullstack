import express from 'express'
// import { getAllMenu,getAllMenuById,createMenu,updateMenu,deleteMenu } from '../controller/MenuController.js'
import { createKopi, deleteKopi, getAllKopi, getAllKopiById, updateKopi } from '../controller/KopiController.js'
const RouterKopi=express.Router()

RouterKopi.get('/',getAllKopi)
RouterKopi.get('/find/:id',getAllKopiById)
RouterKopi.post('/create',createKopi)
RouterKopi.put('/update/:id',updateKopi)
RouterKopi.delete('/delete/:id',deleteKopi)

export default RouterKopi