/* eslint-disable prettier/prettier */
/*
 *
 * title: Enviroments
 * Description: Handle enviroments related things
 * Author: Md Minarul islam
 * Date 3/7/2022
 *
 */

// dependencies

// module scaffolding

const environment = {};

environment.staging = {
    port: 3000,
    envName: 'staging',
};

environment.production = {
    port: 5000,
    envName: 'production',
};

// determined which environmend was passed

const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport = typeof environment[currentEnvironment] === 'object'
        ? environment[currentEnvironment]
        : environment.staging;
// export module
module.exports = environmentToExport;
