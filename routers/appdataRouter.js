const express = require("express");
const router = express.Router();
const connectToDatabase = require("../middlewares/database.js");
const {
  createAppData,
  getAllAppData,
  getAppDataByFilter,
  getAppDataById,
  updateAppDataById,
  deleteAppDataById,
} = require("../controllers/appdataController.js");

router.use(connectToDatabase);

router.get("/", getAllAppData);
router.post('/retrive', getAppDataByFilter);
router.get("/:uuid", getAppDataById);
router.post("/", createAppData);
router.put("/:uuid", updateAppDataById);
router.delete("/:uuid", deleteAppDataById);

module.exports = router;
