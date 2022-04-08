const conf = {}

const SECRET_KEY = process.env.SECRET_KEY || 'itsasecret'
const ENCODING = process.env.ENCODING || 'utf8'

conf.auth = {
  secret: Buffer.from(SECRET_KEY, ENCODING),
  tokenType: 'Token',
  algorithm: 'HS256',
  verifyOptions: { algorithms: [ 'HS256' ] }
}

conf.database = {
  uri: `https://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_DB_REGION}.apps.astra.datastax.com`,
  options: {
    dbName: process.env.ASTRA_DB_KEYSPACE,
    astraApplicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN
  }
}

conf.swagger = {
  info: {
    title: 'Conduit API Documentation',
    version: '1.0.0'
  },
  cors: true,
  documentationPath: '/docs',
  grouping: 'tags',
  securityDefinitions: {
    'jwt': {
      'type': 'apiKey',
      'name': 'Authorization',
      'in': 'header'
    }
  },
  sortEndpoints: 'path',
  jsonEditor: true,
  tags: [
    {
      name: 'articles',
      description: 'Articles endpoint'
    },
    {
      name: 'comments',
      description: 'Comments endpoint'
    },
    {
      name: 'users',
      description: 'Users endpoint'
    },
    {
      name: 'profiles',
      description: 'Profile endpoint'
    },
    {
      name: 'tags',
      description: 'Tags endpoint'
    }
  ]
}

module.exports = conf
