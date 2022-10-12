export const selectContacts = state => state.contacts;
export const selectContactsItems = state => state.contacts.items;
export const selectContactsisLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
