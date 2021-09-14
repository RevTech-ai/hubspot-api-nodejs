/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class IFrameActionBody {
    'type': IFrameActionBody.TypeEnum;
    'width': number;
    'height': number;
    'url': string;
    'label'?: string;
    'propertyNamesIncluded': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "IFrameActionBody.TypeEnum"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "propertyNamesIncluded",
            "baseName": "propertyNamesIncluded",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IFrameActionBody.attributeTypeMap;
    }
}

export namespace IFrameActionBody {
    export enum TypeEnum {
        Iframe = <any> 'IFRAME'
    }
}
