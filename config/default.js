"use strict";

module.exports = {
    app: {
        port: 3003
    },
    database: {
        MYSQLDBHostname: '',
        MYSQLDBUsername: '',
        MYSQLDBPassword: '',
        MYSQLDBName: '',
    },
    constants: {
        cookieAge: 24 * 60 * 60 * 1000, /* one day in microseconds */
        maxConnectionSequelize: 10,
        minConnectionsSequelize: 1,
        idleTimeSequelize: 3600000,
        sessionTTLAPP: 7 * 24 * 60 * 60,
        sessionTTL: 45 * 60, /* 45 min in sec */
        production: false,
        sessionAge: 60 * 1000, /* in microseconds */
        rabbitMQBulk: 10,
        rabbitMQBulkElastic: 10,
        elasticRequestTimeout: 1000, /* in microseconds */
        requestTimeoutSequelize: 30000, /* in microseconds */
        dnlMobileVerificationTtl: 30000 /* in microseconds */
    },
    mailer: {
        user: '',
        pass: ''
    },
    endpoints: {
        login: 'http://localhost:3003/api/v1/auth/login', 
        signup: 'http://localhost:3003/api/v1/auth/signup', 
        confirm: 'http://localhost:3003/api/v1/auth/confirm', 
    }
}
