'use strict';

exports.get = function(event, context, callback) {

    var result = {
        question: 'Favourite programming language?',
        published_at: '2015-08-05T08:40:51.620Z',
        choices: [
            {choice: 'Swift', votes: 2048},
            {choice: 'Python', votes: 1024},
            {choice: 'Objective-C', votes: 512},
            {choice: 'Ruby', votes: 256}
        ]
    };

    callback(null, {
        statusCode: '200',
        body: JSON.stringify(result),
        headers: {
            // This is ALSO required for CORS to work. When browsers issue cross origin requests, they make a
            // preflight request (HTTP Options) which is responded automatically based on SAM configuration.
            // But the actual HTTP request (GET/POST etc) also needs to contain the AllowOrigin header.
            //
            "Access-Control-Allow-Origin": "*"
        }
    });
};

exports.post = function(event, context, callback) {
    var result = {
        question: 'Favourite programming language?',
        published_at: '2015-08-05T08:40:51.620Z',
        choices: [
            {choice: 'Swift', votes: 0},
            {choice: 'Python', votes: 0},
            {choice: 'Objective-C', votes: 0},
            {choice: 'Ruby', votes: 0}
        ]
    };

    callback(null, {
        statusCode: '200',
        body: JSON.stringify(result),
        headers: {
            // This is ALSO required for CORS to work. When browsers issue cross origin requests, they make a
            // preflight request (HTTP Options) which is responded automatically based on SAM configuration.
            // But the actual HTTP request (GET/POST etc) also needs to contain the AllowOrigin header.
            //
            "Access-Control-Allow-Origin": "*"
        }
    });
};