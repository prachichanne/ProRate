let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Student Model
let commentSchema = require("../models/Comment");

// CREATE Student
router.post("/create-comment", (req, res, next) => {
    commentSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Students
router.get("/", (req, res) => {
    commentSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE student
router
.route("/update-comment/:id")
// Get Single Student
.get((req, res) => {
	commentSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Student Data
.put((req, res, next) => {
	commentSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Comment updated successfully !");
		}
	}
	);
});

// Delete Student
router.delete("/delete-comment/:id",
(req, res, next) => {
    commentSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
