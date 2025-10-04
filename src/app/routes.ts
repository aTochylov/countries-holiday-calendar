export const appRoutes = {
  home: '',
  country: { path: 'country/:code', to: (countryCode: string) => `country/${countryCode}` },
};
