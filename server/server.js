const express = require('express');
const cors= require('cors')
const bodyParser = require('body-parser');
const fs= require('fs')
const { getStoredItems, storeItems } = require('./data/items');
const app = express();

app.use(bodyParser.json());
app.use(cors());



app.get('/items/', async (req, res) => {
  fs.readFile(`items.json`, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData.items);
  });
});

app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

app.listen(8080);