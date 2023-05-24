const router = require('express').Router();
const { Student, Campus } = require('../db');

// GET /api/students
router.get('/', async (req, res, next) => {
	try {
		const students = await Student.findAll({
			attributes: ['id', 'firstName', 'lastName'],
		});
		res.json(students);
	} catch (error) {
		next(error);
	}
});

// GET /api/students/:id
router.get('/:id', async (req, res, next) => {
	const studentId = req.params.id;
	try {
		const student = await Student.findByPk(studentId, {
			include: {
				model: Campus,
				attributes: ['id', 'name'],
			},
		});
		if (!student) {
			return res.status(404).json({ error: 'Student not found' });
		}
		res.json(student);
	} catch (error) {
		next(error);
	}
});

// POST /api/students
router.post('/', async (req, res, next) => {
	try {
		const { firstName, lastName, email } = req.body;
		const newStudent = await Student.create({
			firstName,
			lastName,
			email,
		});
		res.status(201).json(newStudent);
	} catch (error) {
		next(error);
	}
});

// PUT /api/students/:id
router.put('/:id', async (req, res, next) => {
	const studentId = req.params.id;
	try {
		const { firstName, lastName, email } = req.body;
		const [updatedRowsCount, updatedStudents] = await Student.update(
			{
				firstName,
				lastName,
				email,
			},
			{
				where: {
					id: studentId,
				},
				returning: true,
			}
		);
		if (updatedRowsCount === 0) {
			return res.status(404).json({ error: 'Student not found' });
		}
		const updatedStudent = updatedStudents[0].get();
		res.json(updatedStudent);
	} catch (error) {
		next(error);
	}
});

// DELETE /api/students/:id
router.delete('/:id', async (req, res, next) => {
	const studentId = req.params.id;
	try {
		const deletedStudent = await Student.destroy({
			where: {
				id: studentId,
			},
		});
		if (!deletedStudent) {
			return res.status(404).json({ error: 'Student not found' });
		}
		res.sendStatus(204);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
