const express = require('express');
const app = express();
const port = 3000;

// public フォルダを静的ファイルとして提供
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`http://localhost:${port} でサーバー起動中`);
});

const newText = ".jp";
// const googlemap_api = process.env.GOOGLE_MAP_API;

// fetch('WorldMapList.json')
// .then(response=>response.json())
// .then(data=>{
//     const domainArea = document.getElementById('domain');
//     data.forEach(item => {
//         const entry = document.createElement('div');
//         entry.innerText = `${item.Name}: ${item.Domain}`;
//         domainArea.appendChild(entry);
//     });
// })
// .catch(error=>{
//     console.error(error);
// });
