const express = require('express')
const route = express.Router()
const services = require('../services/render')

/**
 * @description Root Route
 * @method GET
 */

route.get("/",services.HomeRoutes)

/**
 * @description Add Route
 * @method GET
 */

route.get("/add",services.AddRoute)

/**
 * @description Update Route
 * @method GET
 */

route.get("/update",services.UpdateRoute)

module.exports = route