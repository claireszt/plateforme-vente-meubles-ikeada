import express from 'express';
const router = express.Router();
import * as getController from './getController.js';
import * as postController from './postController.js';

router.get("/items", getController.getAllItems)
router.get("/items/:name", getController.searchByNameDesc)
router.get("/items/id/:id", getController.getItemById)
router.get("/category", getController.getAllCategories)
router.get("/sub_category", getController.getAllSubcategories)
router.get("/search_bar/category/:motcle", getController.searchCategory)
router.get("/search_bar/sub_categ/:motcle", getController.searchSubcategory)

router.use("/admin/*", postController.checkAuthAdmin)
router.post("/admin/postItem", postController.postItem)
router.post("/admin/editItem", postController.editItem)
router.post("/admin/archiveItem", postController.archiveItem)
router.post("/admin/restoreItem", postController.restoreItem)
router.post("/admin/deleteItem", postController.deleteItem)
router.post("/admin/postColor", postController.postColor)
router.post("/admin/postCateg", postController.postCategory)
router.post("/admin/postSubCateg", postController.postSubcategory)

export default router
