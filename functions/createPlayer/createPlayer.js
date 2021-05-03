const faunadb = require('faunadb')

const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

const q = faunadb.query

const handler = async (event) => {
  console.log('heyoo');
  try {
    const { nickname } = JSON.parse(event.body);
    const req = await faunaClient.query(
      q.Create(
        q.Collection("players"),
        {
          data: {
            nickname,
            level: 0
          }
        }
      )
    )
    return {
      statusCode: 200,
      body: JSON.stringify(req),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
