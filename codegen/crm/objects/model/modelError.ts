/**
 * CRM Objects
 * CRM objects such as companies, contacts, deals, line items, products, tickets, and quotes are standard objects in HubSpot’s CRM. These core building blocks support custom properties, store critical information, and play a central role in the HubSpot application.  ## Supported Object Types  This API provides access to collections of CRM objects, which return a map of property names to values. Each object type has its own set of default properties, which can be found by exploring the [CRM Object Properties API](https://developers.hubspot.com/docs/methods/crm-properties/crm-properties-overview).  |Object Type |Properties returned by default | |--|--| | `companies` | `name`, `domain` | | `contacts` | `firstname`, `lastname`, `email` | | `deals` | `dealname`, `amount`, `closedate`, `pipeline`, `dealstage` | | `products` | `name`, `description`, `price` | | `tickets` | `content`, `hs_pipeline`, `hs_pipeline_stage`, `hs_ticket_category`, `hs_ticket_priority`, `subject` |  Find a list of all properties for an object type using the [CRM Object Properties](https://developers.hubspot.com/docs/methods/crm-properties/get-properties) API. e.g. `GET https://api.hubapi.com/properties/v2/companies/properties`. Change the properties returned in the response using the `properties` array in the request body.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ErrorDetail } from './errorDetail';

export class ModelError {
    /**
    * A human readable message describing the error along with remediation steps where appropriate
    */
    'message': string;
    /**
    * A unique identifier for the request. Include this value with any error reports or support tickets
    */
    'correlationId': string;
    /**
    * The error category
    */
    'category': string;
    /**
    * A specific category that contains more specific detail about the error
    */
    'subCategory'?: string;
    /**
    * further information about the error
    */
    'errors'?: Array<ErrorDetail>;
    /**
    * Context about the error condition
    */
    'context'?: { [key: string]: Array<string>; };
    /**
    * A map of link names to associated URIs containing documentation about the error or recommended remediation steps
    */
    'links'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "correlationId",
            "baseName": "correlationId",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "subCategory",
            "baseName": "subCategory",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorDetail>"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "{ [key: string]: Array<string>; }"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}

