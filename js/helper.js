var activityData = {
	color: "red",
	row1: [ {
			icon: "code",
			title: "Hour of Code",
			desc: "The Hour of Code is a global movement designed to generate excitement in young people. Games, tutorials, and other events are organized."
		},
		{
			icon: "laptop_mac",
			title: "Workshops",
			desc: "Technical workshops are conducted by resource persons from TCE for college, school students and faculty."
		}, 
		{
			icon: "insert_chart",
			title: "Tool Demo",
			desc: "Students demonstrate modern tool usage and win exciting prizes."
		}
	],
	row2: [ {
			icon: "people",
			title: "Speaker programs",
			desc: "Industrial experts from companies give technical talk and interact with students at the campus."
		}, {
			icon: "event",
			title: "Infinity",
			desc: "TCE ACM Infinity is an inter-college symposium featuring workshops, talks, and events with cash prizes to win."
		}, {
			icon: "book",
			title: "AI Study Circle",
			desc: "Interested group of students learn, discuss, and develop collabratively on latest advancements under Artificial Intelligence."
		}
	]
}

var dataRow = "<div class='row scroll-animations activity-row' id='%rid%'></div>";
var dataCard = "<div class='card col m4 s12 no-shadow animated'>"+
				"<div class='card-image'>"+
				"<a onclick=\"Materialize.toast('Under construction', 4000)\" class='btn-floating halfway-fab waves-effect waves-light %icon-color% activity-icon no-shadow'>"+
				"<i class='material-icons custom-icon'>%data-icon%</i></a></div>"+
				"<div class='card-content2'>"+
				"<h5 class='card-head'>%data-title%</h5>"+
				"<p class='card-desc center-align'>%data-desc%</p></div></div>";