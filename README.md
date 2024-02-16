#API List
API Specification for Cavalry Guilds

1. **User API:**

   - Create User: `POST /v1/users`
   - Get All Users: `GET /v1/users`
   - Get User by ID: `GET /v1/users/{userId}`
   - Update User: `PUT /v1/users/{userId}`
   - Delete User: `DELETE /v1/users/{userId}`

2. **Auth API:** (For authentication purposes)

   - User Login: `POST /v1/auth/login`
   - User Logout: `POST /v1/auth/logout`
   - User Register: `POST /v1/auth/register`
   - User Refresh Tokens: `POST /v1/auth/refresh-tokens`

3. **Deck API:**

   - Create Deck: `POST /v1/decks`
   - Get All Decks: `GET /v1/decks`
   - Get Deck by ID: `GET /v1/decks{deckId}`
   - Update Deck: `PUT /v1/decks{deckId}`
   - Delete Deck: `DELETE /v1/decks{deckId}}`
   - Get Decks by User: `GET /v1/users/{userId}/decks`
   - Get Decks by Archetype: `GET /v1/archetypes/{archetypeId}/decks`

4. **Archetype API:**

   - Create Archetype: `POST /v1/archetypes`
   - Get All Archetypes: `GET /v1/archetypes`
   - Get Archetype by ID: `GET /v1/archetypes/{archetypeId}`
   - Update Archetype: `PUT /v1/archetypes/{archetypeId}`
   - Delete Archetype: `DELETE /v1/archetypes/{archetypeId}`

5. **Follow API:**

   - Create Follow: `POST /v1/follows`
   - Delete Follow: `DELETE /v1/follows/{followId}`
   - Get Followers by User: `GET /v1/users/{userId}/followers`
   - Get Followings by User: `GET /v1/users/{userId}/followings`

6. **Favorite Deck API:**

   - Create Favorite Deck: `POST /v1/favorite-decks`
   - Delete Favorite Deck: `DELETE /v1/favorite-decks/{favoriteDecksId}`
   - Get Favorite Decks by User: `GET /v1/users/{userId}/favorite-decks`
   - Get Followers Deck by Deck `GET v1/decks/{deckId}/followers`
