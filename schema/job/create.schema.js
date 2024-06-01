const schema = {
    type: "object",
    properties:{
        title: { type: "string" },
        date: { type: "string", format: "date-time" },
        place: { type: "string" },
        description: { type: "string", maxLength: 255, minLength: 5 },
    },
    required: ["title", "date", "place", "descrition"],
}

module.exports = schema