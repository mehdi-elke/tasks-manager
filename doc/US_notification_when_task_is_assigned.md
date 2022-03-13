## US : Remove a user
As a user
I want to notify assigned user
to keep him informed

## Acceptance criteria
Scenario 1:
Given a task
When the task is assigned to a user
Then the user is assigned
And a communication is sent 


## Technical design:


## Technical tasks
- [x] create communications-service and controller
- [x] expose GET communication on users-controller
- [x] write validation tests
- [x] create notification according the type of the task

## Code review

Currently the condition for the creation notification is quite simple, but in the next user story, it will become more complicated both for the choice and for the actions to be carried out. Better use the strategy pattern