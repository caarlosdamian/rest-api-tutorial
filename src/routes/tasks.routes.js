import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  patchTodo,
} from '../service/tasks.service.js';

const router = Router();

// Traer Todos los task - tareas
// GET
// localhost:5002/api/task
router.get('/', async (req, res) => {
  const tasks = await getAllTodos();
  return res.json(tasks);
});

// Traer un task - tareas
// GET
router.get('/:id', async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const todo = await getTodo(id);
    if (!todo) {
      return res.status(404).json({ message: 'Tarea no encontrad' });
    }
    return res.json(todo);
  } catch (error) {}
});

// Crear un task - tareas
// POST
router.post('/', async (req, res) => {
  try {
    const { body } = req;
    const todo = await createTodo(body);
    return res.json(todo);
  } catch (error) {
    console.log(error);
  }
});

// Editar un task - tareas
// PATCH
router.patch('/:id', async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const todo = await getTodo(id);
    if (!todo) {
      return res.status(404).json({ message: 'Tarea no encontrad' });
    }
    const newTodo = await patchTodo(id, body);
    return res.json(newTodo);
  } catch (error) {
    console.log(error);
  }
});

// Eliminar un task - tareas
// DELETE
router.delete('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;

  const todo = await getTodo(id);
  if (!todo) {
    return res.status(404).json({ message: 'Tarea no encontrad' });
  }
  await deleteTodo(id);
  return res.json({ message: `Task con id ${id} fue eliminada` });
});

export default router;
