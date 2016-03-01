# Documentation First API Implementation

This is a demo of how to implement an API in Node.js by writing its documentation first. In fact, there is **no specific code** to handle the defined API endpoints. Everything is automatically generated from the Swagger specification.

The proposed example is a simple temperature conversion API defined at `api/swagger.json`. Generated documentation can be accessed at [http://localhost:3000/docs](http://localhost:3000/docs).

## How to run the demo

### Mock mode

Please follow these steps to run the API in `mock` mode:

1. git checkout master
2. npm install
3. npm run dev
4. `curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/convert?temperature=10&unit=C'`

You should see the following output:

```
{
  "conversions": [
    {
      "temperature": 1,
      "unit": "C"
    }
  ]
}
```
### Live mode

The difference between mock mode and live mode is that the code responsible for handling the actual temperature conversion is implemented in `controllers/Temperature.js`.

Please follow these steps to run the API in live `live` mode:

1. git checkout develop
2. npm install
3. npm Start
4. `curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/convert?temperature=10&unit=C'`

You should see the following output:

```
{
  "conversions": [
    {
      "temperature": 10,
      "unit": "C"
    },
    {
      "temperature": 50,
      "unit": "F"
    },
    {
      "temperature": 283.15,
      "unit": "K"
    }
  ]
}
```
