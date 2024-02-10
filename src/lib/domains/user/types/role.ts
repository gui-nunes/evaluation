const role = {
  admin: 'admin',
  manager: 'manager',
  leader: 'leader',
  colaborator: 'colaborator',
} as const;

export type Role = keyof typeof role;
