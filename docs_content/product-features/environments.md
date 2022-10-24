---
title: Environments
slug: S1E9-environments
createdAt: 2021-09-14T17:42:37.000Z
updatedAt: 2022-03-09T17:00:11.000Z
---

Environments can be assigned to sessions and errors by setting the environment option in [H.init()](/api/h-init). With the assignment, you can know search and filter sessions and errors based on the environment they come from.

Environments are also used to determine whether [Alerts](/product-features/alerts) are created.

## Example

```typescript
H.init("<YOUR_PROJECT_ID>", {
    environment: process.env.ENVIRONMENT
})
```
