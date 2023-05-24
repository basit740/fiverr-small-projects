const router = require('express').Router();
const { Campus, Student } = require('../db');

// GET /api/campuses
router.get('/', async (req, res, next) => {
	try {
		const campuses = await Campus.findAll({
			attributes: ['id', 'name', 'imageUrl'],
		});
		res.json(campuses);
	} catch (error) {
		next(error);
	}
});

// GET /api/campuses/:id
router.get('/:id', async (req, res, next) => {
	const campusId = req.params.id;
	try {
		const campus = await Campus.findByPk(campusId, {
			include: {
				model: Student,
				attributes: ['id', 'firstName', 'lastName'],
			},
		});
		if (!campus) {
			return res.status(404).json({ error: 'Campus not found' });
		}
		res.json(campus);
	} catch (error) {
		next(error);
	}
});

// POST /api/campuses
router.post('/', async (req, res, next) => {
	try {
		const { name, address } = req.body;
		const newCampus = await Campus.create({
			name,
			address,
		});
		res.status(201).json(newCampus);
	} catch (error) {
		next(error);
	}
});

// PUT /api/campuses/:id
router.put('/:id', async (req, res, next) => {
	const campusId = req.params.id;
	try {
		const campus = await Campus.findByPk(campusId);
		if (!campus) {
			return res.status(404).json({ error: 'Campus not found' });
		}

		const { name, address } = req.body;
		await campus.update({ name, address });

		res.json(campus);
	} catch (error) {
		next(error);
	}
});

// DELETE /api/campuses/:id
router.delete('/:id', async (req, res, next) => {
	const campusId = req.params.id;
	try {
		const deletedCampus = await Campus.destroy({
			where: {
				id: campusId,
			},
		});
		if (!deletedCampus) {
			return res.status(404).json({ error: 'Campus not found' });
		}
		res.sendStatus(204);
	} catch (error) {
		next(error);
	}
});

// DELETE /api/campuses/:campusId/students/:studentId
router.delete('/:campusId/students/:studentId', async (req, res, next) => {
	const campusId = req.params.campusId;
	const studentId = req.params.studentId;
	try {
		const campus = await Campus.findByPk(campusId);
		if (!campus) {
			return res.status(404).json({ error: 'Campus not found' });
		}

		const student = await Student.findByPk(studentId);
		if (!student) {
			return res.status(404).json({ error: 'Student not found' });
		}

		await campus.removeStudent(student);
		res.sendStatus(204);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
