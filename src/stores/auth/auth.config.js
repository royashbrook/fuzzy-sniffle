export const msalConfig = {
    auth: {
        clientId: "9ca5c967-1685-4bbb-b6a9-3bb253792607",
        authority: "https://login.microsoftonline.com/343581ac-7887-44b2-91c3-96c7fc5b4a6d",
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