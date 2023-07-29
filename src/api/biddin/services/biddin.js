'use strict';

/**
 * biddin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::biddin.biddin');
