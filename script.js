const newText = ".jp";
const googlemap_api = process.env.GOOGLE_MAP_API;

fetch('./WorldMapList.json')
.then(response=>response.json())
.then(data=>{
    const domainArea = document.getElementById('domain');
    data.forEach(item => {
        const entry = document.createElement('div');
        entry.innerText = `${item.Name}: ${item.Domain}`;
        domainArea.appendChild(entry);
    });
})
.catch(error=>{
    console.error(error);
});
