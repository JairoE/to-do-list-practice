const BASE_URL = "/api";

export const createUser = async () => {
  // TODO: implement user creation
  // e.g. return fetch(`${BASE_URL}/users`, { method: 'POST', ... })
  throw new Error("TODO: implement user creation");
};

export const getUser = async (id: number) => {
  // TODO: implement fetching a user
  throw new Error("TODO: implement fetching a user");
};

export const createTodoItem = async (text: string, userId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      body: JSON.stringify({text, userId, completed: false}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    return response.json();
  } catch (error) {
    console.error("Error creating todo item:", error);
    throw error;
  }
};

export const getTodosForUser = async (userId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/todos?userId=${userId}`);
    console.log("response", response);
    return response.json();
  } catch (error) {
    console.error("Error fetching todos for user:", error);
    throw error;
  }
};

export const updateTodoItem = async (
  id: number,
  updates: {text?: string; completed?: boolean}
) => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(updates),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    return response.json();
  } catch (error) {
    console.error("Error updating todo item:", error);
    throw error;
  }
};
