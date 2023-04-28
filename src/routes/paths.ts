export const domainPublic = '/auth/';
export const domainPrivate = '/';

export const paths = {
  home: `${domainPublic}`,
  login: `${domainPublic}login`,
  dashboard: `${domainPrivate}dashboard`,
  about: `${domainPrivate}about`,
} as const;