import { MongoClient } from 'mongodb';
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const user = process.env.MONGO_USERNAME;
    const pw = process.env.MONGO_PW;
    const client = await MongoClient.connect(
      `mongodb+srv://${user}:${pw}@cluster0.2l4u3.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: 'Meetup added' });
  }
}

export default handler;
