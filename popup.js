const evaluate = async (news) => {
	const newsResult = document.createElement('p');
	encoder = await use.load();
	embeddings = await encoder.embed(news);
	arr = await embeddings.array();
	model = await tf.loadLayersModel('https://santoshvijapure.github.io/model/model.json');
	console.log(model);
	result = await model.predict(tf.tensor(arr));
	result = await result.array();

	result = result[0][0];

	newsResult.innerHTML = result > 0.5 ? 'This is True' : 'This is Fake';
	document.getElementsByTagName('body')[0].appendChild(newsResult);
};

function clickHandler() {
	// Initialization work goes here.
	const newsText = document.getElementById('news').value;
	evaluate(newsText);
}

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').addEventListener('click', clickHandler);
});
