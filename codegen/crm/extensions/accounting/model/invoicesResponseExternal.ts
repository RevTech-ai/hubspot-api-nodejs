/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot\'s Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AccountingExtensionInvoice } from './accountingExtensionInvoice';

/**
* A response to a request for invoices.
*/
export class InvoicesResponseExternal {
    /**
    * Designates if the response is a success (\'OK\') or failure (\'ERR\').
    */
    'result'?: InvoicesResponseExternal.ResultEnum;
    /**
    * The list of invoices that were found for the request.
    */
    'invoices': Array<AccountingExtensionInvoice>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "result",
            "baseName": "@result",
            "type": "InvoicesResponseExternal.ResultEnum"
        },
        {
            "name": "invoices",
            "baseName": "invoices",
            "type": "Array<AccountingExtensionInvoice>"
        }    ];

    static getAttributeTypeMap() {
        return InvoicesResponseExternal.attributeTypeMap;
    }
}

export namespace InvoicesResponseExternal {
    export enum ResultEnum {
        Ok = <any> 'OK',
        Err = <any> 'ERR'
    }
}
