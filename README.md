# movieQL

Movie API with GrapQL Server

## 0. pre-installation

```
npm i graphql-yoga
npm i -g babel-cli
npm i babel-cli babel-preset-env babel-preset-stage-3 --dev
```

## 1. Benefit of graphQL

### 1.1. overfetching

/users/1/ GET
To get only username, get all?

=> With graphql, get only what we need

### 1.2. underfetching

To init, request 3 time?
/feed/
/notifications/
/user/1/

=> only one endpoint

```typescript
// #send
query {
    feed {
        comments
        likeNumber
    }
    notifications {
        isRead
    }
    user {
        username
        profilePic
    }
}
// #from js
{
    feed: [
    {
        comments: 1,
        likeNumber: 20
    }
    ],
    notifications [
    {
        isRead: true
    },
    {
        isRead: false
    }
    ],
    user: {
        username: "henry"
        profilePic: "x"
    }

}
```

## 2. process

GraphQLServer => `query => resolver => schema.graphql` => result

## 3. types of predefined schema

query: select

mutation: DML

subscription

## ! means required (like typescript)

## overfetching example

```typescript
"message": "Field \"person\" of type \"Nicolas!\" must have a selection of subfields. Did you mean \"person { ... }\"?",
=> on playground, fetch only age
query {
  person {
      age
  }
}
```

## Query with argument

```typescript
query {
    person(id: 1) {
        name
    }
}
```

API: yts.am/api/v2/list_movies.json
