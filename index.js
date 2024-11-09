#!/usr/bin/env node

const { exec } = require("child_process");

const textToImage = require("text-to-image");

const options = {
	text: "Hello World!",
	font: "Arial",
	fontSize: 48,
	fontColor: "#0000FF",
	maxWidth: 600,
	padding: 20,
	align: "center",
	verticalAlign: "middle",
	textAlign: "center",
	rotation: 0,
	textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
	imageType: "image/png",
};

function dayOfTheWeek() {
	const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
	return days[new Date().getDay()];
}

// Generate an image
textToImage.generate("the day is " + dayOfTheWeek(), options).then(function (dataUrl) {
	exec("rm ./README.md");
	exec("touch README.md");
	exec(`echo "# myshy13\n" >> ./README.md`);
	exec(`echo "!["image"](${dataUrl})" >> ./README.md`);
});
