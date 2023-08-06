import express from "express";
import TodosCtrl from "./todos.controller.js";

const router = express.Router();

router.route("/").get(TodosCtrl.apiGetTodos);

// router
//   .route("/")
//   .post(ReviewsCtrl.apiPostReview)
//   .put(ReviewsCtrl.apiUpdateReview)
//   .delete(ReviewsCtrl.apiDeleteReview);

export default router;
