# the-good-corner

```mermaid
erDiagram
    CATEGORY ||--o{ AD : has
    CATEGORY {
        integer id
        text name
    }
    AD {
        integer id
        text title
        text description
        text author
        real price
        text createdAt
        text imageUrl
        text city
        integer categoryId
    }
```
```mermaid
erDiagram
    CATEGORY ||--o{ AD : contains
```
