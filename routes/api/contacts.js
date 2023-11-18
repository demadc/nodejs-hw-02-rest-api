const express = require("express");

const contactController = require("../../controllers/contact");

const router = express.Router();
const jsonParser = express.json();

router.get("/", contactController.listContacts);

router.get("/:contactId", contactController.getContactById);

router.post("/", jsonParser, contactController.addContact);

router.delete("/:contactId", contactController.removeContact);

router.put("/:contactId", jsonParser, contactController.updateContact);

module.exports = router;
