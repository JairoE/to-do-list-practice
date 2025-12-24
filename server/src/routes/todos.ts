import {Router, Request, Response} from "express";
import {TodoItem} from "../db";

const router = Router();

// POST /api/todos
// Description: Creates a todo list item for a given user.
router.post("/", async (req: Request, res: Response) => {
  const {text, userId, completed} = req.body;
  console.log("text", text);
  console.log("userId", userId);
  console.log("completed", completed);
  if (!text || !userId) {
    return res.status(400).json({message: "Text and userId are required"});
  }

  try {
    const todo = await TodoItem.create({text, userId, completed});
    return res.status(201).json(todo);
  } catch (error) {
    console.error("Error creating todo item:", error);
    return res.status(500).json({message: "Error creating todo item", error});
  }
});

// GET /api/todos
// Description: Gets all todo items for a specific user.
router.get("/", async (req: Request, res: Response) => {
  const {userId} = req.query;
  try {
    const todos = await TodoItem.findAll({where: {userId: userId}});
    return res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos for user:", error);
    return res
      .status(500)
      .json({message: "Error fetching todos for user", error});
  }
});

// PUT /api/todos/:id
// Description: Updates an existing todo item.
router.put("/:id", async (req: Request, res: Response) => {
  const {id} = req.params;
  const {text, completed} = req.body;

  if (!id) {
    return res.status(400).json({message: "Id and completed are required"});
  }

  try {
    const todo = await TodoItem.findByPk(id);
    if (!todo) {
      return res.status(404).json({message: "Todo not found"});
    }
    if (text) {
      todo.text = text;
    }
    if (completed !== undefined) {
      todo.completed = completed;
    }
    await todo.save();
    return res.status(200).json(todo);
  } catch (error) {
    console.error("Error updating todo item:", error);
    return res.status(500).json({message: "Error updating todo item", error});
  }
});

export default router;
