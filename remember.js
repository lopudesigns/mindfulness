const notifier = require('node-notifier')
const fs = require('fs')


// reading files
	// var dir = 'lists/'

	// fs.readdir(dir, dir=>{
	// 	console.log(files)
	// 	files.forEach(file=>{
	// 		fs.readFile(dir+file)
	// 	})
	// })

// json hard code
let reminders = [
	{
		message: 'Contact Rob Murrary NEIS Chisholm',
		every: 7
	},
	{
		message: 'Excercise',
		every: 8
	},
	{
		message: 'Apply for investment opportunities',
		every: 7
	},
	{
		message: 'Apply for jobs',
		every: 20
	},
	{
		message: 'Research Loans',
		every: 20
	},
	{
		message: 'Call insurance companies',
		every: 10
	},
	{
		message: 'Manage job applications',
		every: 3
	},
]

for(var i = 0; i < reminders.length; i++)
{
	let reminder = reminders[i]
	reminding(reminder)
}
// String
// notifier.notify('Message')
 
// Object
// notifier.notify({
//   title: 'My notification',
//   message: 'Hello, there!'
// })

// functions
function recursiveTimeout(reminder)
{
	var minmil = 60000
	var rand = random((reminder.every-2), (reminder.every+2))*minmil
	setTimeout(function() {
		remind(reminder)
		recursiveTimeout(reminder)  
	}, rand)
}

function random(min,max) 
{
    return Math.random()*(max-min+1)+min
}

function reminding(reminder)
{
	recursiveTimeout(reminder)
}

function remind(reminder)
{
	notifier.notify({
		title: reminder.title || 'Remember!',
		message: reminder.message || 'Remember!',
		timeout: 7000
	})
}