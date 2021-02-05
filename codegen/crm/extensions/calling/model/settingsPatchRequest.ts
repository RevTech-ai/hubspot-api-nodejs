/**
 * Calling Extensions API
 * Provides a way for apps to add custom calling options to a contact record. This works in conjunction with the [Calling SDK](#), which is used to build your phone/calling UI. The endpoints here allow your service to appear as an option to HubSpot users when they access the *Call* action on a contact record. Once accessed, your custom phone/calling UI will be displayed in an iframe at the specified URL with the specified dimensions on that record.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* Settings update request
*/
export class SettingsPatchRequest {
    /**
    * The name of your calling service to display to users.
    */
    'name'?: string;
    /**
    * The URL to your phone/calling UI, built with the [Calling SDK](#).
    */
    'url'?: string;
    /**
    * The target height of the iframe that will contain your phone/calling UI.
    */
    'height'?: number;
    /**
    * The target width of the iframe that will contain your phone/calling UI.
    */
    'width'?: number;
    /**
    * When true, your service will appear as an option under the *Call* action in contact records of connected accounts.
    */
    'isReady'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        },
        {
            "name": "isReady",
            "baseName": "isReady",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SettingsPatchRequest.attributeTypeMap;
    }
}

