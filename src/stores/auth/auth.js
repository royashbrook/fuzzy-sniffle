import { writable } from 'svelte/store';
import { PublicClientApplication, InteractionRequiredAuthError } from '@azure/msal-browser';
export const accessToken = writable(null);
export const user = writable(null);

import { msalConfig, loginRequest, tokenRequest } from "./auth.config";

const oMsal = new PublicClientApplication(msalConfig);
export const getAuth = async () => oMsal.handleRedirectPromise()
    .then(() => oMsal.getAllAccounts()[0] ?? oMsal.loginRedirect(loginRequest))
    .then(x => { if (x) { user.set(x.username) }; return x; })
    .then(x => x && oMsal
        .acquireTokenSilent({ ...tokenRequest, account: x })
        .then(x => accessToken.set(x.accessToken))
        .catch(e => e instanceof InteractionRequiredAuthError
            ? oMsal.acquireTokenRedirect({ ...tokenRequest, account: x })
            : Promise.reject(e)))