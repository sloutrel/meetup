import { MongoClient } from 'mongodb';
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const dbUrl = process.env.DB_URL;
    const client = await MongoClient.connect(dbUrl);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: 'Meetup added' });
  }
}

export default handler;
