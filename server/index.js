require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/pens', (req, res, next) => {
  const sql = `
		SELECT "p"."name",
		"b"."name" as "brand",
		"c"."name" as "category",
		"s"."name" as "sale",
		"p"."price",
		"p"."colors",
		"p"."penId" as "id",
		"p"."type"
		FROM "pens" as "p"
		LEFT JOIN "brand" as "b" using ("brandId")
		LEFT JOIN "category" as "c" using ("categoryId")
		LEFT JOIN "sales" as "s" using ("salesId")
		ORDER BY "penId" DESC;
	`
  db.query(sql)
    .then(result => {
      if (!result) return next(new ClientError('Internal error - code333', 400))
      res.json(result.rows)
    })
    .catch(err => next(err))
})

app.get('/api/fountainpens/:parameter', (req, res, next) => {
  const { parameter } = req.params
  if (!parameter) return next(new ClientError('Product parameter missing', 400))
  let sql
  if (parameter === 'all') {
    sql = `
		SELECT "p"."name",
		"b"."name" as "brand",
		"c"."name" as "category",
		"s"."name" as "sale",
		"p"."price",
		"p"."colors",
		"p"."penId" as "id",
		"p"."type"
		FROM "pens" as "p"
		LEFT JOIN "brand" as "b" using ("brandId")
		LEFT JOIN "category" as "c" using ("categoryId")
		LEFT JOIN "sales" as "s" using ("salesId")
		ORDER BY "penId" DESC;
	`
    db.query(sql)
      .then(result => {
        if (!result) return next(new ClientError('Internal error - code333', 400))
        res.json(result.rows)
      })
      .catch(err => next(err))
  } else {
    sql = `
		SELECT "p"."penId" as "id",
			"p"."name",
			"b"."name" as "brand",
			"p"."colors",
			"c"."name" as "category",
			"s"."name" as "sales",
			"p"."price",
			"p"."type"
			FROM "pens" as "p"
			LEFT JOIN "brand" as "b" using ("brandId")
			LEFT JOIN "category" as "c" using ("categoryId")
			LEFT JOIN "sales" as "s" using ("salesId")
			WHERE "type" = $1
			ORDER BY "id"
		`
    const param = [parameter]
    db.query(sql, param)
      .then(result => {
        if (!result) return next(new ClientError('Internal error code-334', 400))
        res.json(result.rows)
      })
      .catch(err => next(err))
  }
})

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
