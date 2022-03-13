## US : Remove a user
As a user
I want to access securized resources
to protected data

## Acceptance criteria
Scenario 1:
Given an authorized user Jean
When Jean get /api/tasks/1
Then retrieve data 

Scenario 2:
Given an authorized application with x-api-key 
When get /api/tasks/1
Then retrieve data

Scenario 3:
Given an non authorized user Jean
When Jean get /api/tasks/1
Then retrieve error 500 

Scenario 4:
Given an non authorized application with x-api-key 
When get /api/tasks/1
Then retrieve error 500 

## Technical design:
It's necessary to chain all calls, because we will integrate multi thirds parties, and It' could be a big ball of mud without this chain of reponsability. 

## Technical tasks
- [x] Create authentication interceptor
- [ ] Throws error if user and x-api-key not valid
- [ ] Check user
- [ ] Check x-api-key
- [ ] Chain checks
