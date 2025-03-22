function formatMessageTime(date) {
	return new Date(date).toLocaleTimeString("en-IN", {
		hour: "2-digit",
		minute: "2-digit",
		// second: "2-digit",
		hour12: true, // 12 hours format
	});
}

export default formatMessageTime;
