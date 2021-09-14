/**
 * Associations
 * Associations define the relationships between objects in HubSpot. These endpoints allow you to create, read, and remove associations.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PublicAssociation } from './publicAssociation';

export class BatchInputPublicAssociation {
    'inputs': Array<PublicAssociation>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<PublicAssociation>"
        }    ];

    static getAttributeTypeMap() {
        return BatchInputPublicAssociation.attributeTypeMap;
    }
}

