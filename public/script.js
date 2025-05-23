google.charts.load('current', {
	'packages':['geochart']
});
google.charts.setOnLoadCallback(drawMap);

const newText = ".jp";
// const googlemap_api = process.env.GOOGLE_MAP_API;

fetch('WorldMapList.json')
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

function drawMap() {
	//都道府県単位のデータ
	var data = [
	    ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
	];
	var dt = google.visualization.arrayToDataTable(data);
	var options = {
		// region: 'world',  //地域
		// displayMode: 'auto', // regions=塗りつぶし, markers=マーカー 
		// backgroundColor: '#ebf7fe', //背景色
		// resolution: 'provinces',
		// colors:['white','green'] //階層の色
	};
	//出力するDivを指定して chart を生成
	var chart = new google.visualization.GeoChart(document.getElementById('region-div'));
	//描画
	chart.draw(dt, options);
}

drawMap();