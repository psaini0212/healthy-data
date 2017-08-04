# healthy-data
Data mocks for HealthY app.

## Install
`npm i`

## Run
`npm start`

## API Documentation
Get status  
`GET /`

Sample response:
```
{
  "status": "ok"
}
```

Get health data  
`GET /api/v1/health`

Sample response:
```
{
  "heartRate":[
    {"value":65,"timestamp":"2017-08-03T18:30:00.000Z"},
    {"value":70,"timestamp":"2017-08-03T18:31:00.000Z"},
    {"value":67,"timestamp":"2017-08-03T18:32:00.000Z"}
  ]
}
```
