## US : Remove a user
As a user
I want to remove user
to only keep active users

## Acceptance criteria
Scenario 1:
Given a user Jean
And the task with id 3 is assigned to Jean
When Jean is removed
Then all assigned tasks is cleared 

Scenario 2:
Given an unknown user Hector
When Hector is removed
Then returns 404 Not Found

## Technical design:
There is no database in the app, the best way to do this would be for the "taskmanager" to listen for user deletions in the app.
The most direct solution would be the implementation of the "observe" design pattern.

## Technical tasks
- [x] create task-service for tasks manipulations
- [x] expose DELETE user on users-controller
- [x] write validation tests
- [ ] task-service should listen user-service in order to clear tasks when is needed (remember the proxy is used instead of user-service directly)