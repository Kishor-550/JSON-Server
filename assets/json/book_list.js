const book_list = [
	{
		isbn: "9781593279509",
		title: "Eloquent JavaScript, Third Edition",
		subtitle: "A Modern Introduction to Programming",
		author: "Marijn Haverbeke",
		published: "2018-12-04T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 472,
		description:
			"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
		website: "http://eloquentjavascript.net/",
		image_url: "https://eloquentjavascript.net/img/cover.jpg",
		star_rating: 2,
		isBorrowable: true,
	},
	{
		isbn: "9781491943533",
		title: "Practical Modern JavaScript",
		subtitle: "Dive into ES6 and the Future of JavaScript",
		author: "Nicolás Bevacqua",
		published: "2017-07-16T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 334,
		description:
			"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
		website: "https://github.com/mjavascript/practical-modern-javascript",
		image_url:
			"https://camo.githubusercontent.com/18565999d9ce20a73f987f933e1f73586d16dd676f492c99fc9f121c376a210a/68747470733a2f2f692e696d6775722e636f6d2f476254634475562e706e67",
		star_rating: 3.2,
		isBorrowable: false,
	},
	{
		isbn: "9781593277574",
		title: "Understanding ECMAScript 6",
		subtitle: "The Definitive Guide for JavaScript Developers",
		author: "Nicholas C. Zakas",
		published: "2016-09-03T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 352,
		description:
			"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
		website: "https://leanpub.com/understandinges6/read",
		image_url:
			"https://d2sofvawe08yqg.cloudfront.net/understandinges6/s_shelf?1620418785",
		star_rating: 1.7,
		isBorrowable: true,
	},
	{
		isbn: "9781449365035",
		title: "Speaking JavaScript",
		subtitle: "An In-Depth Guide for Programmers",
		author: "Axel Rauschmayer",
		published: "2014-04-08T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 460,
		description:
			"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
		website: "http://speakingjs.com/",
		image_url: "http://speakingjs.com/speakingjs_cover_large.jpg",
		star_rating: 4.3,
		isBorrowable: false,
	},
	{
		isbn: "9781449331818",
		title: "Learning JavaScript Design Patterns",
		subtitle: "A JavaScript and jQuery Developer's Guide",
		author: "Addy Osmani",
		published: "2012-08-30T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 254,
		description:
			"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
		website:
			"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
		image_url:
			"https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-2-CRC.png",
		star_rating: 5,
		isBorrowable: true,
	},
	{
		isbn: "9798602477429",
		title: "You Don't Know JS Yet",
		subtitle: "Get Started",
		author: "Kyle Simpson",
		published: "2020-01-28T00:00:00.000Z",
		publisher: "Independently published",
		pages: 143,
		description:
			"The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
		website:
			"https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
		image_url:
			"https://github.com/getify/You-Dont-Know-JS/raw/2nd-ed/get-started/images/cover.png",
		star_rating: 2.5,
		isBorrowable: false,
	},
	{
		isbn: "9781484200766",
		title: "Pro Git",
		subtitle: "Everything you neeed to know about Git",
		author: "Scott Chacon and Ben Straub",
		published: "2014-11-18T00:00:00.000Z",
		publisher: "Apress; 2nd edition",
		pages: 458,
		description:
			"Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
		website: "https://git-scm.com/book/en/v2",
		image_url: "https://git-scm.com/images/progit2.png",
		star_rating: 5,
		isBorrowable: true,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 2.4,
		isBorrowable: true,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 3.7,
		isBorrowable: false,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 1.8,
		isBorrowable: true,
	},
	{
		isbn: "9781484200766",
		title: "Pro Git",
		subtitle: "Everything you neeed to know about Git",
		author: "Scott Chacon and Ben Straub",
		published: "2014-11-18T00:00:00.000Z",
		publisher: "Apress; 2nd edition",
		pages: 458,
		description:
			"Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
		website: "https://git-scm.com/book/en/v2",
		image_url: "https://git-scm.com/images/progit2.png",
		star_rating: 5,
		isBorrowable: true,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 2.4,
		isBorrowable: true,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 3.7,
		isBorrowable: false,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 1.8,
		isBorrowable: true,
	},
	{
		isbn: "9781593279509",
		title: "Eloquent JavaScript, Third Edition",
		subtitle: "A Modern Introduction to Programming",
		author: "Marijn Haverbeke",
		published: "2018-12-04T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 472,
		description:
			"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
		website: "http://eloquentjavascript.net/",
		image_url: "https://eloquentjavascript.net/img/cover.jpg",
		star_rating: 2,
		isBorrowable: true,
	},
	{
		isbn: "9781491943533",
		title: "Practical Modern JavaScript",
		subtitle: "Dive into ES6 and the Future of JavaScript",
		author: "Nicolás Bevacqua",
		published: "2017-07-16T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 334,
		description:
			"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
		website: "https://github.com/mjavascript/practical-modern-javascript",
		image_url:
			"https://camo.githubusercontent.com/18565999d9ce20a73f987f933e1f73586d16dd676f492c99fc9f121c376a210a/68747470733a2f2f692e696d6775722e636f6d2f476254634475562e706e67",
		star_rating: 3.2,
		isBorrowable: false,
	},
	{
		isbn: "9781593277574",
		title: "Understanding ECMAScript 6",
		subtitle: "The Definitive Guide for JavaScript Developers",
		author: "Nicholas C. Zakas",
		published: "2016-09-03T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 352,
		description:
			"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
		website: "https://leanpub.com/understandinges6/read",
		image_url:
			"https://d2sofvawe08yqg.cloudfront.net/understandinges6/s_shelf?1620418785",
		star_rating: 1.7,
		isBorrowable: true,
	},
	{
		isbn: "9781449365035",
		title: "Speaking JavaScript",
		subtitle: "An In-Depth Guide for Programmers",
		author: "Axel Rauschmayer",
		published: "2014-04-08T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 460,
		description:
			"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
		website: "http://speakingjs.com/",
		image_url: "http://speakingjs.com/speakingjs_cover_large.jpg",
		star_rating: 4.3,
		isBorrowable: false,
	},
	{
		isbn: "9781449331818",
		title: "Learning JavaScript Design Patterns",
		subtitle: "A JavaScript and jQuery Developer's Guide",
		author: "Addy Osmani",
		published: "2012-08-30T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 254,
		description:
			"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
		website:
			"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
		image_url:
			"https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-2-CRC.png",
		star_rating: 5,
		isBorrowable: true,
	},
	{
		isbn: "9798602477429",
		title: "You Don't Know JS Yet",
		subtitle: "Get Started",
		author: "Kyle Simpson",
		published: "2020-01-28T00:00:00.000Z",
		publisher: "Independently published",
		pages: 143,
		description:
			"The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
		website:
			"https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
		image_url:
			"https://github.com/getify/You-Dont-Know-JS/raw/2nd-ed/get-started/images/cover.png",
		star_rating: 2.5,
		isBorrowable: false,
	},
];

