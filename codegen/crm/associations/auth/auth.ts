// typings for btoa are incorrect
//@ts-ignore
import * as btoa from "btoa";
import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class HapikeyAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "hapikey";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setQueryParam("hapikey", this.apiKey);
    }
}

/**
 * Applies oauth2 authentication to the request context.
 */
export class Oauth2Authentication implements SecurityAuthentication {
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    public constructor(private accessToken: string) {}

    public getName(): string {
        return "oauth2";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    }
}

/**
 * Applies oauth2 authentication to the request context.
 */
export class Oauth2LegacyAuthentication implements SecurityAuthentication {
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    public constructor(private accessToken: string) {}

    public getName(): string {
        return "oauth2_legacy";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    }
}


export type AuthMethods = {
    "hapikey"?: SecurityAuthentication,
    "oauth2"?: SecurityAuthentication,
    "oauth2_legacy"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "hapikey"?: ApiKeyConfiguration,
    "oauth2"?: OAuth2Configuration,
    "oauth2_legacy"?: OAuth2Configuration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }

    if (config["hapikey"]) {
        authMethods["hapikey"] = new HapikeyAuthentication(
            config["hapikey"]
        );
    }

    if (config["oauth2"]) {
        authMethods["oauth2"] = new Oauth2Authentication(
            config["oauth2"]["accessToken"]
        );
    }

    if (config["oauth2_legacy"]) {
        authMethods["oauth2_legacy"] = new Oauth2LegacyAuthentication(
            config["oauth2_legacy"]["accessToken"]
        );
    }

    return authMethods;
}