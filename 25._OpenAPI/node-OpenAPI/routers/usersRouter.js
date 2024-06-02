import { Router } from "express";
const router = Router();

let currentId = 3;
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

/**
 * @openapi
 * /api/users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                   name:
 *                     type: string
 *                     description: The user's name.
 */
router.get("/api/users", (req, res) => {
    res.send({ data: users });
});

/**
 * @openapi
 * /api/users:
 *   post:
 *     description: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *     responses:
 *       200:
 *         description: Returns the user that was created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user ID.
 *                 name:
 *                   type: string
 *                   description: The user's name.
 */
router.post("/api/users", (req, res) => {
    const {name} = req.body;
    if (!name) {
        res.status(400).send({ error: 'Name is required' });
        return;
    }
    currentId += 1;
    let newUser = { id: currentId, name: name };
    users.push(newUser);

    res.send({ data: newUser });
});

export default router;