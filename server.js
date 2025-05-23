const express = require('express');
const app = express();
const port = 3000;

// public フォルダを静的ファイルとして提供
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`http://localhost:${port} でサーバー起動中`);
});
