# PRECISELY FRONTEND CODE ASSIGNMENT

Solution demo available [here](https://zonked-test.surge.sh/).

Test Coverage:

| % Stmts | % Branch | % Funcs | % Lines |
| ------- | -------- | ------- | ------- |
| 91.02   | 89.36    | 80.56   | 90.85   |

## THE PROBLEM

The task is to create a sample contract automation platform. The platform will be split into three pages:

1. The homepage, which job is to link to the two other pages.
2. The contract list page. The purpose of the page is to list all contracts available in the platform.
3. The customer list page which should list all customers and the contracts connected to each customer.
   There is also a button for each customer which deletes the customer and all its contracts.

Wireframes of each page can be found at the end of this document.

Your job is to implement the same application on your own.

Which technologies you use are up to you, as long as the base is implemented with react and redux.

You are encouraged to use any surrounding technologies you feel comfortable with, as long as they fulfill a purpose.

Sample data structure for contract:

```javascript
const contract = { id: "0", name: "name", customerId: "customerId" };
```

Sample data structure for customer:

```javascript
const customer = { id: "0", name: "name" };
```

The contract and customer data are held in the redux store.

The application isn’t connected to a server.

Using create-react-app or similar as a starting point is encouraged.

## ASSESSMENT

You will be assessed mainly based a joint follow-up discussion of your implementation.

Emphasis will be put on code quality and why you made the design decisions you made.

Be prepared to motivate your decisions with regards to technologies, scalability, folder structure, naming and component/container hierarchy.
