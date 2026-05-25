const password = process.env.PASSWORD_STANDARD!;

export const Users = {
  standard: { username: process.env.USER_STANDARD!, password },
  locked: { username: process.env.USER_LOCKED!, password },
  problem: { username: process.env.USER_PROBLEM!, password },
  performanceGlitch: { username: process.env.USER_PERFORMANCE_GLITCH!, password },
  error: { username: process.env.USER_ERROR!, password },
  visual: { username: process.env.USER_VISUAL!, password },
  invalid: { username: process.env.USER_INVALID!, password: process.env.PASSWORD_INVALID! },
} as const;

export type UserRole = keyof typeof Users;
