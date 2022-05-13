export const msalConfig = {
    auth: {
        clientId: "b1babd89-d925-47f7-ad78-2c7e2d36b1a2",
        authority: "https://login.microsoftonline.com/10e6cb33-238d-4dba-91a7-6f6297df795a",
        redirectUri: location.origin,
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};
export const loginRequest = {
    scopes: ["User.Read"]
};
export const tokenRequest = {
    scopes: ["User.Read", "Files.Read.All"],
};