const pageTitle = "Santani Nagarapageuh";
// create an object that maps the url to the template, title, and description
const routes = {
	"/": {
		template: "/src/scripts/globals/views/index.php",
		title: "Home | " + pageTitle,
		description: "This is the home page",
	},
	about: {
		template: "/src/scripts/globals/views/about.php",
		title: "About Us | " + pageTitle,
		description: "This is the about page",
	},
	blog: {
		template: "/src/scripts/globals/views/blog.php",
		title: "Blog | " + pageTitle,
		description: "This is the blog page",
	},
	blog_details: {
		template: "/src/scripts/globals/views/blog_details.php",
		title: "Blog | " + pageTitle,
		description: "This is the blog page",
	},
};

// create a function that watches the url and calls the urlLocationHandler
const locationHandler = async () => {
	// get the url path, replace hash with empty string
	var location = window.location.hash.replace("#", "");
	// if the path length is 0, set it to primary page route
	if (location.length == 0) {
		location = "/";
	}
	// get the route object from the routes object
	const route = routes[location] || routes["404"];
	// get the html from the template
	const html = await fetch(route.template).then((response) => response.text());
	// set the content of the content div to the html
	document.getElementById("main-page").innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
};
// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();