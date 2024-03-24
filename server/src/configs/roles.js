const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers', 'manageArchetypes'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
