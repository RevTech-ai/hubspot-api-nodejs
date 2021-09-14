/**
 * CRM Pipelines
 * Pipelines represent distinct stages in a workflow, like closing a deal or servicing a support ticket. These endpoints provide access to read and modify pipelines in HubSpot. Pipelines support `deals` and `tickets` object types.  ## Pipeline ID validation  When calling endpoints that take pipelineId as a parameter, that ID must correspond to an existing, un-archived pipeline. Otherwise the request will fail with a `404 Not Found` response.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PipelineStage } from './pipelineStage';

/**
* A pipeline definition.
*/
export class Pipeline {
    /**
    * The stages associated with the pipeline. They can be retrieved and updated via the pipeline stages endpoints.
    */
    'stages': Array<PipelineStage>;
    /**
    * The date the pipeline was created. The default pipelines will have createdAt = 0.
    */
    'createdAt': Date;
    /**
    * The date the pipeline was archived. `archivedAt` will only be present if the pipeline is archived.
    */
    'archivedAt'?: Date;
    /**
    * The date the pipeline was last updated.
    */
    'updatedAt': Date;
    /**
    * Whether the pipeline is archived.
    */
    'archived': boolean;
    /**
    * A unique label used to organize pipelines in HubSpot\'s UI
    */
    'label': string;
    /**
    * The order for displaying this pipeline. If two pipelines have a matching `displayOrder`, they will be sorted alphabetically by label.
    */
    'displayOrder': number;
    /**
    * A unique identifier generated by HubSpot that can be used to retrieve and update the pipeline.
    */
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stages",
            "baseName": "stages",
            "type": "Array<PipelineStage>"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Pipeline.attributeTypeMap;
    }
}

