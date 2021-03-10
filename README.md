# JSON-LD Nester

- Given a flat JSON-LD with multiple graphs, 
- goes through all the properties,
- replaces references to graphs with their respective graphs,
- removes the graphs that were nested from the root array.

From:
```
export const flat = [{
	"@id": "example:john-doe",
	"https://schema.org/image": [{
		"@id": "_:n3-0"
	}],
}, {
	"@id": "_:n3-0",
	"schema:height": 991,
	"schema:url": "https://www.example.com/john-doe.png",
	"schema:width": 720
}]
```

To:
```
export const nested = [{
	"@id": "http://example.com/contents/person/john-doe",
	"schema:image": [{
    "schema:height": 991,
    "schema:url": "https://www.example.com/john-doe.png",
    "schema:width": 720
	}]
}]
```