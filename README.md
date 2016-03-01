# Holiday

Service that checks wether or not a specific day is holiday or not.

## Usage

Visit `/holiday/check?date=yyyy-mm-dd` in order to check a date.

The response is a Json object with the following attributes:

* *success*: Can be true or false depending on the validity of the date
  parameter.

* *isHoliday*: It's only returned with a successful request and tells you if
  the date passed in is a holiday(*true*) or not(*false*).

* *message*: It's only returned with a failed request and gives you a
  description of what went wrong.

## Current Limitations

* Can only check one date at the time
