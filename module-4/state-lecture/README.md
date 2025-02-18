## How can we store data

### variables (const, let)

pros:
Temporary

cons:
Temporary
Application does not react to the variable changing
Can't be passed when opening in new tab(refresh)

### useState

Can't be passed when opening in new tab(refresh)
Local to component, makes things more readable, easier to edit

### stateStores (zustand, redux, context)

Can't be passed when opening in new tab(refresh)
global state, can access everywhere
more side effects
code can be harder to read when it gets complicated

### localStorage 5mb

Cons:
Security
Bugs persist

Pros:
Can be passed when opening in new tab

### sessionStorage 5mb

### cookies ( but not prefered for front end) 4kb

### url (queries, params)

Pros:
can send information to other people
save
