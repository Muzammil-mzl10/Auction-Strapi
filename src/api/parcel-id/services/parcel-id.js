'use strict';

/**
 * parcel-id service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parcel-id.parcel-id');
