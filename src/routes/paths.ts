export const domainPublic = '/';
export const domainPrivate = '/session/';

export const paths = {
  home: `${domainPublic}`,
  login: `${domainPublic}login`,
  dashboard: `${domainPrivate}dashboard`,
  about: `${domainPrivate}about`,
} as const;