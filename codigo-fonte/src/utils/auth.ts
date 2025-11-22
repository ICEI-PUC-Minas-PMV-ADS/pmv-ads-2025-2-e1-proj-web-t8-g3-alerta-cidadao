// src/utils/auth.ts
export type User = {
  id: string;
  name?: string;
  email: string;
  cpf?: string;
  password: string;
  avatar?: {
    bg: string; // cor de fundo em hex
    initial: string;
  };
};

const USERS_KEY = "app_users_v1";
const CURRENT_USER_KEY = "app_currentUser_v1";

function readUsers(): User[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentUser(): User | null {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user: User | null) {
  if (!user) localStorage.removeItem(CURRENT_USER_KEY);
  else localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function randColorHex() {
  // Gera cor pastel agradável
  const h = Math.floor(Math.random() * 360);
  const s = 65 + Math.floor(Math.random() * 10);
  const l = 55 + Math.floor(Math.random() * 5);
  return `hsl(${h} ${s}% ${l}%)`;
}

function generateAvatarFor(nameOrEmail = "") {
  const initial = (nameOrEmail || "").trim().charAt(0).toUpperCase() || "U";
  return { bg: randColorHex(), initial };
}

export function registerUser(input: {
  name?: string;
  email: string;
  cpf?: string;
  password: string;
}) {
  const users = readUsers();
  if (users.some(u => u.email === input.email)) {
    throw new Error("E-mail já cadastrado");
  }
  const newUser: User = {
    id: (Date.now() + Math.random()).toString(36),
    name: input.name,
    email: input.email,
    cpf: input.cpf,
    password: input.password,
    avatar: generateAvatarFor(input.name || input.email),
  };
  users.push(newUser);
  writeUsers(users);
  setCurrentUser(newUser);
  return newUser;
}

export function loginUser(email: string, password: string) {
  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return null;
  // se o usuário não tiver avatar, gere e salve
  if (!user.avatar) {
    user.avatar = generateAvatarFor(user.name || user.email);
    writeUsers(users);
  }
  setCurrentUser(user);
  return user;
}

export function logoutUser() {
  setCurrentUser(null);
}
