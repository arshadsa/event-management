import express from "express";
import authentication from "../middleware/authentication.mjs";
import authorization from "../middleware/authorization.mjs";
import {
  confirmEmail,
  controlUser,
  deleteUser,
  createUser,
  loginUser,
  updateProfile,
  listUsers,
  profile
} from "../controller/user.controller.mjs";

const router = express.Router();

router.get("/", listUsers);
router.get("/profile", authentication, profile);
router.post("/signup", createUser);
router.get("/confirm_email", confirmEmail);
router.post("/login", loginUser);
router.patch("/update", authentication, updateProfile);
// router.patch("/control/:email", authentication, authorization("admin"), controlUser);
router.patch("/control/:email", controlUser);
router.delete("/delete/:email", deleteUser);


export default router