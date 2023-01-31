import { Pool } from 'pg';

const connectionString = 'postgres://tuluswtb:CZ8GNQQ5JHxtAOAQvN-yI0J96fsIv55u@babar.db.elephantsql.com/tuluswtb';

const db = new Pool({ connectionString })

export default db;