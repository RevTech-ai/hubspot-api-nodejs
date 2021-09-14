/**
 * Companies
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ForwardPaging } from './forwardPaging';
import { SimplePublicObjectWithAssociations } from './simplePublicObjectWithAssociations';

export class CollectionResponseSimplePublicObjectWithAssociationsForwardPaging {
    'results': Array<SimplePublicObjectWithAssociations>;
    'paging'?: ForwardPaging;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObjectWithAssociations>"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging"
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseSimplePublicObjectWithAssociationsForwardPaging.attributeTypeMap;
    }
}

