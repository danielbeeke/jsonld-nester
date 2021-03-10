export const flat = [{
	"@id": "http://example.com/contents/person/john-doe",
	"@type": ["http://example.com/content#Person"],
	"https://schema.org/dateCreated": [{
		"@value": "2021-03-09T13:44:53.543Z"
	}],
	"https://schema.org/dateModified": [{
		"@value": "2021-03-09T13:44:53.543Z"
	}],
	"https://schema.org/familyName": [{
		"@value": "John"
	}],
	"https://schema.org/image": [{
		"@id": "_:n3-0"
	}],
	"https://schema.org/givenName": [{
		"@value": "Doe"
	}]
}, {
	"@id": "_:n3-0",
	"https://schema.org/height": [{
		"@value": "991",
		"@type": "http://www.w3.org/2001/XMLSchema#integer"
	}],
	"https://schema.org/url": [{
		"@value": "https://www.example.com/john-doe.png"
	}],
	"https://schema.org/width": [{
		"@value": "720",
		"@type": "http://www.w3.org/2001/XMLSchema#integer"
	}]
}]

export const nested = [{
	"@id": "http://example.com/contents/person/john-doe",
	"@type": [
		"http://example.com/content#Person"
	],
	"https://schema.org/dateCreated": [{
		"@value": "2021-03-09T13:44:53.543Z"
	}],
	"https://schema.org/dateModified": [{
		"@value": "2021-03-09T13:44:53.543Z"
	}],
	"https://schema.org/familyName": [{
		"@value": "John"
	}],
	"https://schema.org/image": [{
		"https://schema.org/height": [{
			"@value": "991",
			"@type": "http://www.w3.org/2001/XMLSchema#integer"
		}],
		"https://schema.org/url": [{
			"@value": "https://www.example.com/john-doe.png"
		}],
		"https://schema.org/width": [{
			"@value": "720",
			"@type": "http://www.w3.org/2001/XMLSchema#integer"
		}]
	}],
	"https://schema.org/givenName": [{
		"@value": "Doe"
	}]
}]