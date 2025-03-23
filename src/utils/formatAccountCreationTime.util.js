function formatAccountCreationTime(date) {
	return new Date(date).toLocaleDateString("en-IN", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

export default formatAccountCreationTime;