const popular_book_list = [
	{
		isbn: "9781593279509",
		title: "Eloquent JavaScript, Third Edition",
		subtitle: "A Modern Introduction to Programming",
		author: "Marijn Haverbeke",
		published: "2018-12-04T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 472,
		description:
			"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
		website: "http://eloquentjavascript.net/",
		image_url: "https://eloquentjavascript.net/img/cover.jpg",
		star_rating: 2,
		isBorrowable: true,
	},
	{
		isbn: "9781491943533",
		title: "Practical Modern JavaScript",
		subtitle: "Dive into ES6 and the Future of JavaScript",
		author: "Nicolás Bevacqua",
		published: "2017-07-16T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 334,
		description:
			"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
		website: "https://github.com/mjavascript/practical-modern-javascript",
		image_url:
			"https://camo.githubusercontent.com/18565999d9ce20a73f987f933e1f73586d16dd676f492c99fc9f121c376a210a/68747470733a2f2f692e696d6775722e636f6d2f476254634475562e706e67",
		star_rating: 3.2,
		isBorrowable: false,
	},
	{
		isbn: "9781593277574",
		title: "Understanding ECMAScript 6",
		subtitle: "The Definitive Guide for JavaScript Developers",
		author: "Nicholas C. Zakas",
		published: "2016-09-03T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 352,
		description:
			"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
		website: "https://leanpub.com/understandinges6/read",
		image_url:
			"https://d2sofvawe08yqg.cloudfront.net/understandinges6/s_shelf?1620418785",
		star_rating: 1.7,
		isBorrowable: true,
	},
	{
		isbn: "9781449365035",
		title: "Speaking JavaScript",
		subtitle: "An In-Depth Guide for Programmers",
		author: "Axel Rauschmayer",
		published: "2014-04-08T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 460,
		description:
			"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
		website: "http://speakingjs.com/",
		image_url: "http://speakingjs.com/speakingjs_cover_large.jpg",
		star_rating: 4.3,
		isBorrowable: false,
	},
	{
		isbn: "9781449331818",
		title: "Learning JavaScript Design Patterns",
		subtitle: "A JavaScript and jQuery Developer's Guide",
		author: "Addy Osmani",
		published: "2012-08-30T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 254,
		description:
			"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
		website:
			"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
		image_url:
			"https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-2-CRC.png",
		star_rating: 5,
		isBorrowable: true,
	},
	{
		isbn: "9798602477429",
		title: "You Don't Know JS Yet",
		subtitle: "Get Started",
		author: "Kyle Simpson",
		published: "2020-01-28T00:00:00.000Z",
		publisher: "Independently published",
		pages: 143,
		description:
			"The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
		website:
			"https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
		image_url:
			"https://github.com/getify/You-Dont-Know-JS/raw/2nd-ed/get-started/images/cover.png",
		star_rating: 2.5,
		isBorrowable: false,
	},
	{
		isbn: "9781484200766",
		title: "Pro Git",
		subtitle: "Everything you neeed to know about Git",
		author: "Scott Chacon and Ben Straub",
		published: "2014-11-18T00:00:00.000Z",
		publisher: "Apress; 2nd edition",
		pages: 458,
		description:
			"Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
		website: "https://git-scm.com/book/en/v2",
		image_url: "https://git-scm.com/images/progit2.png",
		star_rating: 5,
		isBorrowable: true,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 2.4,
		isBorrowable: true,
	},
];

