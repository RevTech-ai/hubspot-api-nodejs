/**
 * OAuthService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { JsonNode } from '../model/jsonNode';
import { RefreshToken } from '../model/refreshToken';
import { RefreshTokenInfoResponse } from '../model/refreshTokenInfoResponse';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.hubapi.com/oauth';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum RefreshTokensApiApiKeys {
}

export class RefreshTokensApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: RefreshTokensApiApiKeys, value: string) {
        (this.authentications as any)[RefreshTokensApiApiKeys[key]].apiKey = value;
    }

    /**
     * Auth Level: none ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=RefreshTokensResource%20OR%20Object&defs=deleteRefreshToken)&nbsp;|&nbsp;[API Goggles](https://tools.hubteam.com/api/delete/api.hubapi.com%2Foauth%2Fv1%2Frefresh-tokens%2F%28%28%7Btoken%7D%29%29?showRequestDetails=true)&nbsp;|&nbsp;<a href='#operations-Refresh_Tokens-delete-%2Foauth%2Fv1%2Frefresh-tokens%2F%7Btoken%7D'>Permalink</a>
     * @param token 
     */
    public deleteRefreshToken (token: string) : Promise<{ response: http.IncomingMessage; body: Error;  }> {
        const localVarPath = this.basePath + '/v1/refresh-tokens/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling deleteRefreshToken.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Error;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Error");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Auth Level: none ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=RefreshTokensResource%20OR%20Object&defs=getRefreshTokenInfo)&nbsp;|&nbsp;[API Goggles](https://tools.hubteam.com/api/get/api.hubapi.com%2Foauth%2Fv1%2Frefresh-tokens%2Fhubs%2F%28%28%7BhubId%7D%29%29%2Fclients%2F%28%28%7BclientId%7D%29%29?showRequestDetails=true)&nbsp;|&nbsp;<a href='#operations-Refresh_Tokens-get-%2Foauth%2Fv1%2Frefresh-tokens%2Fhubs%2F%7BhubId%7D%2Fclients%2F%7BclientId%7D'>Permalink</a>
     * @param hubId 
     * @param clientId 
     */
    public getRefreshTokenByHubIdAndClientId (hubId: number, clientId: string) : Promise<{ response: http.IncomingMessage; body: Array<RefreshToken>;  }> {
        const localVarPath = this.basePath + '/v1/refresh-tokens/hubs/{hubId}/clients/{clientId}'
            .replace('{' + 'hubId' + '}', encodeURIComponent(String(hubId)))
            .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'hubId' is not null or undefined
        if (hubId === null || hubId === undefined) {
            throw new Error('Required parameter hubId was null or undefined when calling getRefreshTokenByHubIdAndClientId.');
        }

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling getRefreshTokenByHubIdAndClientId.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Array<RefreshToken>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<RefreshToken>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Auth Level: none ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=RefreshTokensResource%20OR%20Object&defs=getTokenAuditsByHubAndClient)&nbsp;|&nbsp;[API Goggles](https://tools.hubteam.com/api/get/api.hubapi.com%2Foauth%2Fv1%2Frefresh-tokens%2Fhubs%2F%28%28%7BhubId%7D%29%29%2Fclients%2F%28%28%7BclientId%7D%29%29%2Faudits?showRequestDetails=true)&nbsp;|&nbsp;<a href='#operations-Refresh_Tokens-get-%2Foauth%2Fv1%2Frefresh-tokens%2Fhubs%2F%7BhubId%7D%2Fclients%2F%7BclientId%7D%2Faudits'>Permalink</a>
     * @param hubId 
     * @param clientId 
     */
    public getRefreshTokensAuditsByHubIdAndClientId (hubId: number, clientId: string) : Promise<{ response: http.IncomingMessage; body: Array<JsonNode>;  }> {
        const localVarPath = this.basePath + '/v1/refresh-tokens/hubs/{hubId}/clients/{clientId}/audits'
            .replace('{' + 'hubId' + '}', encodeURIComponent(String(hubId)))
            .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'hubId' is not null or undefined
        if (hubId === null || hubId === undefined) {
            throw new Error('Required parameter hubId was null or undefined when calling getRefreshTokensAuditsByHubIdAndClientId.');
        }

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling getRefreshTokensAuditsByHubIdAndClientId.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Array<JsonNode>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<JsonNode>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Auth Level: none ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=RefreshTokensResource%20OR%20Object&defs=requestRefreshTokenInfo)&nbsp;|&nbsp;[API Goggles](https://tools.hubteam.com/api/get/api.hubapi.com%2Foauth%2Fv1%2Frefresh-tokens%2F%28%28%7Btoken%7D%29%29?showRequestDetails=true)&nbsp;|&nbsp;<a href='#operations-Refresh_Tokens-get-%2Foauth%2Fv1%2Frefresh-tokens%2F%7Btoken%7D'>Permalink</a>
     * @param token 
     */
    public getRefreshTokenByToken (token: string) : Promise<{ response: http.IncomingMessage; body: RefreshTokenInfoResponse;  }> {
        const localVarPath = this.basePath + '/v1/refresh-tokens/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling getRefreshTokenByToken.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: RefreshTokenInfoResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "RefreshTokenInfoResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Auth Level: none ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=RefreshTokensResource%20OR%20Object&defs=getTokenAudits)&nbsp;|&nbsp;[API Goggles](https://tools.hubteam.com/api/get/api.hubapi.com%2Foauth%2Fv1%2Frefresh-tokens%2F%28%28%7Btoken%7D%29%29%2Faudits?showRequestDetails=true)&nbsp;|&nbsp;<a href='#operations-Refresh_Tokens-get-%2Foauth%2Fv1%2Frefresh-tokens%2F%7Btoken%7D%2Faudits'>Permalink</a>
     * @param token 
     */
    public getRefreshTokensAuditsByToken (token: string) : Promise<{ response: http.IncomingMessage; body: Array<JsonNode>;  }> {
        const localVarPath = this.basePath + '/v1/refresh-tokens/{token}/audits'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling getRefreshTokensAuditsByToken.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Array<JsonNode>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<JsonNode>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
