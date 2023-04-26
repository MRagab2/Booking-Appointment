const Ajv = require('ajv');
const ajv = new Ajv;

const schema={
    type:'object',
    properties:{
        'name':{
            type:'string'
        },
        'email':{
            type:'string',
            pattern:'.+\@.+\..+'
        },
        'password':{
            type:'string',
            minLength:8
        },
        'phone':{
            type:'string',
            minLength:5
        },
    },
    required:[
        'name',
        'email',
        'password',
        'phone'
    ]
};


module.exports = ajv.compile(schema);