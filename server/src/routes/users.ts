import { Router, Request, Response } from 'express';
import { User } from '../db';

const router = Router();

// POST /api/users
// Description: Creates a user.
router.post('/', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const user = await User.create({ email });
    return res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Error creating user", error });
  }
});

// GET /api/users/:id
// Description: Gets a user by ID.
router.get('/:id', async (req: Request, res: Response) => {
  // TODO: implement fetching a user by id
  res.status(501).json({ message: "TODO: implement fetching a user by id" });
});

export default router;