const intresting_book_list =[
	
	{
		isbn: "9781449331818",
		title: "Learning JavaScript Design Patterns",
		subtitle: "A JavaScript and jQuery Developer's Guide",
		author: "Addy Osmani",
		published: "2012-08-30T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 254,
		description:
			"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
		website:
			"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
		image_url:
			"https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-2-CRC.png",
		star_rating: 5,
		isBorrowable: true,
	},
	{
		isbn: "9798602477429",
		title: "You Don't Know JS Yet",
		subtitle: "Get Started",
		author: "Kyle Simpson",
		published: "2020-01-28T00:00:00.000Z",
		publisher: "Independently published",
		pages: 143,
		description:
			"The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
		website:
			"https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
		image_url:
			"https://github.com/getify/You-Dont-Know-JS/raw/2nd-ed/get-started/images/cover.png",
		star_rating: 2.5,
		isBorrowable: false,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 2.4,
		isBorrowable: true,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 3.7,
		isBorrowable: false,
	},
	{
		isbn: "9781484242216",
		title: "Rethinking Productivity in Software Engineering",
		subtitle: "",
		author: "Caitlin Sadowski, Thomas Zimmermann",
		published: "2019-05-11T00:00:00.000Z",
		publisher: "Apress",
		pages: 310,
		description:
			'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
		website: "https://doi.org/10.1007/978-1-4842-4221-6",
		image_url:
			"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6?as=webp",
		star_rating: 1.8,
		isBorrowable: true,
	},
	{
		isbn: "9781593279509",
		title: "Eloquent JavaScript, Third Edition",
		subtitle: "A Modern Introduction to Programming",
		author: "Marijn Haverbeke",
		published: "2018-12-04T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 472,
		description:
			"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
		website: "http://eloquentjavascript.net/",
		image_url: "https://eloquentjavascript.net/img/cover.jpg",
		star_rating: 2,
		isBorrowable: true,
	},
	{
		isbn: "9781491943533",
		title: "Practical Modern JavaScript",
		subtitle: "Dive into ES6 and the Future of JavaScript",
		author: "Nicolás Bevacqua",
		published: "2017-07-16T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 334,
		description:
			"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
		website: "https://github.com/mjavascript/practical-modern-javascript",
		image_url:
			"https://camo.githubusercontent.com/18565999d9ce20a73f987f933e1f73586d16dd676f492c99fc9f121c376a210a/68747470733a2f2f692e696d6775722e636f6d2f476254634475562e706e67",
		star_rating: 3.2,
		isBorrowable: false,
	},
	{
		isbn: "9781593277574",
		title: "Understanding ECMAScript 6",
		subtitle: "The Definitive Guide for JavaScript Developers",
		author: "Nicholas C. Zakas",
		published: "2016-09-03T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 352,
		description:
			"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
		website: "https://leanpub.com/understandinges6/read",
		image_url:
			"https://d2sofvawe08yqg.cloudfront.net/understandinges6/s_shelf?1620418785",
		star_rating: 1.7,
		isBorrowable: true,
	},
	{
		isbn: "9781449365035",
		title: "Speaking JavaScript",
		subtitle: "An In-Depth Guide for Programmers",
		author: "Axel Rauschmayer",
		published: "2014-04-08T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 460,
		description:
			"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
		website: "http://speakingjs.com/",
		image_url: "http://speakingjs.com/speakingjs_cover_large.jpg",
		star_rating: 4.3,
		isBorrowable: false,
	}
]